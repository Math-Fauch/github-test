FROM node:24.4

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "src/main.ts"]