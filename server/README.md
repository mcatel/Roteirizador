# Database - Postgres

- Database creation: npx sequelize db:create || yarn sequelize db:create
- Database update: npx sequelize db:migrate || yarn sequelize db:migrate

# PostGIS instalattion

- Se o comando psql não for reconhecido, adicionar o caminho do diretório bin do Postgres ao PATH (Enviroment variables);

- psql -U postgres
    - postgres
    - \c roteirizador
    - CREATE EXTENSION Postgis;
    - \q

- Se o arquivo não for encontrado, terá de ser adicionada a extensão ao Postgres server Application Stack Builder ou sudo apt-get postgis