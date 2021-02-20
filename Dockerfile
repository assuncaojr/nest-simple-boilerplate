FROM node:12.16-alpine

ENV HOME=/home/app

WORKDIR $HOME/

COPY package.json yarn.lock ./

RUN yarn && yarn cache clean

COPY . ./

RUN yarn build

EXPOSE 6791

CMD ["yarn", "start:dev"]
