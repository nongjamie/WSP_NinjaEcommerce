FROM node:8.12-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .