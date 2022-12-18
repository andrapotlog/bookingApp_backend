const router = require("express").Router();
const { body } = require("express-validator");

const { getBookings } = require("./controllers/getBookings");
const { getCapacityReport } = require("./controllers/getCapacityReport");
const { getPeriodReport } = require("./controllers/getPeriodReport");

const { addFoodToDatabase } = require("./controllers/addFoodToDatabase");

router.get("/getBookings", getBookings);
router.get("/getCapacityReport", getCapacityReport);
router.get("/getPeriodReport", getPeriodReport);

router.post("/addFoodToDatabase", addFoodToDatabase);

module.exports = router;