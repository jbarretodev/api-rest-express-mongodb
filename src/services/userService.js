const User = require("../models/User")

const saveNewUser = async (dataUser) => {
  const user = new User(dataUser) 
  return await user.save()
}

const getOneUser = async(id) => {
  if(!id) return undefined

  const user = await User.findById(id).exec()

  if(user) return user

  return undefined
}

const getAllUser = async () => {
  return await User.find()
}

const deleteUSer = async (id) => {
  return await User.findByIdAndDelete(id)
}

const updateUser = async (id,userData) => {
  return await User.findByIdAndUpdate(id,userData)
}


module.exports = {
  saveNewUser,
  getOneUser,
  getAllUser,
  deleteUSer,
  updateUser,
}