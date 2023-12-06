FROM node:lts as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=prod --omit=dev
COPY . /app
RUN npm run build
