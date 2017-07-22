# Aplicação para teste de habilidades, CRUD RESTful API em Node.js & Express.js com MongoDB

Código desenvolvido por Lucas Conrado
(www.conradoweb.esy.es)

# ***[Clique aqui](http://conradoweb.esy.es/best-customers/#!/clients){:target="_blank"} para ver o projeto rodando***

## Recursos utilizados no desenvolvimento:
- Angular.js; (Por ainda ter lenha pra queimar mesmo com a chegada do Angular e a boa concorrência de outros frameworks)
- Gulp.js; (Pela produtividade e performance adquirida)
- Jasmine; (Na verdade não tive tempo pro TDD, mas faria com Jasmine)
- Node.js ~6.x;
- Express.js;
- PHP; (Foi bem feio o código, só pra mostrar algo)
- MySQL;
- Conceito RESTful;
- MongoDB;
- Mongoose;
- JSON data;
- Postman (Testar a API com mais agilidade);

## Executar Localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina para depois instalar as dependências.

```
git clone git@github.com:Conradolucas/best-customers.git
```
### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.js**: Caso não tenha, basta realizar o download [aqui](https://nodejs.org/en/)
* **MongoDB**: Caso também não tenha, basta realizar o download [aqui](https://www.mongodb.com/download-center#community)
* **WAMP/XAMP**: Caso decida utilizar a versão em php, um servidor imbutido ou da forma que preferir trabalhar.

#### Downloads para PHP

* PHP download [aqui](http://php.net/downloads.php) **(Se estiver no windows, p/ servidor embutido, é necessário  criar váriaveis de ambiente)** [SAIBA +](http://www.hardware.com.br/tutoriais/apache-php-MySQL-windows/configurando-php-manualmente.html)
* WAMP download [aqui](http://www.wampserver.com/en/)
* XAMPP download [aqui](https://www.apachefriends.org/pt_br/download.html)

### Instalando as Dependências

Abra o CMD (caso esteja no Windows) e digite a path do projeto

```
cd "C:\Users\SeuComputador\Documents\...\Projeto"
```

Depois, quando estiver na pasta do projeto, digite linha de comando a seguinte instrução:

```
npm install
```

Ao digitar a instrução acima, automaticamente será baixado todas as dependências listadas no arquivo package.json:

* `node_modules` - pasta será criada, contêm os packages do npm que são necessários para rodar o CRUD.

### Executando a Aplicação
***Você pode rodar a aplicação executando o arquivo start-backend-nodejs.sh para API node.js e executar start-backend-php.sh para consumir os dados com PHP + MySQL***

Após a instação das dependências, se correr tudo certo e não retornar erros, vamos digitar no terminal o comando abaixo, para realizar os build's e iniciar o live-server do gulp.

```
gulp
```

Depois disso o front-end já deve funcionar, agora você precisará abrir um outro terminal na sua máquina para iniciar a API.

#### Para API com node.js + MongoDB

Digite no terminal o seguinte comando:

```
mongod
```
Abra outro terminal, nele acesse o diretório da API

```
cd "C:\Users\SeuComputador\Documents\...\Projeto\api"
```

Dentro do path digite o seguinte comando:

```
node webservice.js
```

Caso o MongoDB esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a porta 27017 foi iniciada.

Agora, abra a página da aplicação em `http://localhost:8000`. E pronto as API's serão executadas de maneira local na sua máquina.

#### Para API com PHP + MySQL (Servidor embutido)

Crie um banco de dados MySQL em sua máquina e importe o arquivo **best-customers.sql** localizado dentro da pasta /api

**Altere a função que conecta no banco com as credênciais criadas para seu banco**

``` php
$conn = new \PDO("MySQL:host=ENDERECO_aqui;dbname=BANCO_aqui","USUARIO_aqui","SENHA_aqui");

```
###### Sim, isso está ruim.

Abra outro terminal, nele acesse o diretório da API

```
cd "C:\Users\SeuComputador\Documents\...\Projeto\api"
```

Agora basta digitar o seguinte comando:

```
php -S localhost:8080 webservice.php
```

***LEMBRE-SE DE CRIAR UM BANCO DE DADOS E IMPORTAR O SQL QUE ESTÁ LOCALIZADO EM /api/best-customers.sql***       

Fiquem à vontade em usar e testar ambas as conexões! :)  

## Testando a Aplicação no Postman:

Caso queira testar as API's desenvolvidas no projeto, primeiro baixe o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).

Depois de realizar o download, basta testas as rotas abaixo:

  ROTA                    |     HTTP(Verbo)   |      Descrição        |
------------------------- | ----------------- | --------------------- |
/clients                  |       POST        | Cadastrar             |
/clients                  |       GET         | Selecionar Todos      |
/clients/:usuario_id      |       GET         | Selecionar por ID     |
/clients/:usuario_id      |       PUT         | Atualizar por ID      |    
/clients/:usuario_id      |       DELETE      | Excluir por ID        |
