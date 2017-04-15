/* DROP DB: mysqladmin -u root -p drop chat; */
drop database if exists `chat`;
CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  userID INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(255),
  PRIMARY KEY (userID)
);

CREATE TABLE rooms (
  roomID INTEGER NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(255),
  PRIMARY KEY (roomID)
);

CREATE TABLE messages (
  messageID INTEGER NOT NULL AUTO_INCREMENT,
  room INTEGER NOT NULL,
  user INTEGER NOT NULL,
  message VARCHAR(255),
  PRIMARY KEY (messageID),
  FOREIGN KEY(room) REFERENCES rooms(roomID),
  FOREIGN KEY(user) REFERENCES users(userID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

