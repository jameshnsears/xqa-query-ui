FROM nginx:1.15.8

COPY dist /usr/share/nginx/html

EXPOSE 80
