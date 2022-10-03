const express = require('express')
require('../database/connection')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.listen(port,() => {
  console.log(`💥 Api Running in the port ${port} 🚀`);
})