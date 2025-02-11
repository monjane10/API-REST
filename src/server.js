import app from './app.js'

const PORTA = process.env.PORTA || 3000;

 //Escutar a porta 3000 ou a porta passada pelo serviço de hospedagem
 app.listen(PORTA, () =>{
    console.log(`Servidor rodando na porta: https://localhost:${PORTA}`)});
