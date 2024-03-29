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

module.exports = router;