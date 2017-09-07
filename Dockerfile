FROM node:8.1-alpine
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/
RUN yarn install --registry=https://registry.npm.taobao.org
COPY . /usr/src/app
EXPOSE 8360
CMD [ "npm", "start" ]