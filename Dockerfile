FROM node:18-buster AS build
RUN mkdir -p /usr/src/next-nginx
WORKDIR /usr/src/next-nginx
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

#nginx
FROM nginx:1.21.0-alpine AS production
ENV NODE_ENV production
RUN rm -rf /usr/share/nginx/html/*
# workdir
WORKDIR /root/
# copy assets
COPY --from=build /usr/src/next-nginx/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# expose ports
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]