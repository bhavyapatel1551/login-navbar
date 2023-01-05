var exp = require("express");
 var app = exp();

 app.get('/',function(req,res){
    res.write('Logged in')
 })
 app.get('/register',function(req,res){
   res.render("regester.html")
 })
 app.listen(5500)