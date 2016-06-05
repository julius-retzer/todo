const { Router } = require('express');
const { postTodo } = require('./controllers');

const router = Router();

router.post('/todos', postTodo);

module.exports = router;
