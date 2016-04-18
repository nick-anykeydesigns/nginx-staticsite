FROM nginx
COPY mime.types /etc/nginx/mime.types
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html