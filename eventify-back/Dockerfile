FROM node:current-alpine

ENV NODE_ENV=dev

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

RUN npm install


CMD ["npm", "run", "start:dev"]
