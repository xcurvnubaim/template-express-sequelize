const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const productRoutes = require('./routes/product.routes')
app.use('/products', productRoutes);

const userRoutes = require('./routes/user.routes')
app.use('/users', userRoutes);

app.listen(3000)