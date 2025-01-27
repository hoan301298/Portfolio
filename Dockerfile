FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY client/package*.json client/
COPY server/package*.json server/
RUN npm run install --omit=dev

COPY client/ client/
COPY server/ server/

RUN npm run build --prefix client

# Copy the React build output to the server/public directory
RUN mkdir -p server/public && cp -r client/build/* server/public/

CMD [ "npm", "run", "server" ]

EXPOSE 8000