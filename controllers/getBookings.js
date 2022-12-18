const { response } = require("express");
const jwt = require("jsonwebtoken");
const conn = require("../dbConnection.js").promise();

exports.getBookings = async (req, res, next) => {
  try {
    const [rows] = await conn.execute(
      "SELECT * FROM bookings");
    res.contentType("application/json");
    return res.send(JSON.stringify(rows));
  } catch (err) {
    next(err);
  }
};
