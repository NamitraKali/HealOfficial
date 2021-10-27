# Setup node layer
FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm run build

# Setup load balancer layer
FROM nginx:alpine
COPY --from=build-step /app/build /usr/share/nginx/html