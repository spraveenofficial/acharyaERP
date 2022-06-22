import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  slots: {
    type: Number,
    required: true,
  },
  entryFee: {
    type: Number,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  timing: {
    type: String,
    required: true,
  },
  organisedBy: {
    type: String,
    required: true,
  },
});

const eventModel = mongoose.model("Event", eventSchema);

export default eventModel;
