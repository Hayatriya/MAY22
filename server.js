const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://hayatriya.github.io',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Origin']
};

app.use(cors(corsOptions));

// Sample user data
const users = {
    user1: { username: 'user1', password: 'password1', data: 'Data for user1' },
    user2: { username: 'user2', password: 'password2', data: 'Data for user2' }
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username].password === password) {
        res.json({ success: true, data: users[username].data });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
