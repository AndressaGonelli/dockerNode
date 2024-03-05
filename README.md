# Desafio Docker - Node da Full Cycle

Este é projeto do Desafio Docker - Node da Full Cycle

## Para rodar o projeto
``` bash
docker-compose up -d
```
## Para rodar e reconstruir as imagens
``` bash
docker-compose -f ./docker-compose-dev.yaml up --build 
./hello
```

## Para subir as imagens geradas para o docker hub
``` bash
docker push andressagonelli/app-node
docker push andressagonelli/nginx-node
```