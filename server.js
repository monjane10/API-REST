import app from './src/app.js'
import conexao from './infra/conexao.js';

const PORTA = 3000;

// conectando com o banco de dados
conexao.connect((erro) => {
   if (erro) {
       console.log('Erro ao conectar com a Base de dados' + erro);
   } else {
       console.log('Conexão com a Base de dados realizada com sucesso');
       //Escutar a porta 3000
       app.listen(PORTA, () =>{
        console.log(`Servidor rodando na porta: https://localhost:${PORTA}`);
     });
   }
});
