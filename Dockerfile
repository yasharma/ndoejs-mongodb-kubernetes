FROM node:10.16.3-alpine

LABEL authors="Yash sharma <yashsharma205@gmail.com>"

RUN mkdir /app
WORKDIR /app

COPY ["./package.json", "yarn.lock", "./"]
RUN yarn install

COPY src ./src

EXPOSE 80

CMD ["node", "src"]
