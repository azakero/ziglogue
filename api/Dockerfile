FROM node:17-alpine3.14

WORKDIR /app/api

COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . ./
ENV PORT 3001
EXPOSE $PORT
CMD [ "node", "server.js" ]