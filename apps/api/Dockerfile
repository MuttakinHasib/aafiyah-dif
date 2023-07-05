FROM node:lts-alpine as development

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .
RUN yarn build:api

FROM node:lts-alpine as production
ENV NODE_ENV=production

USER nodez
WORKDIR /app

COPY --from=development /app/dist/api ./
RUN yarn install --production

CMD [ "node","main" ]