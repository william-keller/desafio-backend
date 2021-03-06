![CredPago](http://cp-arquivos-publicos.s3-website-sa-east-1.amazonaws.com/imagens/credpago.png)

# Desafio Backend

Este desafio consiste em criar uma API REST para um marketplace de Discos que será consumida por um aplicativo mobile e uma aplicação web.
Todos os itens serão colocados em um carrinho de compras e passados para a API para realizar uma transação e-commerce.

Faça o **fork** neste repositório e quando concluir o desafio faça um **pull request** para iniciar a nossa análise.

Escolha a tecnologia que achar melhor, contudo, deverá informar quais tecnologias foram usadas, como instalar, rodar e efetuar os acessos no arquivo para análise do desafio.

### POST `/store/api/v1/product`
Esse método deve receber um item novo e persistir no banco de dados.
```json
{
   "product_id":"d2eda25e-9757-11e9-bc42-526af7764f64",
   "artist":"Pink Floyd",
   "year":1973,
   "album":"Dask Side of The Moon",
   "price":250,
   "store":"Minha Loja de Discos",
   "thumb":"https://images-na.ssl-images-amazon.com/images/I/61R7gJadP7L._SX355_.jpg",
   "date":"26/11/2018"
}
```
+ Product
  
| Campo       | Tipo    |
|-------------|---------|
| product_id  | String  |
| artist      | String  |
| year        | Integer |
| album       | String  |
| price       | Integer |
| store       | String  |
| thumb       | String  |
| date        | String  |

### GET `/store/api/v1/products`
Retornar uma lista de produtos no seguinte formato JSON
```json
[
  {
    "product_id":"d2eda25e-9757-11e9-bc42-526af7764f64",
    "artist":"Pink Floyd",
    "year":1973,
    "album":"Dask Side of The Moon",
    "price":250,
    "store":"Minha Loja de Discos",
    "thumb":"https://images-na.ssl-images-amazon.com/images/I/61R7gJadP7L._SX355_.jpg",
    "date":"26/11/2018"
  },
  {
    "product_id":"4a149a9a-9758-11e9-bc42-526af7764f64",
    "artist":"U2",
    "year":1993,
    "album":"Zooropa",
    "price":100,
    "store":"Super Discos",
    "thumb":"https://images-na.ssl-images-amazon.com/images/I/81ZmhD2lO8L._SL1200_.jpg",
    "date":"01/02/2019"
  },
  {
    "product_id":"53f2b33a-9758-11e9-bc42-526af7764f64",
    "artist":"The Beatles",
    "year":1969,
    "album":"Abbey Road",
    "price":180,
    "store":"Old School Discos",
    "thumb":"https://images-na.ssl-images-amazon.com/images/I/919WO8q-nnL._SL1500_.jpg",
    "date":"13/06/2019"
  }
]
```

+ Product
  
| Campo       | Tipo    |
|-------------|---------|
| product_id  | String  |
| artist      | String  |
| year        | Integer |
| album       | String  |
| price       | Integer |
| store       | String  |
| thumb       | String  |
| date        | String  |

### POST `/store/api/v1/add_to_cart`
Adicionar item ao carrinho.
```json
{
   "cart_id":"c5b6c552-9757-11e9-bc42-526af7764f64",
   "client_id":"fac3591c-9785-11e9-bc42-526af7764f64",
   "product_id":"d2eda25e-9757-11e9-bc42-526af7764f64",
   "date":"26/11/2018"
   "time":"18:33:12"
}
```
+ Cart
  
| Campo       | Tipo    |
|-------------|---------|
| cart_id     | String  |
| client_id   | Integer |
| product_id  | String  |
| date        | String  |
| time        | String  |

Após o cliente incluir todos itens no carrinho, a compra será finalizada, invocando o método `buy` na sua API.

### POST `/store/api/v1/buy`
Finalizar a compra.
```json
{
   "client_id":"fac3591c-9785-11e9-bc42-526af7764f64",
   "cart_id":"c5b6c552-9757-11e9-bc42-526af7764f64",
   "client_name":"John Snow",
   "value_to_pay":280,
   "credit_card":{
      "number":"1234123412341234",
      "cvv":111,
      "exp_date":"06/22",
      "card_holder_name":"John S",
   }
}
```

+ Transaction

| Campo        | Tipo       |
|--------------|------------|
| client_id    | String     |
| client_name  | String     |
| total_to_pay | Integer    |
| credit_card  | CreditCard |

+ CreditCard

| Campo            | Tipo    |
|------------------|---------|
| card_number      | String  |
| card_holder_name | String  |
| cvv              | Integer |
| exp_date         | String  |


### GET `/store/api/v1/history`
Esse método deve retornar todos as compras realizadas na API
```json
[
   {
      "client_id":"fac3591c-9785-11e9-bc42-526af7764f64",
      "order_id":"569c30dc-6bdb-407a-b18b-3794f9b206a1",
      "card_number":"**** **** **** 1234",
      "value":100,
      "date":"21/08/2018"
   },
   {
      "client_id":"fac3591c-9785-11e9-bc42-526af7764f64",
      "order_id":"569c30dc-6bdb-407a-b18b-3794f9b206a2",
      "card_number":"**** **** **** 1234",
      "value":280,
      "date":"20/02/2019"
   },
   {
      "client_id":"fac3591c-9785-11e9-bc42-526af7764f64",
      "order_id":"569c30dc-6bdb-407a-b18b-3794f9b206aa",
      "card_number":"**** **** **** 1234",
      "value":500,
      "date":"29/06/2019"
   }
]
```

+ History

| Campo            | Tipo    |
|------------------|---------|
| card_number      | String  |
| cliend_id        | String  |
| value            | Integer |
| order_id         | String  |

### GET `/store/api/v1/history/{clientId}`
Chamada da API deve retornar todos as compras realizadas por um cliente específico
```json
[
   {
      "client_id":"fac3591c-9785-11e9-bc42-526af7764f64",
      "order_id":"569c30dc-6bdb-407a-b18b-3794f9b206a1",
      "value":180,
      "date":"19/01/2019",
      "card_number":"**** **** **** 1234"
   },
   {
      "client_id":"fac3591c-9785-11e9-bc42-526af7764f64",
      "order_id":"569c30dc-6bdb-407a-b18b-3794f9b206a2",
      "value":100,
      "date":"20/06/2019",
      "card_number":"**** **** **** 1234"
   }
]
```

### Premissas
- A solução deve ser escalável, preparada para receber um grande volume de requisições;
- Os endpoints do serviço devem responder num tempo satisfatório, que não comprometa a experiência dos usuários, mesmo com um grande volume de dados;
- O desenvolvimento pode ser feito utilizando qualquer linguagem de programação e qualquer sistema de banco de dados, cabendo ao desenvolvedor escolher o que for melhor para a situação;
- Serão avaliados a arquitetura, os padrões utilizados para o desenvolvimento, documentação, arquitetura da solução e a entrega no prazo;
