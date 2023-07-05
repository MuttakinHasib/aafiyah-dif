FROM node:lts-alpine as development

WORKDIR /app

COPY package.json .
RUN yarn install

COPY . .
RUN yarn build:web

FROM node:lts-alpine as production
ENV NODE_ENV=production

USER node
WORKDIR /app

COPY --from=development /app/dist/apps/web ./
RUN yarn install --production

CMD ["next", "start"]