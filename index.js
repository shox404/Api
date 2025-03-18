const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require("cors");

app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin: 'https://api-blond-tau.vercel.app',
    credentials: true
}));

app.get('/', (req, res) => {
    console.log("Cookies: ", req.cookies);

    res.json({ cookies: req.cookies });
});

app.post("/", (req, res) => {
    res.json({ data: req })
})

app.listen(process.env.PORT || 8080);

module.exports = app;