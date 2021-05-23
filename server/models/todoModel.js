import mongoose from 'mongoose'
const {Schema} = mongoose

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: String,
    date: {
        type: Date,
        default: Date.now
    },
    isDone: Boolean
})

const todoModel = mongoose.model("todoModel", todoSchema)


export default todoModel