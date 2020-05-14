const express = require('express')

const app = express()

//bring post routes
const postRoutes = require('./routes/post')

//server on root
app.use('/', postRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
