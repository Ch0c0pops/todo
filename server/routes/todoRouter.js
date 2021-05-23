import Router from 'express'
import todoModel from "../models/todoModel.js"
import cors from 'cors'

const router = new Router()
router.get('/todos',  async (req, res) => {
    try {
        const todos = await todoModel.find()
        res.json(todos)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.delete('/todos', async(req, res)=>{
    try{
        const todo = await todoModel.findByIdAndDelete(req.query.id)
        res.status(200).json(todo)

    }catch (e) {
        res.status(500).json(e)
    }
})

export default router