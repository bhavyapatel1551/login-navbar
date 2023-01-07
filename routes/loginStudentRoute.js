const express = require('express');
const app = express();
const routerStd = express.Router();
const bcrypt = require("bcrypt");
const path = require('path');
const fs = require('fs');
const studentlogin = require('../model/student');
var studentLogin;

const template_path = path.join(__dirname, "../templates/views");
app.set("view engine", "hbs");
app.set("views", template_path);

// Login 
routerStd.get('/studentlogin', (req, res) => {
    res.render("studentlogin")
});

routerStd.post('/studentlogin', async (req, res) => {
    try {
        const sid = parseInt(req.body.sid);
        const pass = req.body.spwd;

        studentLogin = await studentlogin.findOne({ sid: sid });

        const isMatch = await bcrypt.compare(pass, studentLogin.password);

        if (isMatch) {
            res.status(201).redirect("/studentProfile");
        }
        else {
            res.send("Inavalid Login");
        }

    } catch (error) {
        res.status(404).send(error);
    }
});


// Loading Student Profile
const stdProfile = fs.readFileSync(`${template_path}/studentProfile.hbs`, "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let std = tempVal.replace("{%Name%}", orgVal.sname);
    std = std.replace("{%Email%}", orgVal.email);
    std = std.replace("{%Address%}", orgVal.address);
    std = std.replace("{%cgpa%}", orgVal.cgpa);
    std = std.replace("{%Branch%}", orgVal.branch);
    std = std.replace("{%MobileNo%}", orgVal.mobileNo);

    return std;
}
routerStd.get('/studentProfile', (req, res) => {
    var studentDetail = studentLogin;
    var arrData = [studentDetail];

    const realData = arrData.map((val) => replaceVal(stdProfile, val)).join("");
    res.send(realData);
    // res.render("studentProfile");

})

module.exports = routerStd;