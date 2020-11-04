FROM node:15.0.1-stretch AS builder
WORKDIR /app
ADD package*.json ./
RUN yarn add react-scripts
RUN yarn run build
COPY . .

FROM node:15.0.1-stretch
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
