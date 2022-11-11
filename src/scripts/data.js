const _ = require("lodash");
const $ = require("jquery");
//import $ from "jquery";

export default class GovData {
  constructor() {
    this.url = "https://data.gov.sg/api/action/datastore_search";
    this.resource_id = "f1765b54-a209-4718-8d38-a39237f502b3";
  }

  yyyymm(years) {
    var start = years[0];
    var end = years[1];
    years = _.range(start, end + 1);
    var r = [];
    years.forEach((year) => {
      for (let i = 1; i < 13; i++) {
        var month = String(i);
        if (i < 10) month = month.padStart(2, "0");
        r.push(`${year}-${month}`);
      }
    });
    return r;
  }
  async getData({
    years = [],
    limit = 1,
    town,
    flat_type,
    street_name,
    floor_area_sqm,
  } = {}) {
    if (years.length == 0) {
      throw "No year is included";
    }

    var addParams = (a, b) => {
      return a.substring(0, a.length - 1) + b + a.substring(a.length - 1);
    };

    var town_string = "";
    var flat_type_string = "";
    var street_name_string = "";
    var floor_area_sqm_string = "";

    if (typeof town !== "undefined") {
      town_string = `"town":"${town}"`;
    }
    if (typeof flat_type !== "undefined") {
      flat_type_string = `"flat_type":"${flat_type}"`;
    }
    if (typeof street_name !== "undefined") {
      street_name_string = `"street_name":"${street_name}"`;
    }
    if (typeof floor_area_sqm !== "undefined") {
      floor_area_sqm_string = `"floor_area_sqm":${floor_area_sqm}`;
    }

    var queries = [
      town_string,
      flat_type_string,
      street_name_string,
      floor_area_sqm_string,
    ];

    var q = "";

    var YYYYMMs = this.yyyymm(years);
    var promises = [];

    YYYYMMs.forEach((date) => {
      q = `q={"month":"${date}"}`;
      queries.forEach((query) => {
        if (query.length > 0) q = addParams(q, `,${query}`);
      });

      var url = `${this.url}?resource_id=${this.resource_id}&limit=${limit}&${q}`;
      var promise = $.ajax({
        url: url,
        contentType: "application/json",
        type: "GET",
        success: (data) => {
          return { date: data.result.records };
        },
        error: (XMLHttpRequest, textStatus, errorThrow) => {
          console.log(
            JSON.parse(XMLHttpRequest.responseText),
            textStatus,
            errorThrow
          );
        },
      }).then((r) => {
        return r.result.records;
      });
      promises.push(promise);
    });
    var r = [];
    console.log(promises.length);
    await Promise.all(promises).then((results) => {
      try{
        if (!results.length > 0) return r;
        var obj = {};
        var qTotal = 0;
        var qMin = Number(results[0][0]["resale_price"]);
        var qMax = Number(results[0][0]["resale_price"]);
        var qResults = [];
  
        obj["byYear"] = {};
        obj["byMonth"] = {};
  
        results.forEach((records) => {
          if (!records.length) return;
  
          var total = 0;
          var month = records[0]["month"];
          var year = records[0]["month"].split("-")[0];
          var min = Number(records[0]["resale_price"]);
          var max = Number(records[0]["resale_price"]);
  
          records.forEach((record) => {
            qResults.push(record);
            var price = Number(record["resale_price"]);
  
            total += price;
            qTotal += price;
  
            if (price < min) min = price;
            if (price > max) max = price;
            if (price > qMax) qMax = price;
            if (price < qMin) qMin = price;
  
            if (typeof obj["byYear"][year] == "undefined") {
              obj["byYear"][year] = {};
              obj["byYear"][year]["total"] = price;
              obj["byYear"][year]["min"] = price;
              obj["byYear"][year]["max"] = price;
              obj["byYear"][year]["avg"] = price;
              obj["byYear"][year]["records"] = [record];
            } else {
  
              obj["byYear"][year]["total"] += price;
  
              if (price < obj["byYear"][year]["min"]) obj["byYear"][year]["min"] = price;
              if (price > obj["byYear"][year]["max"]) obj["byYear"][year]["max"] = price;
              obj["byYear"][year]["records"].push(record);
  
              obj["byYear"][year]["avg"] = obj["byYear"][year]["total"]/obj["byYear"][year]["records"].length;
              
            }
          });
          var avg = total / records.length;
  
          obj["byMonth"][month] = {};
          obj["byMonth"][month]["total"] = total;
          obj["byMonth"][month]["min"] = min;
          obj["byMonth"][month]["max"] = max;
          obj["byMonth"][month]["avg"] = avg;
          obj["byMonth"][month]["records"] = records;
        });
  
        obj["avg"] = qTotal / qResults.length;
        obj["min"] = qMin;
        obj["max"] = qMax;
        obj["results"] = qResults;
  
        console.log(obj);
        return obj;  
      }
      catch(e){
        console.log(e)
        return e
      }
    });
  }
}
