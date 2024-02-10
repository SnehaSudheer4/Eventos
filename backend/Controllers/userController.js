const User=require('../Model/Form');
const Event=require('../Model/Event')
const Admin=require('../Model/Admin')



const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      const newUser = new User({ username, email, password });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// const registerAdmin = async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const existingUser = await Admin.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }
//     const newAdmin = new Admin({ username, email, password });
//     await newAdmin.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error registering user:', error.message);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

const createEvent = async (req, res) => {
    const { name, contactNo, eventType, expectedAmount, peopleParticipation ,date,foodType} = req.body;
    try {
      const newEvent = new Event({
        name,
        contactNo,
        eventType,
        foodType,
        expectedAmount,
        peopleParticipation,
        date
      });
      await newEvent.save();
      res.status(201).json({ message: 'Event registered successfully' });
    } catch (error) {
      console.error('Error registering event:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username ,password});
        if (!admin) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getEvents = async (req, res) => {
    try {
      const events = await Event.find();
      res.status(200).json(events);
    } catch (error) {
      console.error('Error fetching events:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
      await Event.findByIdAndDelete(id);
      res.status(200).json({ message: 'Event enquiry deleted successfully' });
    } catch (error) {
      console.error('Error deleting event enquiry:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


  const editEvent = async (req, res) => {
    const { eventId } = req.params; // Use "eventId" instead of "id"
    const eventDataToUpdate = req.body; 
    try {
      const updatedEvent = await Event.findByIdAndUpdate(eventId, eventDataToUpdate, { new: true });
      if (!updatedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.status(200).json(updatedEvent);
    } catch (error) {
      console.error('Error updating event:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  

module.exports={registerUser,loginUser,createEvent,loginAdmin,getEvents,deleteEvent,editEvent}