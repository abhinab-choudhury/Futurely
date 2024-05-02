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
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: "user"
  }
}, { timestamp: true })

export default User = mongooose.model("User", UserSchema)