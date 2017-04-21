FROM node:6
MAINTAINER Roman Akash <roman.akash@yahoo.com>

RUN mkdir -p /api
COPY . /api
WORKDIR /api
RUN npm install --production

CMD ["npm", "start"]
