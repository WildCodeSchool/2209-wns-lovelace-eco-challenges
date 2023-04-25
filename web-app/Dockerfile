FROM node:16 as base

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . ./

FROM base as build
COPY src ./src
RUN yarn run build

FROM base as dev
CMD yarn run dev & npx nodemon -w package.json --exec 'npm install'

FROM build as ci
CMD yarn run test

FROM build as prod
CMD yarn run start