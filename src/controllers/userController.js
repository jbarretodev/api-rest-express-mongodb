const userService = require('../services/userService')

const saveNewUser = async (req, res) => {

  const rs = await userService.saveNewUser(req.body)

  if(rs) return res.status(201).json(rs)

  return res.status(400).json({error:true,message:"some data is missing"})
}

const getAllUsers = async (req,res) => {
  res.status(200).json( await userService.getAllUser() )
}

const getOneUser = async (req,res) => {
  if(!req.params.userId) res.status(400).json({
    error: true,
    message: 'id user is missing'
  })

  const rs = await userService.getOneUser(req.params.userId)

  if(!rs) return res.status(404).json({error: true, message: 'user not found'})

  return res.status(200).json(rs)
}

const deleteUser = async (req, res) => {
  if(!req.params.userId) return res.status(400).json({error: true, message: 'id user is missing'})

  const rs = await userService.deleteUSer(req.params.userId)
  
  if(!rs) return res.status(404).json({error: true, message: 'user not found'})

  return res.status(204).json({})
}

const updateUser = async (req,res) => {
  if(!req.params.userId) return res.status(400).json({error: true, message: 'id is missing'})

  const rs = await userService.updateUser(req.params.userId, req.body)

  if(!rs) return res.status(404).json({error: true, message: 'user not found'})

  return res.status(200).json(rs)
}


module.exports = {
  saveNewUser,
  getOneUser,
  getAllUsers,
  deleteUser,
  updateUser, 
}