const { Router } = require('express');
const { postTodo, getTodos } = require('./controllers');

const router = Router(); // eslint-disable-line new-cap

router.post('/todos', postTodo);
router.get('/todos', getTodos);

module.exports = router;
