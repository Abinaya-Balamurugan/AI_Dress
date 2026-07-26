const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use(session({
    secret:"secretkey",
    resave:false,
    saveUninitialized:true
}));


// Database Connection

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"your_password",
    database:"user_system"
});


db.connect((err)=>{
    if(err)
        console.log(err);
    else
        console.log("Database Connected");
});


// Register API

app.post("/register", async(req,res)=>{

    const {username,email,password}=req.body;

    const hashPassword = await bcrypt.hash(password,10);

    const sql =
    "INSERT INTO users(username,email,password) VALUES(?,?,?)";

    db.query(sql,
    [username,email,hashPassword],
    (err,result)=>{

        if(err)
            res.send("User already exists");
        else
            res.send("Registration Successful");

    });

});


// Login API

app.post("/login",(req,res)=>{

    const {email,password}=req.body;


    db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    async(err,result)=>{

        if(result.length==0)
        {
            res.send("User not found");
        }
        else{

            const user=result[0];

            const match =
            await bcrypt.compare(password,user.password);


            if(match)
            {
                req.session.user=user;
                res.send("Login Successful");
            }
            else
            {
                res.send("Wrong Password");
            }
        }

    });

});


app.listen(3000,()=>{
    console.log("Server running on port 3000");
});