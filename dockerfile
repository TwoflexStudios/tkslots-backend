FROM node:alpine
RUN mkdir -p /usr/tkpcw/api
WORKDIR /usr/tkpcw/api
COPY package*.json ./
COPY ../monitor ./tk-monitor-module
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4443

CMD ["npm", "run", "production"]