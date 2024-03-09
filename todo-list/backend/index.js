const express = require("express");
const {createTodo,updateTodo} = require("./type");
const todo = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({origin:"http://localhost:5173"}));

app.post('/todo',async(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "you sent the wrong inputs"
        })
        return;
    }

    await todo.todo.create({
        title : createPayload.title,
        description:createPayload.description,
        isCompleted : false
    })
    res.json({
        msg:"Todo created"
    })

})

app.get('/todo',async(req,res)=>{
    const todos = await todo.todo.find({}) 
    if(todos){
        res.json({ todos });
    }
    else{
        res.json({
            msg:"No todo in the database"
        })
    }
    
})

app.put('/completed',async(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Id not found!"
        })
        return;
    }
    await todo.todo.updateOne({
        _id:req.body.id
    },{
        isCompleted:true
    })
    res.json({msg:"Todo Marked as complete"})
})

app.listen(3000);