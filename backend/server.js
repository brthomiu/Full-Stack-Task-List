const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config( {
    path: path.join(__dirname, '.env')
})
const port = process.env.PORT || 5000

const app = express()

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () =>
    console.log(`Server running on port ${port}`))