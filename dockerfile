# syntax=docker/dockerfile:1
FROM node:16 AS build
WORKDIR /app
COPY package* ./
RUN npm install
COPY src ./src
COPY postcss.config.js ./postcss.config.js
COPY tailwind.config.js ./tailwind.config.js
COPY babel.config.js ./babel.config.js
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
