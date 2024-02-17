const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
app.use(express.json());
app.use(cors({}));

//body{
// title:string,
// description:string
//}

app.post('/todo',async function(req,res){
    const createPayLoad = req.body;
    const parsePayload = createTodo.safeParse(createPayLoad);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You send the wrong inputs"
        })
        return;
    }
    //put it in mongo db
   await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed:false
    })
    res.json({
        msg:"Todo Created"
    })

})

app.get('/todos',async function(req,res){
    const todos = await todo.find({})
    res.json({
      todos
    })
})

app.put('/completed',async function(req,res){
     const updatePayload = req.body;
     const parsePayload = updateTodo.safeParse(updatePayload);
     if(!parsePayload.success){
        res.status(411).json({
            msg:"you send the wrong inputs"
        })
        return;
     }
     await todo.update({
          _id:req.body.id
     },{
        completed:true
     })
     res.json({
        msg:"Todo mark as done"
     })
})

app.listen(3000,()=>{
   console.log("server running on 3000");
})