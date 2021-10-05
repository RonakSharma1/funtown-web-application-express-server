FROM node:alpine

LABEL version="1.0"
LABEL description="This is the base docker image for front-end of funtown applicaion."
LABEL maintainer = ["rsharma29230@gmail.com"]

WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .

CMD ["npm","run","start"]
