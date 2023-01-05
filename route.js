const express = require('express');
const router = new express.Router();

const studentlogin = require('../model/student');
const companylogin=require('../model/company');
const adminlogin=require('../model/admin');

// Student Methods
router.post("/student", async (req, res) => {
    try {
        const addStudentDetail = new studentlogin(req.body);
        const details = await addStudentDetail.save();
        res.status(201).send(details);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/student", async (req, res) => {
    try {
        const getStudent = await studentlogin.find({}).sort({ sid: 1 });
        res.status(201).send(getStudent);

    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/student/:sid", async (req, res) => {
    try {
        const getStudentById = await studentlogin.find({ sid: req.params.sid }).sort({ sid: 1 });
        res.status(201).send(getStudentById);

    } catch (e) {
        res.status(400).send(e);
    }
});


// Comapny Methods
router.post("/company", async (req, res) => {
    try {
        const addCompanyDetail = new companylogin(req.body);
        const details = await addCompanyDetail.save();
        res.status(201).send(details);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/company", async (req, res) => {
    try {
        const getCompany = await companylogin.find({}).sort({ cid: 1 });
        res.status(201).send(getCompany);

    } catch (e) {
        res.status(400).send(e);
    }
});


// Admin Method
router.post("/admin", async (req, res) => {
    try {
        const addAdminDetail = new adminlogin(req.body);
        const details = await addAdminDetail.save();
        res.status(201).send(details);
    } catch (e) {
        res.status(400).send(e);
    }
});


module.exports = router;