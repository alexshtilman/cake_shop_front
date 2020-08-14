#Pull latest official node image
FROM node:14.8.0-alpine3.10

# Expose ports
EXPOSE 3000

# Set working directory
WORKDIR /app

# Add /app/node_modules/.bin to environment variables
ENV PATH /app/node_modules/.bin:$PATH

# Copy package files and install app dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install
#RUN npm install react-scripts@3.4.3 -g --silent

# Add React app to working directory
ADD . /app

# Start the React app
CMD ["yarn", "start"]
