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
    // password: ,
    // database: ''
})


app.listen(PORT, () => {
    console.log(`CONNECTED TO ${PORT}`)
})