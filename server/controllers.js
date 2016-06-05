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

module.exports = {
  postTodo,
};
