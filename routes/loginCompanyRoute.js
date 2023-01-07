const express = require('express');
const routerCmp = express.Router();
const bcrypt = require("bcrypt");
const companylogin = require('../model/company');


// Login 
routerCmp.get('/companylogin', (req, res) => {
    res.render("companylogin")
});

routerCmp.post('/companylogin', async (req, res) => {
    try {
        const cemail = req.body.cemail;
        const pass = req.body.cpwd;

        const companyLogin = await companylogin.findOne({ cemail: cemail });

        const isMatch = await bcrypt.compare(pass, companyLogin.password);

        if (isMatch) {
            res.status(201).send(companyLogin);
        }
        else {
            res.send("Inavalid Login");
        }

    } catch (error) {
        res.status(404).send(error);
    }
})

module.exports = routerCmp;