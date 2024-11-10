FROM node:22.11.0

WORKDIR /HyruleContainer

COPY ./package*.json .

COPY ./HyruleCastle ./HyruleCastle

RUN npm install