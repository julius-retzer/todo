const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
}, { versionKey: false });

module.exports = {
  Todo: mongoose.model('Todo', TodoSchema),
};
