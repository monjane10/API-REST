import express from 'express';
import routes from './routes.js'


const app = express();

//usar o express
app.use(express.json()); 

//Usar o router
app.use(routes);


  
export default app;
