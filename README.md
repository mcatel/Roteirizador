# Desafio - Roteirizador

Projeto desenvolvido a partir do desafio proposto neste [repositório](https://github.com/Attivilog/DesafioRoteirizador).

A aplicação é uma solução que retorna ao usuário informações de tempo e distância de uma rota com dois ou mais pontos de parada, ilustrando no mapa os pontos e a rota informados pelo usuário.

Demonstração do projeto em execução:

![Aplicação em execução](./web/demo/app_demo.gif)

## Tecnologias Utilizadas

* [ReactJs](https://reactjs.org/) - Front-End
* [Node.js](https://nodejs.org/en/) - Back-End
* [PostgreSQL](https://www.postgresql.org/) - Database

## Autores

**Mateus Catel** | [Contato](mailto:mdasilvacatel@hotmail.com?subject=GitHub%20|%20Desafio%20-%20Roteirizador) | [LinkedIn](https://www.linkedin.com/in/mateus-catel-258338148/)


# Introdução

Essas instruções fornecerão uma cópia do projeto instalado e funcionando em sua máquina local para fins de desenvolvimento e teste.


## **Pré-requisitos**

O que você será necessário para rodar o projeto.

## Node.js

**Linux:**
```
sudo apt install nodejs
```
**Windows (usando o Chocolatey):**
```
cinst nodejs
```

Outros exemplos podem ser encontrados [aqui](https://nodejs.org/en/download/package-manager/), ou baixe a versão [executável](https://nodejs.org/en/download/).

## Yarn

```
npm install -g yarn
```
Mais informações [aqui](https://yarnpkg.com/getting-started).

## Banco de dados PostgreSQL

O download e a instalação do PostgreSQL estão disponíveis [aqui](https://www.postgresql.org/download/) para variados sistemas operacionais.


# Instalação do Projeto

Faça o download do projeto:

```
git clone https://github.com/mcatel/Roteirizador
```

## Servidor

### Instalação das dependências:
```
cd server
yarn install
```
### Configuração do banco de dados:
Nos arquivos **.env** e **.env.test** será necessário adicionar os parâmetros de conexão com o banco de dados.

Exemplo:
```
DB_DIALECT=postgres
DB_HOST=localhost
DB_USER=postgres
DB_PASS=postgres
DB_NAME=router
```
>Para o arquivo **.env.test** utilize um DB_NAME diferente do utilizado no arquivo **.env**, pois esse será seu banco de dados de teste.

### Criação do banco de dados:
```
yarn sequelize db:create
```

### Adicionando a extensão PostGIS ao seu banco de dados:
```
psql -U <Usuário>

<Senha>

\c router

CREATE EXTENSION Postgis;

\q
```
>Se o comando **psql** não for reconhecido, adicione o diretório **/bin** de dentro do seu PostgreSQL as suas variáveis de ambiente. Mais informações podem ser encontradas [aqui](https://postgis.net/install/).

### Criação das tabelas:
```
yarn sequelize db:migrate
```

### Iniciando o servidor de desenvolvimento:
```
yarn dev
```

Após isso, a [API](http://localhost:3333) estará rodando na porta 3333.

![Servidor iniciado](./server/demo/server_started.png)

## Interface Web

### Instalação de dependências:
```
cd web
yarn install
```

### Iniciando a aplicação:
```
yarn start
```

Após isso, a [aplicação](http://localhost:3000) estará rodando na porta 3000.

![Aplicação iniciada](./web/demo/app_started.png)

# Testes

Para execução dos testes, primeiramente será necessário criar um novo banco de dados.

**Linux:**

```
yarn create_db_test
```
**Windows:**
```
yarn create_db_test_windows
```

Após isso, será necessário instalar a extensão Postgis, como é feito ao instalar o servidor.

```
psql -U <Usuário>

<Senha>

\c router_test

CREATE EXTENSION Postgis;

\q
```
>Se o comando **psql** não for reconhecido, adicione o diretório **/bin** de dentro do seu PostgreSQL as suas variáveis de ambiente. Mais informações podem ser encontradas [aqui](https://postgis.net/install/).

## Executando os testes

**Linux:**
```
yarn test
```

**Windows:**
```
yarn test_windows
```

![Suite de testes](./server/demo/test_suite.png)