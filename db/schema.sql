DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the burgers table
CREATE TABLE burgers_db
(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR (30) NOT NULL,
  devoured  BOOLEAN DEFAULT FALSE,
  burger_time timestamp,
  PRIMARY KEY(id)
);