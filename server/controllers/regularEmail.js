import { User } from './../models/user.models.js'
import { emailController } from './emailController.js'
const sendTime = new Date();

// Send at 8:00 AM every day
sendTime.setHours(8, 0, 0, 0);

// 24 hr in miliseconds
const interval = 60 * 60 * 24 * 1000;

const getUsersBySunSign = async () => {
  const sunSigns = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'scorpio', 'libra', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
  const usersBySunSign = {};

  for (const sunSign of sunSigns) {
    const users = await User.find({ sunsign: sunSign });
    usersBySunSign[sunSign] = users;
  }

  return usersBySunSign;
};

// Check the time and send the email if it's time
const checkTime = async () => {
  const now = new Date();
  if (now >= sendTime) {
    const usersBySunSign = await getUsersBySunSign();

    for (const sunSign in usersBySunSign) {
      const users = usersBySunSign[sunSign]

      for (const user of users) {
        emailController(user.email, user.sunsign)
      }
    }
    sendTime.setDate(sendTime.getDate() + 1); // Set the send time for tomorrow
  }
};

setInterval(checkTime, interval)