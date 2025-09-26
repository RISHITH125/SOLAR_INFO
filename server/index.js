import cors from 'cors';
import express from 'express';
const app = express();
const port = 8000;
import planets from './routes/planets.js';

app.use(cors({ origin: "*" }))
app.use('/planets/', planets);

app.listen(port, () => {
    console.log(`Server listening at port ${port}...`);
});