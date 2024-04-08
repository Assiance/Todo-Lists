const express = require('express');
const router = express.Router();
const TodoLists = require('../db/models/todo-list-model');

router.get('/', async (req, res) => {
    try {
        const todoLists = await TodoLists.findAll();
        res.send(todoLists);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    try {
        if (!req.body.title) {
            res.status(400).send('Title must have a value.')
            return;
        }
        if (!req.body.description) {
            res.status(400).send('Description must have a value.')
            return;
        }
        let newList = await TodoLists.create({
            title: req.body.title,
            description: req.body.description
        });
        res.status(201).send(newList);
    } catch (error) {
        console.log(error);
        res.status(500).send(`Internal Server Error ${error}`)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const todoList = await TodoLists.findByPk(req.params.id);
        await todoList.destroy();
        
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).send(`Internal Server Error ${error}`)
    }
})

module.exports = router;