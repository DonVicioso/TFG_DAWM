FROM mysql:latest

WORKDIR /app

ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=sample_db
ENV MYSQL_USER=db_user
ENV MYSQL_PASSWORD=db_password
VOLUME /var/lib/mysql

CMD ["mysqld"]
