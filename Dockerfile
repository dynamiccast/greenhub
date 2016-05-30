FROM node:6.2-slim
MAINTAINER Olivier Berthonneau <berthonneau.olivier@gmail.com>

RUN npm install -g ember-cli bower sails pm2

COPY ./ /opt
WORKDIR /opt

RUN sh build.sh

EXPOSE 1337

CMD pm2 start app.js -- --prod && pm2 logs
