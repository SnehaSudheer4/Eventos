const express = require("express");
const router = express.Router();
const User=require('../Model/Form')
const Admin=require('../Model/Admin')
const {  registerUser, loginUser, createEvent, loginAdmin, getEvents, deleteEvent, editEvent, }=require('../Controllers/userController')


router.post('/register',registerUser);
// router.post('/registeradmin',registerAdmin);
router.post('/login',loginUser)
router.post('/Event',createEvent)
router.post('/adminlogin', loginAdmin);
router.get('/enquiries',getEvents)
router.delete('/enquiries/:id',deleteEvent)
router.put('/events/:eventId', editEvent);

module.exports = router;