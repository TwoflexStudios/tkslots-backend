FROM node:alpine

WORKDIR /usr/tkpcw/api

# 1. Copia apenas os manifests da API
COPY package.json yarn.lock ./

# 2. Copia o módulo local
COPY ./tk-monitor ./tk-monitor

# 3. Instala e builda o módulo com Yarn
RUN cd tk-monitor-module && yarn install

# 4. Instala dependências da API (incluindo tk-monitor via file:)
RUN yarn install

# 5. Copia o restante do código da API
COPY . .

# 6. Build da API
RUN yarn build

EXPOSE 4443
CMD ["yarn", "production"]
