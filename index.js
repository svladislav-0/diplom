const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const { routes } = require('./src/routes')
 
const app = express()
const port = process.env.port ?? 3000

mongoose.connect('mongodb+srv://UserTest:klei55@cluster0.mnesz.mongodb.net/flowers?retryWrites=true&w=majority',
{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded ({extended: true}))
app.use(cors())

routes.forEach(route => {
    app.use(`/api/v1/${route}`, require(`./src/routes/${route}`))
})

app.listen(port, (req,res)=>{
    console.log(`Server started on ${port} port`)
})