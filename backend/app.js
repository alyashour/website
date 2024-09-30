const express = require('express');
const app = express();
const port = 3000;

// get
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// listen
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});