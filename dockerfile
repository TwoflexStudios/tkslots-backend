FROM node:alpine
RUN mkdir -p /usr/tkpcw/api
WORKDIR /usr/tkpcw/api
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4443

CMD ["npm", "run", "production"]