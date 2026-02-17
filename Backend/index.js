const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const port = 8000

app.use(bodyParser.json());
let users = []
let counter = 1;

// path = Get/users
app.get('/users',(req, res)=> {
    res.json(users);
});

// path = post/user
app.post('/user',(req, res)=>{
    let user = req.body;
    user.id = counter
    counter += 1;

    users.push(user);
    res.json({
        message:"User added successfully",user: user});
});

//path = put /user/:id
app.put('/user/:id',(req, res) => {
    let id = req.params.id;
    let updatedUser = req.body;
    //user จาก id ที่ส่งมา 
    let seletedIndex = users.findIndex(user => user.id == id);

    //อัพเดตข้อมูล user 
    if(updatedUser.name){
        users[seletedIndex].name = updatedUser.name
    }
    if(updatedUser.email){
        users[seletedIndex].email = updatedUser.email
    }
    
    //เอาข้อมูลที่อัพเดตส่ง response กลับไป
    res.json({
        message: "User updated successfully",
        data:{user:updatedUser,indexUpdated:seletedIndex}
    });

});

// path = dalete/user/:id
app.delete('/user/:id',(req,res) => {
    let id = req.params.id;
    //หา index ของ user ที่ต้องการลบจาก id ที่ส่งมา
    let seletedIndex = users.findIndex(user => users.id == id);
    //ลบ user จาก array โดยใช้ delete
    //delete users(seletedIndex);
    user.splice(seletedIndex, 1);

    res.json({
        message: 'User delete successfully',indexDalet: seletedIndex
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
