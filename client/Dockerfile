FROM node:17-alpine3.14

WORKDIR /client

COPY package.json .

RUN npm install

COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD [ "npm", "start" ]