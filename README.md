<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Ejecutar en desarrollo

1. Clonar el repo
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar base de datos
```
docker-compose up -d
```
5. Clonar el archivo __env.example__ y renombrar la copia a __.env__
6. Llenar las variables de entorno definidas en el archivo __.env__
7. Ejecutar la app en dev
```
yarn start:dev
```
8. Repoblar base de datos
```
http://localhost:3000/api/seed
```
## Stack usado
* MongoDB
* Nest