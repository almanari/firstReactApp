FROM node:alpine as builder

WORKDIR /frontend

COPY ./package.json .
EXPOSE 3000
RUN npm install
COPY . .
CMD [ "npm", "run", "start" ]