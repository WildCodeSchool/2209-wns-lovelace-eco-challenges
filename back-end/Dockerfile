FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

CMD npm run start:watch & npx nodemon --legacy-watch -w package.json --exec 'npm install'