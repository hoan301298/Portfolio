FROM node:lts-alpine

WORKDIR /app

# Copy package.json separately for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire server source code
COPY . .

EXPOSE 8000

CMD ["npm", "start"]
