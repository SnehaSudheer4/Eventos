const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contactNo: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    enum: ['marriage', 'engagement', 'namingCeremony', 'Birthday', 'Others'],
    required: true
  },
  foodType: {
    type: [String], // Change to an array of strings
    enum: ['Rice', 'Juices', 'Currys', 'Salads', 'Desserts', 'Others'],
    required: true
  },
  expectedAmount: {
    type: Number,
    required: true
  },
  peopleParticipation: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
