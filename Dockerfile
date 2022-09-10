FROM node:16 as builder

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
RUN yarn 
COPY . .
RUN yarn build

FROM nginx:1.23.1

WORKDIR /app

COPY  --from=builder /app/dist/ ./static/.
COPY ./nginx.conf /etc/nginx/nginx.conf
