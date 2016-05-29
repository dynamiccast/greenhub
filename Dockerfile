FROM node:6.2
MAINTAINER Olivier Berthonneau <berthonneau.olivier@gmail.com>

RUN npm install -g ember-cli bower sails pm2

COPY ./ /opt
WORKDIR /opt

RUN npm install && \
    cd front && \
    npm install && \
    bower install --allow-root

RUN cd front &&  ember build --environment=production --output-path=../assets/

EXPOSE 1337

CMD pm2 start app.js -- --prod && pm2 logs
