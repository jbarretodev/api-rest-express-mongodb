const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI,{
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(db => console.log('Database Running And Connected 🚀🚀'))
.catch(err => console.error(err))