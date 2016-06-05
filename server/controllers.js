const { Todo } = require('./models.js');

function postTodo(req, res) {
  const todo = new Todo({ title: req.body.title });
  todo
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
}

function getTodos(req, res) {
  Todo
    .find()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
}

function patchTodo(req, res) {
  const query = { _id: req.params.todoId };
  const update = { completed: req.body.completed };
  const options = { new: true };
  Todo
    .findOneAndUpdate(query, update, options)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
}

function deleteTodo(req, res) {
  const query = { _id: req.params.todoId };
  Todo.remove(query)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send(err);
    });
}

module.exports = {
  postTodo,
  getTodos,
  patchTodo,
  deleteTodo,
};
