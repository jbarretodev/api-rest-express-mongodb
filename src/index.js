const express = require('express')
require('./database/connection')
const userV1Router = require('./routes/userRoute')
const mainRoute = require('./routes/mainRoute')
const profileRouter = require('./routes/profileRoute')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1/users',userV1Router)
app.use('/api/v1/profiles',profileRouter)
app.use('/api/v1/',mainRoute)

app.listen(port,() => {
  console.log(`💥 Api Running on the port ${port}...http://localhost:3000/api/v1/ 🚀`);
})