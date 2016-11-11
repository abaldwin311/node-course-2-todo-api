const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

// Todo.findOneAndRemove({ _id: '58253e277f8e31db1c3f07b1' }).then((todo) => {

// });

Todo.findByIdAndRemove('58253e277f8e31db1c3f07b1').then((todo) => {
    console.log(todo);
});