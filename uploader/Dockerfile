FROM node:16 as base

WORKDIR /app

COPY package*.json ./
RUN npm install

# RUN mkdir /app/uploads

COPY . ./

FROM base as dev
CMD npm run start:watch & npx nodemon -w package.json --exec 'npm install'

FROM base as ci
CMD npm run build

FROM base as prod
CMD npm run build && npm run start