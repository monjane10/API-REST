import app from './src/app.js'

const PORTA = 3000;


app.listen(PORTA, () =>{
    console.log(`Servidor rodando na porta: https://localhost:${PORTA}`);
 });