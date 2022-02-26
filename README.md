# Desafio - Roteirizador

Projeto desenvolvido a partir do desafio proposto neste [repositório](https://github.com/Attivilog/DesafioRoteirizador).

A aplicação é uma solução que retorna ao usuário informações de tempo e distância de uma rota com dois ou mais pontos de parada, ilustrando no mapa os pontos e a rota informados pelo usuário.

Demonstração do projeto em execução:

<br>

![Aplicação em execução](./web/demo/app_demo.gif)

## Tecnologias Utilizadas

* [ReactJs](https://reactjs.org/) - Front-End
* [Node.js](https://nodejs.org/en/) - Back-End
* [PostgreSQL](https://www.postgresql.org/) - Database

<br>

## Autores

**Mateus Catel** | [Contato](mailto:contato@catel.dev?subject=GitHub%20|%20Desafio%20-%20Roteirizador) | [LinkedIn](https://www.linkedin.com/in/mateus-catel-258338148/)

<br>

# Introdução

Essas instruções fornecerão uma cópia do projeto instalado e funcionando em sua máquina local para fins de desenvolvimento e teste.

<br>

# Pré-requisitos

O que você será necessário para rodar o projeto.

<br>

## Node.js

Linux:

~~~
sudo apt install nodejs
~~~

Windows (usando o Chocolatey):
```
cinst nodejs
```

Outros exemplos podem ser encontrados [aqui](https://nodejs.org/en/download/package-manager/), ou baixe a versão [executável](https://nodejs.org/en/download/).

<br>

## Yarn

```
npm install -g yarn
```
Mais informações [aqui](https://yarnpkg.com/getting-started).

<br>

## Banco de dados PostgreSQL

O download e a instalação do PostgreSQL estão disponíveis [aqui](https://www.postgresql.org/download/) para variados sistemas operacionais.
>Também pode ser utilizado um banco de dados em arquivo (Ex: SQLite).

<br>

# Instalação do Projeto

Faça o download do projeto:

```
git clone https://github.com/mcatel/Roteirizador
```

<br>

## Servidor

Instalação das dependências:
```
cd server
yarn install
```
<br>

## Configuração do banco de dados:
Crie os arquivos **.env** e **.env.test** na raiz do projeto utilizando o exemplo abaixo. Será necessário modificar os parâmetros para a conexão com o seu banco de dados.

Exemplo:
```
DB_DIALECT=postgres
DB_HOST=localhost
DB_USER=postgres
DB_PASS=postgres
DB_NAME=router
DB_STORAGE=src/database/database.sqlite
```
>Para o arquivo **.env.test** utilize um DB_NAME diferente do utilizado no arquivo **.env**, pois esse será seu banco de dados de teste.

>O atributo DB_STORAGE serve para utilização de bancos de dados em arquivos (Ex: SQLite).

<br>

## Criação do banco de dados:
```
yarn sequelize db:create
```
<br>

## Criação/Atualização das tabelas:
```
yarn sequelize db:migrate
```
<br>

## Iniciando o servidor de desenvolvimento:
```
yarn dev
```
<br>

Após isso, a [API](http://localhost:3333) estará rodando na porta 3333.

![Servidor iniciado](./server/demo/server_started.png)

<br>

## Interface Web

Instalação de dependências:
```
cd web
yarn install
```
<br>

Iniciando a aplicação:
```
yarn start
```
<br>

Após isso, a [aplicação](http://localhost:3000) estará rodando na porta 3000.

<br>

![Aplicação iniciada](./web/demo/app_started.png)

<br>

# Testes

Para execução dos testes, primeiramente será necessário criar um novo banco de dados.

Linux:

```
yarn create_db_test
```
Windows:
```
yarn create_db_test_windows
```
## Executando os testes

Linux:
```
yarn test
```

Windows:
```
yarn test_windows
```
<br>

![Suite de testes](./server/demo/test_suite.png)