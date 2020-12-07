FROM node:latest
MAINTAINER DAE HWI

WORKDIR /app

RUN apt-get update
RUN apt-get upgrade -y

COPY .

RUN npm install

EXPOSE 3000

CMD ["npm","start"] 