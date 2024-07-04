const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.render('index', { employees });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.get('/add', (req, res) => {
    res.render('add');
});

router.post('/add', async (req, res) => {
    const { employeeId, name, email, designation, branch, phone, state } = req.body;
    const newEmployee = new Employee({ employeeId, name, email, designation, branch, phone, state });

    try {
        await newEmployee.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const employee = await Employee.findById(id);
        res.render('edit', { employee });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { employeeId, name, email, designation, branch, phone, state } = req.body;

    try {
        await Employee.findByIdAndUpdate(id, { employeeId, name, email, designation, branch, phone, state });
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Employee.findByIdAndDelete(id);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
