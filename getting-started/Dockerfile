FROM node:18-alpine3.14
WORKDIR /usr/src/app
COPY package* ./
RUN npm ci
COPY . .
CMD ["npm", "start"]