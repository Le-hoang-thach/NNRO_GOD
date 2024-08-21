const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'signup'
});

app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;
    const values = [username, password, email];
    const sql = 'INSERT INTO login (username, password, email) VALUES (?, ?, ?)';

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.status(500).json('Error');
        } else {
            return res.status(200).json(data);
        }
    });
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const values = [username, password];
    const sql = 'SELECT * FROM login WHERE username = ? AND password = ?';

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.status(500).json('Error');
        } 
        if(data.length > 0) {
            return res.json('Login Successful');
        }else{
            return res.json('Login Faile');

        }
    });
});

app.listen(8081, () => {
    console.log('Server started on port 8081');
});
