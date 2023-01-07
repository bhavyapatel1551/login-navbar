const express = require('express');
const routerAdm = express.Router();
const bcrypt = require("bcrypt");
const adminlogin = require('../model/admin');


// Login 
routerAdm.get('/adminlogin', (req, res) => {
    res.render("adminlogin")
});

routerAdm.post('/adminlogin', async (req, res) => {
    try {
        const aid = parseInt(req.body.aid);
        const pass = req.body.apass;

        const adminLogin = await adminlogin.findOne({ aid: aid });

        const isMatch = await bcrypt.compare(pass, adminLogin.password);

        if (isMatch) {
            res.status(201).send(adminLogin);
        }
        else {
            res.send("Inavalid Login");
        }

    } catch (error) {
        res.status(404).send(error);
    }
})

module.exports = routerAdm;