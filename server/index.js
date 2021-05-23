import express from 'express'
import mongoose from 'mongoose'
import config from 'config'
import todoModel from'./models/todoModel.js'
import router from "./routes/todoRouter.js";
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const PORT = config.get('serverPort')

const app = express()

app.use(express.json()) //без этого расширения в response не придет json, он бует undef
app.use(cors())
app.use('/api', router) // "регистрация" роутов в приложении, например также app.use('/users', router). каждый прописывается отдельно


const start = async () => {
    try {
        //await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
        await mongoose.connect("mongodb+srv://chocs:chocs123@cluster0.mjrli.mongodb.net/TodoDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true},
            () => console.log('DB is running'))
        app.listen(PORT, () => console.log('Server is running'))
    } catch (e) {
        console.log(e)
    }
}


//
// const to do = new todoModel({title: "hello kitty", text: "bla bla", isDone: false})
//
// to do.save(function (err, data) {
//     if (err) return console.log(err)
//     console.log(data)
// })
start()