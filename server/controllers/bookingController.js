const Ground = require("../models/Ground");
const Booking = require("../models/Booking");

const User = require("../models/User");

const bookTimeSlot = async (req, res) => {
  try {
    const groundId = req.params.id;
    const ground = await Ground.findById(groundId);

    if (!ground) {
      return res.status(400).send({
        message: "Ground not found",
        success: false,
      });
    }

    // Date and timeslot validations
    const { date, timeSlot } = req.body;

    const isValidDate = (date) => {
      const currentDate = new Date();
      return date instanceof Date && date > currentDate;
    };
    // Parse the date string to a JavaScript Date object
    const parsedDate = new Date(date);

    if (!isValidDate(parsedDate)) {
      return res.status(400).send({
        message: "Invalid date provided",
        success: false,
      });
    }

    const isValidTimeSlot = (timeSlot, availableSlots) => {
      return availableSlots.includes(timeSlot);
    };
    if (!isValidTimeSlot(timeSlot, ground.availableSlots)) {
      return res.status(400).send({
        message: "Selected time slot is not available",
        success: false,
      });
    }

    // Check if time slot is already booked
    if (
      ground.bookings.some(
        (booking) =>
          booking.date.getTime() === parsedDate.getTime() &&
          booking.timeSlot === timeSlot
      )
    ) {
      return res.status(400).send({
        message: "Selected time slot is already booked",
        success: false,
      });
    }

    // User validation
    const user = await User.findOne({ email: req.user.email });
    if (!user) {
      return res.status(403).send({
        message: "User not found",
        success: false,
      });
    }
    const booking = new Booking({
      user: user.username,
      ground: ground.ground_name,
      date: parsedDate,
      timeSlot,
    });
    await booking.save();

    // Update and save ground's booking array
    ground.bookings.push(booking);
    await ground.save();

    // Update and save user's booking array
    user.bookings.push(booking);
    await user.save();

    res.status(200).send({
      message: "Time slot booked successfully",
      success: true,
      booking,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "something went wrong",
      success: false,
      error,
    });
  }
};

// Get bookings by User

const getBookings = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).populate(
      "bookings"
    );
    if (user) {
      res.status(200).send({
        bookings: user.bookings || [],
        success: true,
      });
    } else {
      return res.status(400).send({
        message: "User not found",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "No bookings found",
      success: false,
      error,
    });
  }
};

module.exports = { bookTimeSlot, getBookings };
