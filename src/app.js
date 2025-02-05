import express from 'express';

const app = express();

app.get('/', (req, res) =>{
    res.send("Olá Mundo, Sou o Node");

});

export default app;
