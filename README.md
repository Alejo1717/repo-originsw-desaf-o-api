# repo-originsw-desaf-o-api
Este repositorio contienie la resolución del desafío tecnico propuesto por Origin Software correspondiente al proyecto api.

# Base de datos 
# Crear el container en docker

docker run -p 5432:5432 --name postgres132 -v /home/<user>/docker-projects/originsw:/var/lib/postgresql/data -e POSTGRES_PASSWORD=123 -d postgres:13.2

CREATE DATABASE originswdb;

postgres#: \c originswdb;

originswdb#: \password; (clave: originsw123)

> cat /home/<user>/docker-backup/postgresdb.sql | docker exec -i originswdb -U postgres

postgresdb.sql  se encuentra en el proyecto api en la carpeta database_init en la raiz del proyecto

# Ejecutar el proyecto

npm install

# Crear el archivo .env 

con la siguiente información:

PORT = 3002
TOKEN_SECRET = j*******************o
URL_TWD = 'https://api.twelvedata.com'
API_KEY_TWD = cc****************a9
//DATA BASE CONFIG
USER_DB = postgres
HOST_DB = localhost
PASSWORD_DB = origin123
NAME_DB = originswdb
PORT_DB = 5432
DIALECT_DB = postgres

las claves se las proporciono via email. Ante cualquier inconveniente vuelvan a solicitarlas

npm start or
npm run dev (nodemon)
