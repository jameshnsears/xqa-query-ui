FROM nginx:1.12.2-alpine

MAINTAINER james.hn.sears@gmail.com

COPY dist /usr/share/nginx/html

EXPOSE 80
