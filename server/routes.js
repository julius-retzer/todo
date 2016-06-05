const { Router } = require('express');
const { postTodo, getTodos, patchTodo } = require('./controllers');

const router = Router(); // eslint-disable-line new-cap

router.post('/todos', postTodo);
router.get('/todos', getTodos);
router.patch('/todos/:todoId', patchTodo);

module.exports = router;
