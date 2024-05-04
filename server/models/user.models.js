import mongooose from 'mongoose'

const UserSchema = mongooose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    trim: true,
    index: true
  },
  sunsign: {
    type: String,
    lowercase: true,
    required: true,
    enum: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'scorpio', 'libra', 'sagittarius', 'capricorn', 'aquarius', 'pisces'],
    trim: true
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: "user"
  }
}, { timestamps: true })

export const User = mongooose.model("User", UserSchema)