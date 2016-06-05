const { Router } = require('express');
const { postTodo, getTodos, patchTodo, deleteTodo } = require('./controllers');

const router = Router(); // eslint-disable-line new-cap

router.post('/todos', postTodo);
router.get('/todos', getTodos);
router.patch('/todos/:todoId', patchTodo);
router.delete('/todos/:todoId', deleteTodo);

module.exports = router;
