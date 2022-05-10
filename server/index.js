require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: `${process.env.MYSQL_PASSWORD}`,
    database: `${process.env.DATABASE_NAME}`,
})

app.post('/add', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const position = req.body.position;
    const salary = req.body.salary;
    
    db.query(`INSERT INTO employees (first_name, last_Name, position, salary)
        VALUES(?, ?, ?, ?)`, 
        [firstName, lastName, position, salary], (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send(result)
            }
        })
})

app.listen(PORT, () => {
    console.log(`CONNECTED TO ${PORT}`)
})