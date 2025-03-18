const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    console.log("Cookies: ", req.cookies);

    res.json({ cookies: req.cookies });
});

app.listen(process.env.PORT || 8080);

module.exports = app;