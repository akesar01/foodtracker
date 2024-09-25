import express from 'express';
import { saveConfig } from './util.js';

const app = express();
const port = 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    next();
});

app.post("/", (req, res, next) => {
    const message = req.body.message;
    res.json({ "receivedMessage": message });
    next();
});

app.post("/api/auth/login", (req, res, next) => {
    const user_name = req.body.user_name;
    console.log(user_name);
    saveConfig(user_name);
    res.status(200).json({ message: "User logged in successfully." });
    
    next();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});