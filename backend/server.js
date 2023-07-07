const express= require('express')
const bodyParser= require('body-parser')
const cartRoutes= require('./routes/cart')
const shopRoutes= require('./routes/shop')
const checkoutRoutes= require('./routes/order')
const authRoutes= require('./routes/auth')
const userRoute= require('./routes/users')

const cors = require('cors');

const app= express()
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', cartRoutes)
app.use('/api', shopRoutes)
app.use('/api', checkoutRoutes)
app.use('/api', authRoutes)
app.use('/api', userRoute)

app.use((req, res, next)=>{
    res.status(404).send('<h1>page not found</h1>')
})

const PORT= process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})


