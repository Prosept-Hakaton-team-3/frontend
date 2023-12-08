FROM node:lts as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=prod --omit=dev
COPY . ./
CMD npm run build
