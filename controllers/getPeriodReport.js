const { response } = require("express");
const jwt = require("jsonwebtoken");
const conn = require("../dbConnection.js").promise();

exports.getPeriodReport = async (req, res, next) => {
  try {
    const [response] = await conn.execute(
      "SELECT DATEDIFF(endDate, startDate) days, COUNT(*) count FROM bookings GROUP BY DATEDIFF(endDate, startDate);");
    res.contentType("application/json");

//    console.log(response);

    const labels = [];
    const series = [];

    response.forEach(element => {
        labels.push('Period of ' + element.days + ' days');
        series.push(element.count);
    });

    
//    console.log(labels);
//    console.log(series);

    const rows = {labels: labels, series: series};
    return res.send(JSON.stringify(rows));
  } catch (err) {
    next(err);
  }
};
