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

// Get Employees
app.get('/employees', (req, res) => {
    // Get data from MySQL 
    db.query(`SELECT * FROM employees`, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// Set port, listen for requests
app.listen(PORT, () => {
    console.log(`CONNECTED TO ${PORT}`);
});