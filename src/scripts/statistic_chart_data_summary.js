/* global $ */
/* global Chart */
/* eslint-disable no-unused-vars */

// Spinner overlay
var spinner_overlay = "<div class='spinner-border text-success centerAll d-block' role='status' style='width: 5rem; height: 5rem; position: absolute; top: 50%; left: 50%'>";
document.getElementById("spinner_overlay").innerHTML = spinner_overlay;

// API Call
var overall_average = 0;
var sqm = 0;
var yearLeaseList = [];
var yearLeaseDict = {};
var yearList = [];
var yearDict = {};
var monthList = [];
var monthDict = {};
var year_mm_list = [];
var year_mm_dict = {};
var year_mm_list_price = [];
var year_mm_dict_price = {};
var room_list = [];
var room_dict = {};
var town_list = [];
var town_dict = {};
var story_list = [];
var story_dict= [];

var data = {
resource_id: 'f1765b54-a209-4718-8d38-a39237f502b3', // the resource id
limit: 150000, // Set 150000 results
// q: 
};

$.ajax({
url: 'https://data.gov.sg/api/action/datastore_search',
data: data,
success: function(data) {
    for (var x = 0; x < data.result.records.length; x++)
    {
    var current_record = data.result.records[x];
    overall_average += Number(current_record.resale_price);
    sqm += Number(current_record.resale_price)/Number(current_record.floor_area_sqm);

    // Append resale prices by lease year
    if (!yearLeaseList.includes(current_record.lease_commence_date)){
        yearLeaseList.push(current_record.lease_commence_date);
        yearLeaseDict[current_record.lease_commence_date] = [Number(current_record.resale_price), 1];
    }
    else {
        yearLeaseDict[current_record.lease_commence_date][0] += Number(current_record.resale_price);
        yearLeaseDict[current_record.lease_commence_date][1] += 1;
    }

    // Append resale prices by year
    if (!yearList.includes(current_record.month.slice(0,4))){
        yearList.push(current_record.month.slice(0,4));
        yearDict[current_record.month.slice(0,4)] = [Number(current_record.resale_price), 1];
    }
    else {
        yearDict[current_record.month.slice(0,4)][0] += Number(current_record.resale_price);
        yearDict[current_record.month.slice(0,4)][1] += 1;
    }

    // Append resale prices by month
    if (!monthList.includes(current_record.month.slice(5,7))){
        monthList.push(current_record.month.slice(5,7));
        monthDict[current_record.month.slice(5,7)] = [Number(current_record.resale_price), 1];
    }
    else {
        monthDict[current_record.month.slice(5,7)][0] += Number(current_record.resale_price);
        monthDict[current_record.month.slice(5,7)][1] += 1;
    }

    // Append volume of transacted resale properties
    if (!year_mm_list.includes(current_record.month)){
        year_mm_list.push(current_record.month);
        year_mm_dict[current_record.month] = 1
    }
    else {
        year_mm_dict[current_record.month] += 1;
    }

    // Append price of transacted resale properties
    if (!year_mm_list_price.includes(current_record.month)){
        year_mm_list_price.push(current_record.month);
        year_mm_dict_price[current_record.month] = [1, Number(current_record.resale_price)]
    }
    else {
        year_mm_dict_price[current_record.month][0] += 1;
        year_mm_dict_price[current_record.month][1] += Number(current_record.resale_price);
    }

    // Append volume of transacted resale room type
    if (!room_list.includes(current_record.flat_type)){
        room_list.push(current_record.flat_type);
        room_dict[current_record.flat_type] = 1
    }
    else {
        room_dict[current_record.flat_type] += 1;
    }
    
    // Append price and volume of transacted resale town
    if (!town_list.includes(current_record.town)){
        town_list.push(current_record.town);
        town_dict[current_record.town] = [1, current_record.resale_price/current_record.floor_area_sqm];
    }
    else {
        town_dict[current_record.town][0] += 1;
        town_dict[current_record.town][1] += current_record.resale_price/current_record.floor_area_sqm;
    }

    // Append price and volume of transacted resale stories
    if (!story_list.includes(current_record.storey_range)){
        story_list.push(current_record.storey_range);
        story_dict[current_record.storey_range] = [1, current_record.resale_price/current_record.floor_area_sqm];
    }
    else {
        story_dict[current_record.storey_range][0] += 1;
        story_dict[current_record.storey_range][1] += current_record.resale_price/current_record.floor_area_sqm;
    }

    }

    // Output statistics data summary
    overall_average = (overall_average/data.result.records.length).toFixed(0);
    sqm = (sqm/data.result.records.length).toFixed(0);
    document.getElementById("resale_price_year_difference").innerHTML = computeYearOnYearAverageResalePrices(yearDict);
    document.getElementById("resale_volume_year_difference").innerHTML = computeYearOnYearVolumeTransacted(year_mm_dict);

    document.getElementById("data_table").innerHTML = 
    "<li>HDB Units Resold: <u>" + data.result.records.length + "</u></li>" +
    "<li>HDB Unit Mean Price: <u>$" + overall_average + "</u></li>" +
    "<li>Price Per Square Meter: <u>$" + sqm + "/sqm</u></li>" ;

    // Compute previous year + current year average resale prices in percentage
    function computeYearOnYearAverageResalePrices (yearDict){
    var current_year = new Date().getFullYear();
    var previous_year = current_year - 1;
    var image = "";
    
    var current_year_average_price = yearDict[current_year][0]/yearDict[current_year][1];
    var previous_year_average_price = yearDict[previous_year][0]/yearDict[previous_year][1];
    
    var percentage_difference = ((current_year_average_price - previous_year_average_price) / current_year_average_price) * 100
    
    // Calculate HDB Resale price averages for current year + previous year 
    if (Math.sign(percentage_difference) === -1 )
    {
        image = "<img id = 'decrease_resale_price' src = '../assets/green_triangle_down.png' width = 25px>";
    }
    else
    {
        image = "<img id = 'increase_resale_price' src = '../assets/red_triangle_up.png' width = 25px>";
    }

    var year_info = "<i>" + previous_year + ' vs ' + current_year + "</i>";
    document.getElementById("year_vs_year").innerHTML = year_info;

    return percentage_difference.toFixed(1) + "%" + image + "<br>";
    }

    function computeYearOnYearVolumeTransacted(year_mm_dict){
    var current_year = new Date().getFullYear();
    var previous_year = current_year - 1;
    var image = "";
    var current_year_dict_volume = 0;
    var previous_year_dict_volume = 0;

    var current_year_dict = Object.keys(year_mm_dict).
        filter((key) => key.includes(current_year)).
        reduce((cur, key) => { return Object.assign(cur, { [key]: year_mm_dict[key] })}, {});
    
    var previous_year_dict = Object.keys(year_mm_dict).
        filter((key) => key.includes(previous_year)).
        reduce((cur, key) => { return Object.assign(cur, { [key]: year_mm_dict[key] })}, {});
    
    Object.values(current_year_dict).forEach(myCurrSum);
    function myCurrSum (value){
        current_year_dict_volume += value;
    }

    Object.values(previous_year_dict).forEach(myPrevSum);
    function myPrevSum (value){
        previous_year_dict_volume += value;
    }

    var average_sales_current_year = Number((current_year_dict_volume / Object.keys(current_year_dict).length).toFixed(0));
    var average_sales_previous_year = Number((previous_year_dict_volume / Object.keys(previous_year_dict).length).toFixed(0));
    var percentage_difference = ((average_sales_current_year - average_sales_previous_year) / average_sales_current_year) * 100

    // Calculate HDB Resale volume averages for current year + previous year, adjusted for daily month averages since current year has not ended
    if (Math.sign(percentage_difference) === -1 )
    {
        image = "<img id = 'decrease_resale_volume' src = '../assets/red_triangle_down.png' width = 25px>";
    }
    else
    {
        image = "<img id = 'increase_resale_volume' src = '../assets/green_triangle_up.png' width = 25px>";
    }

    var year_info = "<i>" + previous_year + ' vs ' + current_year + " (*Monthly Averaged)</i>";
    document.getElementById("year_vs_year_volume").innerHTML = year_info;

    return percentage_difference.toFixed(1) + "%" + image + "<br>";
    }

    function computePriceForecast(){
    var year_dict_new = {}


    for (const key in yearDict) {
        year_dict_new[key] = Number((yearDict[key][0]/yearDict[key][1]).toFixed(0));
    }
    var min = Object.values(year_dict_new)[0];
    var max = Object.values(year_dict_new)[0];

    for (let price of Object.values(year_dict_new)){
        if (price > max){
        max = price;
        }
        else if (price < min) { 
        min = price;
        }
    }

    var percentage_year_diff = 1+(((max-min)/max))/(Object.values(year_dict_new).length-1);
    var percentage_year_diff_conv = (((max-min)/max))/(Object.values(year_dict_new).length-1)*100;

    document.getElementById("data_table_forecast").innerHTML = 
    "<li>Average YoY % Change in Prices: <u>" + (percentage_year_diff_conv).toFixed(2) + "%</u></li>" +
    "<li>2023: $" + (year_dict_new[2022]*percentage_year_diff).toFixed(0) + 
        "<i> ($" + ((year_dict_new[2022]*percentage_year_diff)/97).toFixed(0) +"/sqm)</i>"+ "</li>" +
    "<li>2024: $" + ((year_dict_new[2022]*percentage_year_diff)*percentage_year_diff).toFixed(0) + 
        "<i> ($" + (((year_dict_new[2022]*percentage_year_diff)*percentage_year_diff)/97).toFixed(0) +"/sqm)</i>"+ "</li>" +
    "<li>2025: $" + (((year_dict_new[2022]*percentage_year_diff)*percentage_year_diff)*percentage_year_diff).toFixed(0) +
        "<i> ($" + ((((year_dict_new[2022]*percentage_year_diff)*percentage_year_diff)*percentage_year_diff)/97).toFixed(0) +"/sqm)</i>" + "</li>";
    }
    computePriceForecast();

    // Charts 
    function resaleRoomTypeDistributionChart(){
    // Donut Chart Statistics
    // Format: CTX > Data > Options

    const room_dict_2 = Object.keys(room_dict)
    .sort()
    .reduce((accumulator, key) => {
    accumulator[key] = room_dict[key];
    return accumulator;
    }, {});

    var ctx = document.getElementById('pieChart').getContext('2d');

    var data = {
    labels: Object.keys(room_dict_2),
    datasets: [{
        label: 'Resale Flat Type',
        data: Object.values(room_dict_2),
        backgroundColor: [
        '#F47A1F',
        '#9552EA',
        '#F54F52',
        '#7AC142',
        '#ffb63a',
        '#007CC3',
        '#00529B',
        ],
        hoverBorderColor: ["#000000"],
    }]
    };

    var options = {
    plugins: {
        labels: {
        position: 'outside'
        },
        legend: {
        position: 'right'
        },
        tooltips: {
        enabled: true
        },
        datalabels: {
        formatter: (value, ctx) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map(data => {
            sum += data;
        });
        let percentage = (value*100 / sum).toFixed(0)+"%";
        return percentage;
        },
        color: '#00000',
        align: 'center',
        }
    }
    };

    var myChart = new Chart(
    ctx,
    {
        type: 'doughnut',
        data: data,
        options: options,
        // plugins: [ChartDataLabels]
    }
    );
}
    resaleRoomTypeDistributionChart();

    function resaleTopTenCheapestTownsChart(){
    for (const key in town_dict) {
        town_dict[key] = Number((town_dict[key][1]/town_dict[key][0]).toFixed(0));
    }

    var sorted_town_dict = Object.entries(town_dict)
        .sort(([, a], [, b]) => a - b)
        .reduce(
        (r, [k, v]) => ({
            ...r,
            [k]: v
        }),
        {}
    );

    sorted_town_dict = Object.fromEntries(Object.entries(sorted_town_dict).slice(0, 10));

    var ctx2 = document.getElementById("barChartTown").getContext("2d");
    var data2 = {
        labels: Object.keys(sorted_town_dict),
        datasets: [{
            label: "$ per sqm",
            data:  Object.values(sorted_town_dict),
            backgroundColor: ["#4D8C57", "#4D8C57", "#78A161", "#78A161", "#A3B56B", "#A3B56B", "#CDCA74", "#CDCA74", "#F8DE7E", "#F8DE7E"],
            hoverBorderColor: ["#000000"],
        }]
    };
    var options = {
        indexAxis: 'y',
        legend: {display: false},
        scales: {
        x: {
            grid: {
            display: false
            }
        },
        y: {
            grid: {
            display: false
            }
        }
        },
        plugins: {
        legend: {
            display: false,
        }
        }
    }
    var barChart = new Chart(ctx2, {
        type: 'bar',
        data: data2,
        options: options,
    }); 
    }
    resaleTopTenCheapestTownsChart();

    function resaleFloorTypeDistributionChart(){
    // Donut Chart Statistics
    // Format: CTX > Data > Options
    var new_story_dict = {}
    for (const key in story_dict) {
    new_story_dict[key] = Number(story_dict[key][0]);
    }

    var new_story_dict2 = Object.fromEntries(Object.entries(new_story_dict).sort((a,b)=>a[0].localeCompare(b[0])));

    var ctx5 = document.getElementById('floor_pieChart').getContext('2d');

    var data5 = {
    labels: Object.keys(new_story_dict2),
    datasets: [{
        label: 'Resale Flat Type',
        data: Object.values(new_story_dict2),
        backgroundColor: ["#ffa600", "#ff7c43", "#f95d6a", "#d45087", "#a05195", "#665191", "#2f4b7c", "#003f5c"
                        ,"#808080","#808080","#808080","#808080","#808080","#808080","#808080","#808080","#808080"],
        hoverBorderColor: ["#000000"],
    }]
    };

    var options = {
    plugins: {
        labels: {
        position: 'outside'
        },
        legend: {
        position: 'right'
        },
        tooltips: {
        enabled: true
        },
        datalabels: {
        formatter: (value, ctx) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map(data => {
            sum += data;
        });
        let percentage = (value*100 / sum).toFixed(0)+"%";
        return percentage;
        },
        color: '#00000',
        align: 'center',
        }
    }
    };

    var myChart = new Chart(
    ctx5,
    {
        type: 'doughnut',
        data: data5,
        options: options,
        // plugins: [ChartDataLabels]
    }
    );
}
    resaleFloorTypeDistributionChart();

    function resaleFlatPricesByLeaseDateChart(){
    // CTX > Label/Data > Config > Initalize
    // Extract dataset from stored dictionary api dataset
    for (const key in yearLeaseDict) {
        yearLeaseDict[key] = Number((yearLeaseDict[key][0]/yearLeaseDict[key][1]).toFixed(0));
    }

    var ctx3 = document.getElementById("leaseprice").getContext("2d");

    var data3 = {
        labels: Object.keys(yearLeaseDict),
        datasets: [{
        label: 'Average resale price in $',
        data: Object.values(yearLeaseDict),
        borderColor: '#808080',
        pointRadius: 2,
        // pointBorderColor: '#FF0000'
        }]
    };

    var options = {
        scales: {
            x: {
            grid: {
                display: false,
            },
            },
            y: {
            grid: {
                display: false,
            },
            ticks: {
                // stepValue: 450000,
                stepSize: 100000
            },
            beginAtZero: false,
            }
            },
        plugins: {
            tooltips: {
            enabled: true
            },
            datalabels: {
            color: '#00000',
            align: 'top',
            },
            legend: {
            display: false,
            labels: {
                usePointStyle: true
            }
            }
        }
        };

    var lineChart = new Chart(ctx3, 
    {
        type: 'line',
        data: data3,
        options: options,
        // plugins: [ChartDataLabels]
    });
    
    }
    resaleFlatPricesByLeaseDateChart();

    function resaleMonthPriceTrendChart(){
    // CTX > Label/Data > Config > Initalize
    // Extract dataset from stored dictionary api dataset
    var newMonthDict = {};
    for (var key in monthDict) {
        var average_price_monthly = Number((monthDict[key][0]/monthDict[key][1]).toFixed(0));
        newMonthDict[Number(key)] = average_price_monthly;
    }

    const sortedMonthDict = Object.keys(newMonthDict)
    .sort()
    .reduce((accumulator, key) => {
    accumulator[key] = newMonthDict[key];
    return accumulator;
    }, {});

    var ctx4 = document.getElementById("lineChart_leasedate").getContext("2d");

    var data4 = {
    labels: Object.keys(sortedMonthDict),
    datasets: [{
        label: 'Average resale price in $',
        data: Object.values(sortedMonthDict),
        borderColor: '#107c41',
        pointRadius: 5,
        pointBorderColor: '#00FF00'
    }]
    };

    var options = {
        scales: {
        x: {
            grid: {
            display: false,
            },
        },
        y: {
            grid: {
            display: true,
            },
            beginAtZero: false,
        }
        },
        plugins: {
        tooltips: {
            enabled: true
        },
        datalabels: {
            color: '#00000',
            align: 'top',
        },
        legend: {
            display: false,
            labels: {
            usePointStyle: true
            }
        }
        }
    };

    var lineChart = new Chart(ctx4, 
    {
        type: 'line',
        data: data4,
        options: options,
        // plugins: [ChartDataLabels]
    });
    
    }
    resaleMonthPriceTrendChart();

    function resaleYearMonthPriceTrendChart(){
    // CTX > Label/Data > Config > Initalize
    // Extract dataset from stored dictionary api dataset
    var newDict = {};
    for (var key in year_mm_dict_price) {
        var average_price_monthly = Number((year_mm_dict_price[key][1]/year_mm_dict_price[key][0]).toFixed(0));
        newDict[key] = average_price_monthly;
    }

    var ctx4 = document.getElementById("lineChart_resale_yy_mm").getContext("2d");

    var data4 = {
    labels: Object.keys(newDict),
    datasets: [{
        label: 'Average resale price in $',
        data: Object.values(newDict),
        borderColor: '#779341',
        pointRadius: 2,
        pointBorderColor: '#547B58'
    }]
    };

    var options = {
        scales: {
        x: {
            grid: {
            display: false,
            },
        },
        y: {
            grid: {
            display: false,
            },
        }
        },
        plugins: {
        tooltips: {
            enabled: true
        },
        datalabels: {
            color: '#547B58',
            align: 'top',
        },
        legend: {
            display: false,
            labels: {
            usePointStyle: true
            }
        }
        }
    };

    var lineChart = new Chart(ctx4, 
    {
        type: 'line',
        data: data4,
        options: options,
        // plugins: [ChartDataLabels]
    });
    
    }
    resaleYearMonthPriceTrendChart();

    function resaleYearChart(){
    var year_dict_new = {}
    for (const key in yearDict) {
        year_dict_new[key] = Number((yearDict[key][0]/yearDict[key][1]).toFixed(0));
    }

    var ctx2 = document.getElementById("barChartPriceYear").getContext("2d");
    var data2 = {
        labels: Object.keys(year_dict_new),
        datasets: [{
            label: "$ per sqm",
            data:  Object.values(year_dict_new),
            backgroundColor: ["#4D8C57", "#4D8C57", "#78A161", "#78A161", "#A3B56B", "#A3B56B", "#CDCA74", "#CDCA74", "#F8DE7E", "#F8DE7E"],
            hoverBorderColor: ["#000000"],
        }]
    };
    var options = {
        legend: {display: false},
        scales: {
        x: {
            grid: {
            display: false
            }
        },
        y: {
            grid: {
            display: false
            }
        }
        },
        plugins: {
        legend: {
            display: false,
        }
        }
    }
    var barChart = new Chart(ctx2, {
        type: 'bar',
        data: data2,
        options: options,
    });

    // Exit spinner condition - Once last function has executed
    if(Object.keys(year_dict_new).length != 0){
        document.getElementById("spinner_overlay").innerHTML = "";
    }
    }
    resaleYearChart();


}
});


