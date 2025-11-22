FROM node:alpine
RUN mkdir -p /usr/tkpcw/api
WORKDIR /usr/tkpcw/api
COPY package*.json ./
COPY tk-monitor-module ./tk-monitor-module
RUN cd tk-monitor-module && npm install && npm run build
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4443

CMD ["npm", "run", "production"]