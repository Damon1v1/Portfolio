DROP DATABASE IF EXISTS portfolioDB;

CREATE DATABASE portfolioDB;

USE portfolioDB;

CREATE TABLE messages(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50),
    message VARCHAR(1000)
);