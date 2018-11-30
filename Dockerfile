FROM node:8.9.0

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .