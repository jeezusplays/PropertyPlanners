const _ = require("lodash");
const $ = require("jquery");
//import $ from "jquery";

export default class GovData {
  constructor(url, resource_id) {
    this.url = url;
    this.resource_id = resource_id;
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
      floor_area_sqm_string = `"floor_area_sqm":"${floor_area_sqm}"`;
    }

    var queries = [
      town_string,
      flat_type_string,
      street_name_string,
      floor_area_sqm_string,
    ];

    var q = "";

    var YYYYMMs = this.yyyymm(years);
    var promises=[]

    YYYYMMs.forEach((date) => {
      q = `q={"month":"${date}"}`;
      queries.forEach((query) => {
        if (query.length > 0) q = addParams(q, `,${query}`);
      });

      var url = `${this.url}?resource_id=${this.resource_id}&limit=${limit}&${q}`;
      console.log(url)
      var promise = $.ajax({
        url: url,
        contentType: "application/json",
        type: "GET",
        success: (data) => {
          return data.result.records;
        },
        error: (XMLHttpRequest, textStatus, errorThrow) => {
          console.log(JSON.parse(XMLHttpRequest.responseText),textStatus,errorThrow);
        },
      }).then((r) => {
        return r.result.records;
      });
      promises.push(promise)

    });
    var r = []
    console.log(promises.length)
    Promise.all(promises).then(results=>{
      results.forEach(result=>{
        console.log(result.length)
        r = r.concat(result)
      })
      console.log(r)
    })
    
  }
}
