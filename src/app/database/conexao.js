import mysql from 'mysql2';


const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'olamundo',
    database: 'mundial_db'
});

conexao.connect();
/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} valores valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida 
 * @returns objecto da Promisse
 */
export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if(erro){
                return reject(mensagemReject);
            }else{
               const row = JSON.parse(JSON.stringify(resultado));
               return resolve(row);
            }
        });
    });
}
export default conexao;