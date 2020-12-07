FROM node:latest
MAINTAINER DAE HWI

WORKDIR /app

RUN apt-get update
RUN apt-get upgrade -y

COPY server.js server.js

RUN npm install

EXPOSE 3001

CMD ["node","server.js"] 