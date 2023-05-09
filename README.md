# Criando API Node.js com Express Rápido

Created: April 28, 2023
Responsável: Vitor Migoto
Tags: Back

# Lista de Passos:

<aside>
💡 Índice

1. [Inicio do Projeto](https://www.notion.so/Criando-API-Node-js-com-Express-R-pido-4716f85b51fa4ba79ecc7e1e10e29410)
2. [Instalação de Dependências](https://www.notion.so/Criando-API-Node-js-com-Express-R-pido-4716f85b51fa4ba79ecc7e1e10e29410)
3. [Arquivos server e app.js](https://www.notion.so/Criando-API-Node-js-com-Express-R-pido-4716f85b51fa4ba79ecc7e1e10e29410)
    
    [3.1 Server.js](https://www.notion.so/Criando-API-Node-js-com-Express-R-pido-4716f85b51fa4ba79ecc7e1e10e29410)
    
    [3.2 App.js](https://www.notion.so/Criando-API-Node-js-com-Express-R-pido-4716f85b51fa4ba79ecc7e1e10e29410)
    
4. [Criação da Controladora e Rota da Controladora](https://www.notion.so/Criando-API-Node-js-com-Express-R-pido-4716f85b51fa4ba79ecc7e1e10e29410)
    
    4.1 [ExemploController.js](https://www.notion.so/Criando-API-Node-js-com-Express-R-pido-4716f85b51fa4ba79ecc7e1e10e29410)
    
    4.2 [exemploRoutes.js](https://www.notion.so/Criando-API-Node-js-com-Express-R-pido-4716f85b51fa4ba79ecc7e1e10e29410)
    
5. [Adicionando a Controladora no Arquivo app.js](https://www.notion.so/Criando-API-Node-js-com-Express-R-pido-4716f85b51fa4ba79ecc7e1e10e29410)
6. [Configurando nodemon no package.json](https://www.notion.so/Criando-API-Node-js-com-Express-R-pido-4716f85b51fa4ba79ecc7e1e10e29410)
7. [Executando a API.](https://www.notion.so/Criando-API-Node-js-com-Express-R-pido-4716f85b51fa4ba79ecc7e1e10e29410)
</aside>

**Estrutura de Pastas da API**

![Untitled](Criando%20API%20Node%20js%20com%20Express%20Ra%CC%81pido%204716f85b51fa4ba79ecc7e1e10e29410/Untitled.png)

**Arquivos:**

[api_node.rar](Criando%20API%20Node%20js%20com%20Express%20Ra%CC%81pido%204716f85b51fa4ba79ecc7e1e10e29410/api_node.rar)

## 1. Inicie projeto node com o comando:

```jsx
npm init -y
```

## 2. Instale as dependências com o comando abaixo:

```jsx
npm install express nodemon body-parser
```

## 3. Crie uma pasta /src e dentro dela um arquivo chamado *server.js* e *app.js*

```jsx
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
```

### 3.1 No arquivo *server.js* digite o seguinte código:

### 3.2 No arquivo *app.js* digite o seguinte código:

```jsx
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuração de middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
```

## 4. Crie uma pasta chamada *controllers* dentro da pasta *src*.

### 4.1 Dentro da pasta *controllers* você poderá criar suas controladoras de acordo com o exemplo da *ExemploController.js* abaixo:

```jsx
const exemplos = [
  {'id':1,'nome':'Exemplo 1'},
  {'id':2,'nome':'Exemplo 2'}
];

getExemplo = (req, res) => {
  res.send(exemplos);
};

getExemploById = (req, res) => {
  const id = req.params.id;
  const exemplo = exemplos.find((u) => u.id === Number(id));
  if (exemplo) {
    res.send(exemplo);
  } else {
    res.status(404).send('Exemplo não encontrado');
  }
}

module.exports = { getExemplo, getExemploById };
```

### 4.2 Dentro de *src* crie uma pasta *routes* e dentro dela o arquivo *exemploRoutes.js* com o seguinte código:

```jsx
const express = require('express');
const router = express.Router();

const exemploController = require('../controllers/ExemploController');

router.get('/', exemploController.getExemplo);
router.get('/:id', exemploController.getExemploById);

module.exports = router;
```

## 5. No arquivo *app.js* adicione as linhas abaixo para ficar completo conforme a seguir:

```
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Importando a Rota
const exemploRoutes = require('./routes/exemploRoutes');

// Configuração de middleware
app.use(express.json());const express = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const exemploRoutes = require('./routes/exemploRoutes');

app.use('/exemplos',exemplosRouter)

// Definindo rotas
app.use('/exemplo', exemploRoutes);

module.exports = app;
```

## 6. Adicione no arquivo *package.json* a seguinte linha nos scripts para ficar completo:

```jsx
{
  "name": "gabarito_api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon src/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.18.2",
    "nodemon": "^2.0.22"
  }
}
```

## 7. Para executar o servidor digite:

```jsx
npm start
```