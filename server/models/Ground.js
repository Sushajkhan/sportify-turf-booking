const mongoose = require("mongoose");
const Schema = mongoose.Schema();
const { bookingSchema } = require("./Booking");

const groundSchema = new Schema({
  ground_name: {
    type: String,
    required: [true, "Name is required"],
  },
  location: {
    type: String,
    required: [true, "location is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },

  availableSlots: [String],
  images: [String],
  bookings: [bookingSchema],
});

export const Ground = mongoose.model("Ground", groundSchema);
