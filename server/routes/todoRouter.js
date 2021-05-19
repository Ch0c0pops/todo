import Router from 'express'
import todoModel from "../models/todoModel.js";


const router = new Router()

router.get('/todos', async (req, res) => {
    try {
        const todos = await todoModel.find()
        res.json(todos)


    } catch (e) {
        res.status(500).json(e)
    }
})


export default router