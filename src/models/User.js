const {Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  username:{
    required: true,
    type: String,
    index: { unique: true },
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    index: { unique: true },
  }
},{
  timestamps: true,
})

userSchema.pre('save', function(next){
  const salt = bcrypt.genSaltSync(10)
  this.password = bcrypt.hashSync(this.password, salt)
  next()
})

userSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

userSchema.methods.matchPassword = async function(password){
  return await bcrypt.compare(password, this.password)
}

module.exports = model('User',userSchema)