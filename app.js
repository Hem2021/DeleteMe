const path = require('path')
const express= require("express");
const bodyParser = require("body-parser");
const app = express();
let items=[];
app.use(bodyParser.urlencoded({extended: true}));


const viewaddress = path.join(__dirname, './views')
app.set('view engine', 'ejs');
app.set('views', viewaddress);

//app.use(express.static("public"));
// app.use(express.static(__dirname + '/public'));

app.use(express.static(path.join(__dirname, '/public')));


app.get("/", function(req,res){
    var today = new Date();
    var options= {weekday : "long", day: "numeric", month: "long"};
    //var currentDay = today.getDay();
let day = today.toLocaleDateString("en-US",options);
    
res.render('index', {listTitle : day, newlistitem: items});
});


app.post("/", function(req,res){
let item = req.body.newitem;
items.push(item);
res.redirect("/");
});


app.listen(3001, function (){
    console.log("Server started on port 3001");
});




/*if (currentDay=== 1 ){
      day = "Monday";  
    }
    else if (currentDay=== 2 ){
        day = "Tuesday";  
      }
     else if (currentDay=== 3 ){
        day = "Wednesday";  
      }
      else if (currentDay=== 4 ){
        day = "Thursday";  
      }
       else if (currentDay=== 5 ){
        day = "Friday";  
      }
    else if (currentDay=== 6 ){
        day = "Saturday";  
      }
    else{
        day = "Sunday";
    }*/
