const livros = [
    {'livroId':1, 'livroTitulo': 'Rari Poter'},
    {'livroId':2, 'livroTitulo': 'Como aprender Javascript'}
];

listLivros = (req, res) => { 
    res.send(livros);
};

listOneLivros = (req, res) =>{
    const id = req.params.livroId;
    const livro = livros.find((livro) => livro.livroId === Number(id));
    if(livro){
        res.send(livro);
    }else{
        res.status(404).send("Nenhum livro encontrado com esse id");
    }
}

createLivros = (req, res) =>{
    const livro = req.body;
    livros.push(livro);
    res.status(201).send("Livro Criado com Sucesso");
}

module.exports = { listLivros, listOneLivros, createLivros };