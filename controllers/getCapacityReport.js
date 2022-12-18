const { response } = require("express");
const jwt = require("jsonwebtoken");
const conn = require("../dbConnection.js").promise();

exports.getCapacityReport = async (req, res, next) => {
  try {
    const [response] = await conn.execute(
      "SELECT capacity, COUNT(*) count FROM bookings GROUP BY capacity;");
    res.contentType("application/json");

    console.log(response);

    const labels = [];
    const series = [];

    response.forEach(element => {
        labels.push('Room of ' + element.capacity);
        series.push(element.count);
    });

    
    console.log(labels);
    console.log(series);

    const rows = {labels: labels, series: series};
    return res.send(JSON.stringify(rows));
  } catch (err) {
    next(err);
  }
};
