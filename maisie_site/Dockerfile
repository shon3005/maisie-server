# Do the npm install or yarn install in the full image
# FROM mhart/alpine-node AS builder
# WORKDIR /app
# COPY ./package.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# RUN npm run export

# FROM nginx
# EXPOSE 3000
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/out /usr/share/nginx/html

FROM mhart/alpine-node AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM mhart/alpine-node:base
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node_modules/.bin/next", "start"]
# CMD ["npm", "start"]