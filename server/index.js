const cors = require('cors');
const express = require('express');
const app = express();
const port = 8000;
const planets = require('./routes/planets');

app.use(cors({ origin: "*" }))
app.use('/planets/', planets);

app.listen(port, () => {
    console.log(`Server listening at port ${port}...`);
});