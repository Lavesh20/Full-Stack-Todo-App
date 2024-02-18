const mongoose = require('mongoose');
const { string } = require('zod');

//body.schema{
//     titel:string,
//     description:string,
//     completed:boolean
// }
mongoose.connect("mongodb+srv://laveshvyas20:HYfPIVV7timUKqPN@cluster0.frfboac.mongodb.net/Todo-DataBase");
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
};
