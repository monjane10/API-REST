import app from './app.js'

const PORTA = 3000;

 //Escutar a porta 3000
 app.listen(PORTA, () =>{
    console.log(`Servidor rodando na porta: https://localhost:${PORTA}`)});
