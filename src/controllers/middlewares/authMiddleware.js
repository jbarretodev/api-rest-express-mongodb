const jwt = require('jsonwebtoken');
require('dotenv').config()

const authenticationMiddleware = async (req,res,next) => {
  if(!req.headers['authorization']) return res.status(401).json({error: true, message: 'auth token is missing'})

  const token = req.headers['authorization'].split(' ')

  if(token[0] !== 'Bearer') return res.status(400).json({error: true, message: 'invalid token'})

  try{
    const decoded = jwt.verify(token[1],process.env.TOKEN_SECRET)
    req.user = decoded
    next()
  }catch(err){
    return res.status(400).json({error: true, message: 'invalid token'})
  }
}


module.exports = authenticationMiddleware