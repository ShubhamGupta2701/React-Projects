const express = require("express");
const app = express();
app.use(express.json());
const users = [];

/*
    db = {
        username : String,
        email : String,
        phone : String,
        password : String
    }
*/

app.post('/',(req,res)=>{
    const data = req.body;
    if(users.length <= 1){
        users.push(data);
            res.json(users);
    }
    else{
        for(let i = 0;i<users.length;i++){
            if(users[i].phone === data.phone){
                res.json({
                    msg : "User already exist",
                })
            }else{
                users.push(data);
                res.json(users);
            }
        }
    }
});

app.get('/',(req,res)=>{
    const name = req.query.name;
    const temp = [];
    for(let i =0;i<users.length;i++){
        if(users[i].firstname == name){
            temp.push(users[i]);
        }
    }
    res.json(temp);
})

app.listen(3000);
