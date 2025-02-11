import {consulta} from '../database/conexao.js';
class SelecaoRepository {
    //CRUD
    create(selecao){
        const sql = "INSERT INTO selecoes SET? ";
        return consulta(sql, selecao, "Não foi possível registar a seleção");
       
    }

    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql, "Não foi possível listar as seleções");
    }

    findById(id){ 
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consulta(sql, id, "Não foi possível encontrar a seleção");
    }

    update(selecao, id){
        const sql = "UPDATE selecoes SET? WHERE id=?";
        return consulta(sql,[selecao, id], "Não foi possível actualizar a seleção");

      
    }

    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consulta(sql, id, "Não foi possível apagar a seleção");
    }
}

export default new SelecaoRepository();