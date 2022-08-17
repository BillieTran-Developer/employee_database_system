const dbConfig = require('./config/db.config');
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Create connection to the database
const db = mysql.createConnection({
    user: dbConfig.USER,
    host: dbConfig.HOST,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE,
})

// Open MySQL connection
db.connect(error => {
    if(error) throw error;
    console.log('Connected to MySQL Database')
});

// Add new employee
app.post('/add', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const position = req.body.position;
    const salary = req.body.salary;
    // Insert into db
    db.query(`INSERT INTO employees (first_name, last_Name, position, salary)
        VALUES(?, ?, ?, ?)`, 
        [firstName, lastName, position, salary], (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

// Delete employee
app.delete('/delete/:employeeId', (req, res) => {
    // Retrieve employeeId param from URL path
    const id = req.params.employeeId;
    // Delete data from MySQL
    db.query(`DELETE FROM employees WHERE id = ?`, id, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// Get single employee
app.get('/edit/:employeeId', (req, res) => {
    // Retrieve employeeId param from URL path
    const employeeId = req.params.employeeId

    //Get data from MySQL
    db.query(`SELECT *  FROM employees WHERE id = ${employeeId}`, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

// Update employee
app.put('/update', (req, res) => {
    const id = req.body.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const position = req.body.position;
    const salary = req.body.salary;
    db.query(`
        UPDATE employees SET 
        last_name = ?, 
        first_name = ?, 
        position = ?, 
        salary = ? 
        WHERE id = ?`, 
        [lastName, firstName, position, salary, id], 
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

// Get employees list
app.get('/employees', (req, res) => {
    // Get data from MySQL 
    db.query(`SELECT * FROM employees`, (err, result) => {
        err ? console.log(err) : res.send(result);
    });
});

// Employee Search

// Get employee by name
app.get('/searchresults', (req, res) => {
    // Retrieve name param from query
    const firstName = req.query.first_name;
    const lastName = req.query.last_name
    // Get data from MySQL
    db.query(`SELECT * FROM employees WHERE (first_name='${firstName}' AND last_name='${lastName}') OR 
    first_name='${firstName}' OR 
    last_name='${lastName}'`, 
    (err, result) => {
        err ? console.log(err) : res.send(result);
    });
});

// Set port, listen for requests
app.listen(PORT, () => {
    console.log(`CONNECTED TO ${PORT}`);
});