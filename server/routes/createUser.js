import { User } from '../models/user.models.js';
import { emailController } from '../controllers/emailController.js';

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export const createUser = async (req, res) => {
  const { email, sunsign } = req.body;

  try {
    // Check if email is provided
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    if (!sunsign || !(['aries', 'taurus', 'gemini', 'cancer', 'leo', 'scorpio', 'virgo', 'libra', 'sagittarius', 'capricorn', 'aquarius', 'pisces'].includes(sunsign))) {
      return res.status(400).json({ message: "Invalid sunsign" })
    }

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    await emailController(email, sunsign);

    // Create a new user
    const newSubscriber = new User({ email, sunsign });
    await newSubscriber.save();
    console.log("Date Inserted Successfully");


    res.status(201).json({ message: "Subscribed Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Subscribing" });
  }
}