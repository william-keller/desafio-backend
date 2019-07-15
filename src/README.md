
# Desafio CredPago

Este desafio consiste em criar uma API REST para um marketplace de Discos que será consumida por um aplicativo mobile e uma aplicação web.
Todos os itens serão colocados em um carrinho de compras e passados para a API para realizar uma transação e-commerce.

## Ferramentas e linguagem

Para o desenvolvimento do desafio, foi utilizada a tecnologia Node.js *(version 10.16.0)* , dada a sua alta performance e escalabilidade para atender grande número de requisições.
Para persistir os dados foi utilizada a tecnologia MongoDB Community Server *(version 4.0)*, por sua alta performance, escalabilidade, baixo custo e facilidade de administrar.
Na composição da estrutura arquitetônica do projeto foi adotado o padrão MVC através da utilização do framework **Express** *(version 4.17.1)*.

## Requisitos para instalação

**NodeJs(*^10.16.0*)** com **npm(*6.9.0*)**:
https://nodejs.org/dist/v10.16.0/node-v10.16.0-x64.msi

**MongoDB Community Server(*^4.0.10*)**:
https://www.mongodb.com/download-center/community

**Porta 3000**
Para execução do programa, é necessário estar liberada a porta 3000.

## Deploy

1. Clone o repositório e extraia os arquivos na raiz do seu computador.

2. Encontre e inicialize localmente o servidor MongoDB através do arquivo mongod.exe.

3. Abra o prompt de comando e navegue até a pasta raiz do projeto onde o mesmo foi extraido.

4. Execute o comando **npm install** para baixar as dependências do projeto.

5. Execute o comando **npm start** para iniciar a API.

6. A API estará disponível para validação no link: **http://localhost:3000**

## Testando a API

1. Junto ao clone do repositório, existe uma pasta na raiz chamada **postaman**, ela contém a collection com os requests necessários para serem executados conforme a documentação oficial do desafio.

2. Foram desenvolvidas validações para as seguintes situações:

- Não permitir duplicar produtos.
- Não permitir adicionar ao carrinho produtos inexistentes.
- Não permitir processar o checkout de carrinhos inexistentes.
- Não permitir duplicar o checkout para o mesmo carrinho.

3. Caso haja necessidade de alterar as configurações de conexão com banco de dados ou url base, edite estes dados no arquivo `./src/config.js`.
