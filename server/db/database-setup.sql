DROP DATABASE IF EXISTS test_app;

DROP USER IF EXISTS test_app_user;

CREATE USER test_app_user WITH ENCRYPTED PASSWORD 'password';

CREATE DATABASE test_app WITH OWNER 'test_app_user';