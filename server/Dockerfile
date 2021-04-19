FROM node:12

RUN mkdir /codebase
WORKDIR /codebase

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000

CMD ["npm", "start"]