FROM node AS build

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM httpd:latest

COPY --from=build /app/build /usr/local/apache2/htdocs/