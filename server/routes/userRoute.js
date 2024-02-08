const express = require("express");
const router = express.Router();

const {
  getGrounds,
  getGroundById,
} = require("../controllers/groundController");
const {
  bookTimeSlot,
  getBookings,
} = require("../controllers/bookingController");
const { verifyToken } = require("../middlewares/verifyToken");

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post("/logout", logout);
router.get("/grounds", getGrounds);
router.get("/ground/:id", getGroundById);
router.post("/book-slot/:id", verifyToken, bookTimeSlot);
router.get("/bookings", verifyToken, getBookings);

module.exports = router;
