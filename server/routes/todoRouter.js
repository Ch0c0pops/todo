import Router from 'express'
import todoModel from "../models/todoModel.js"

const router = new Router()
router.get('/todos', async (req, res) => {
    try {
        const todos = await todoModel.find({})
        res.json(todos)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.delete('/todos', async (req, res) => {
    try {
        const todo = await todoModel.findByIdAndDelete(req.query.id)
        res.status(200).json(todo)

    } catch (e) {
        res.status(500).json(e)
    }
})

router.post('/todos', async (req, res) => {
    try {
        const todo = new todoModel({title: req.body.title, text: req.body.text, isDone: false})
        await todo.save()
        res.status(200).json(todo)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.put('/todos', async (req, res)=>{
    try{
        const {id, isDone} = req.body
        const user = await todoModel.findById(id)
        user.isDone = isDone
        await user.save()
        return res.status(200).json(user)
    }catch (e) {
        res.status(500).json(e)
    }
})

export default router