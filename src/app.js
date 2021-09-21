const express= require("express");
const app=express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require('hbs');



require("./db/conn");
const Submit= require("./models/submit");


const static_path=path.join(__dirname,"../public");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");


app.get("/",(req,res) =>{
    res.render("index")
});
app.get("/submits",(req,res) =>{
    res.render("submits")
});
app.post("/submit",async(req,res) =>{
    try{
          const assignment = new Submit({
              name: req.body.name,
              email: req.body.email,
              course: req.body.course,
              no: req.body.no,
              gender: req.body.gender,
              link: req.body.link

          })
          const submitted=await assignment.save();
          res.status(201).render("submits");
          

    }catch(error){
        res.status(400).send("You have already submitted your form earlier");
    }
});

app.post("/submit",(req,res) =>{
    try{
          

    }catch(error){
        res.status(400).send(error);
    }
});


app.listen(port, () => {
    console.log('server is running at port no ${port}');

})