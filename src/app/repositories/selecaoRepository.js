import conexao from '../database/conexao.js';
class SelecaoRepository {
    //CRUD
    create(selecao){
        const sql = "INSERT INTO selecoes SET? ";
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (erro, resultado) => {
                if(erro){
                    return reject("Não foi possível registar a seleção!");
                }else{
                    //Fazer parse dos resultados para JSON
                    const row = JSON.parse(JSON.stringify(resultado));
                   return resolve(row);
                }
            });
        });
       
    }

    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if(erro){
                    return reject("Não foi possível localizar as seleções!");
                }else{
                    //Fazer parse dos resultados para JSON
                    const row = JSON.parse(JSON.stringify(resultado));
                   return resolve(row);
                }
            });
        });
    }

    findById(id){ 
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro){
                    return reject("Não foi possível localizar a seleção pelo id!");
                }else{
                    //Fazer parse dos resultados para JSON
                    const row = JSON.parse(JSON.stringify(resultado));
                   return resolve(row);
                }
            });
        });
    }

    update(selecao, id){
        const sql = "UPDATE selecoes SET? WHERE id=?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (erro, resultado) => {
                if(erro){
                    return reject("Não foi possível actualizar a seleção!");
                }else{
                    //Fazer parse dos resultados para JSON
                    const row = JSON.parse(JSON.stringify(resultado));
                   return resolve(row);
                }
            });
        });

      
    }
    
    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro){
                    return reject("Não foi possível apagar a seleção!");
                }else{
                    //Fazer parse dos resultados para JSON
                    const row = JSON.parse(JSON.stringify(resultado));
                   return resolve(row);
                }
            });
        });
    }
}

export default new SelecaoRepository();