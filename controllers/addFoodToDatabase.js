const { validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const conn = require("../dbConnection.js").promise();

exports.addFoodToDatabase = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  console.log("requestttt: ", req.body.params);
  try {
    const [rows] = await conn.execute(
        "INSERT INTO bookings (firstName, lastName, capacity, cnp, startDate, endDate, price,bookingTime) "+
        "VALUES (?, ?, ?, ?,?, ?,?, now())",
        [req.body.params.firstName,
          req.body.params.lastName,
          req.body.params.capacity,,
          req.body.params.cnp,
          req.body.params.daterange.start,
          req.body.params.daterange.end,
          req.body.params.price]
      );

    if (rows.affectedRows === 1) {
      console.log("SUCCESFUL");
      return res.status(201).json({
        message: "The booking has been successfully made.",
      });
    }
    return res.send("ok!");
  } catch (err) {
    next(err);
  }
};
