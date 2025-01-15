const express = require('express');
const app = express() ;
const port=3000;
app. use(express.json())
app.use(express.urlencoded({ extended: true}));
let users = [
 { id: 1, name: 'oumaima' , email: 'oumaima@example.com'},
 {id: 2,name: 'islem', email: 'islem@example.com'}];
 app.get("/users", (req,res)=>
res.json(users));



app.listen(port,() =>{
    console.log(`Application exeemple à l'écoute su le port`)});
    app.get('/users/:id', (req, res) => {
        const user = users.find(u => u.id === parseInt(req.params.id));
        if (!user) return res.status(404).send('User not found');
        res.json(user);
        });
        app.post('/users', (req, res) => {
            const newUser = { id: users.length + 1, ...req.body };
            users.push(newUser);
            res.json(newUser);
            });