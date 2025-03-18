const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log(res);

    res.json({ data: "" })
})

app.listen(process.env.PORT || 8080);

module.exports = app;