const express = require('express');
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const login = require("./model/student")
require("./db/conn");
const routerStd=require('./routes/studentProfileRoute')
const app = express();
const router = require("./routes/route");
var body;
var uname;
var passw;
app.use(bodyparser.urlencoded({ extended: false }));

app.use(routerStd);
app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/login.html')
    res.send(`
    <html>
    <body>
    <div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="/msg" method="POST">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br>
                                <input type="text" name="username" id="username" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="text" name="password" id="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
                            </div>
                            <div id="register-link" class="text-right">
                                <a href="/register" class="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
    </html>`)

    res.end();
})

app.post("/msg", (req, res) => {
    body = req.body;
    console.log(body);
    uname = body.username;
    passw = body.password;
    console.log(uname);
    res.redirect(`/login/username`)

})

app.get("/login/username", async (req, res) => {
    const pass = await login.find({ username: uname }, { password: 1, _id: 0 });
    var p1 = (pass[0].password);
    console.log(p1);
    if (p1 == passw) {
        // console.log(uname);
       exports.uname=uname,
        // console.log(uname);
        res.redirect("/student/profile");
    }
    else {
        res.redirect("/");
    }

})

app.get('/register', (err, res) => {
    res.sendFile(__dirname + '/register.html')
})

app.use(express.json());
app.use(router);
app.listen(5500);