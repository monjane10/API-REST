import express from 'express';

const app = express();
app.use(express.json()); 

//Mock

const selecoes = [
    {id: 1, nome: "Brasil", grupo: "A"},
    {id: 2, nome: "Argentina", grupo: "A"},
    {id: 3, nome: "França", grupo: "B"},
    {id: 4, nome: "Inglaterra", grupo: "B"},
    {id: 5, nome: "Alemanha", grupo: "C"},
    {id: 6, nome: "Itália", grupo: "C"},
    {id: 7, nome: "Holanda", grupo: "A"},
    {id: 8, nome: "Espanha", grupo: "B"},
    {id: 9, nome: "Uruguai", grupo: "C"},
    {id: 10, nome: "Suécia", grupo: "A"},
    {id: 11, nome: "Dinamarca", grupo: "B"},
    {id: 12, nome: "Bélgica", grupo: "C"},
    {id: 13, nome: "Japão", grupo: "A"},
    {id: 14, nome: "Noruega", grupo: "B"},      
    {id: 15, nome: "Coreia do Sul", grupo: "C"},
    {id: 16, nome: "Chile", grupo: "A"},
    {id: 17, nome: "Croácia", grupo: "B"},
    {id: 18, nome: "Polônia", grupo: "C"},
    {id: 19, nome: "Portugal", grupo: "A"},
    {id: 20, nome: "Suíça", grupo: "B"},
    {id: 21, nome: "Costa Rica", grupo: "A"},
    {id: 22, nome: "Senegal", grupo: "B"},
    {id: 23, nome: "Cameroon", grupo: "C"},
    {id: 24, nome: "Gana", grupo: "A"},
    {id: 25, nome: "Tunísia", grupo: "B"},
    {id: 26, nome: "México", grupo: "C"},
    {id: 27, nome: "Qatar", grupo: "A"},    
    {id: 28, nome: "Egito", grupo: "B"},
    {id: 29, nome: "Canadá", grupo: "C"},
    {id: 30, nome: "Estados Unidos", grupo: "A"},
    {id: 31, nome: "Moçambique", grupo: "B"},
    {id: 32, nome: "Marrocos", grupo: "C"},
    {id: 33, nome: "Irã", grupo: "A"},
    {id: 34, nome: "Catar", grupo: "B"},
    {id: 35, nome: "Arábia Saudita", grupo: "B"},
    {id: 36, nome: "Austrália", grupo: "A"},
    {id: 37, nome: "Nova Zelândia", grupo: "C"},
    {id: 38, nome: "Sérvia", grupo: "B"},
    {id: 39, nome: "Camarões", grupo: "C"},
    {id: 40, nome: "Gana", grupo: "A"},
    {id: 41, nome: "Tunísia", grupo: "B"},
]

app.get('/', (req, res) =>{
    res.send("Olá Mundo, Sou o Node");
});

app.get('/selecoes', (req, res) =>{
    res.status(200).send(selecoes);
});

app.get('/selecoes/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const selecao = selecoes.find(s => s.id === id);
  
    if (selecao) {
      res.status(200).send(selecao);
    } else {
      res.status(404).send({ message: 'Selecao não encontrada' });
    }
  });

  app.post('/selecoes', (req, res) => {
     const {id, nome, grupo} = req.body;
     if(!id || !nome || !grupo){
        res.status(400).send("os campos id, nome e grupo são obrigatórios");
     }
     const selecao = req.body;
     selecoes.push(selecao);
     res.status(201).send("Selecao adicionada com sucesso:" + selecao);

  });

  app.delete('/selecoes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = selecoes.findIndex(s => s.id === id);
  
    if (index !== -1) {
      selecoes.splice(index, 1);
      res.status(200).send({ message: `Selecao com id ${id} removida com sucesso.` });
    } else {
      res.status(404).send({ message: 'Selecao não encontrada.' });
    }
  });

  app.put('/selecoes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, grupo } = req.body;
    
    const selecao = selecoes.find(s => s.id === id);
  
    if (!selecao) {
      return res.status(404).send({ message: 'Selecao não encontrada.' });
    }
  
    if (!nome || !grupo) {
      return res.status(400).send("Os campos nome e grupo são obrigatórios para edição.");
    }
  
    selecao.nome = nome;
    selecao.grupo = grupo;
  
    res.status(200).send({ message: 'Selecao atualizada com sucesso.', selecao });
  });

export default app;
