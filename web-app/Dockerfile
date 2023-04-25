FROM node:16-alpine as base

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . ./

FROM base as build
COPY src ./src 
RUN yarn run build

FROM base as dev
CMD yarn dev

FROM build as ci
CMD yarn run test

FROM build as prod
RUN yarn run start