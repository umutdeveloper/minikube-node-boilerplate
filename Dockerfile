# Basic node image
FROM node:18

# Create workdir
WORKDIR /usr/src/app

# Copy package json into workdir
COPY package*.json ./
RUN npm install

# Copy source into workdir
COPY . .

# Run the server
CMD ["node", "app.js"]