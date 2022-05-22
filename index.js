const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.route'))
app.use('/api/todo', require('./routes/todo.route'))

async function start(){
    try {
        await mongoose.connect('mongodb+srv://Olesh:olesh123456@cluster0.lhkz6.mongodb.net/todo?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
            /*useCreateIndex: true,
            useFindAndModify: true*/
        })

        app.listen(PORT, () => {console.log(`server started on port ${PORT}`)})
    } catch (error) {
        console.error(error)
    }
}


start()