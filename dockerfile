FROM node:8.9.3-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install
COPY . .
