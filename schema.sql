DROP DATABASE IF EXISTS task_rewarder;

CREATE DATABASE task_rewarder;

USE task_rewarder;

CREATE TABLE `parent` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `userName` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `child` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `userName` varchar(255),
  `password` varchar(255),
  `wallet` int NULL,
  `parent_id` int NULL
);

CREATE TABLE `task` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `value` int,
  `aproved` boolean,
  `parent_id` int,
  `child_id` int NULL
);

CREATE TABLE `reward` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `value` int,
  `aproved` boolean,
  `parent_id` int,
  `child_id` int NULL
);

ALTER TABLE `child` ADD FOREIGN KEY (`parent_id`) REFERENCES `parent` (`id`);

ALTER TABLE `task` ADD FOREIGN KEY (`child_id`) REFERENCES `child` (`id`);

ALTER TABLE `task` ADD FOREIGN KEY (`parent_id`) REFERENCES `parent` (`id`);

ALTER TABLE `reward` ADD FOREIGN KEY (`child_id`) REFERENCES `child` (`id`);

ALTER TABLE `reward` ADD FOREIGN KEY (`parent_id`) REFERENCES `parent` (`id`);


INSERT INTO `parent` VALUES (1,'Melanie V.','code_mel','test'),(2,'Rosa V','queen','test');


INSERT INTO `task` VALUES (1,'Wash all cars in and out.',200,0,1,NULL),(2,'Write a short story. 3 Pages Min.',500,0,1,NULL),(3,'Be creative! Draw a nice picture and write a summary about it.',120,0,1,NULL),(4,'Make a full meal for the whole family',110,0,2,NULL),(5,'Make a full meal for the whole family',100,0,1,NULL),(6,'Do lawn work for backyard',200,0,2,NULL),(7,'Run 2 miles',50,0,2,NULL),(8,'Clean the van',60,0,2,NULL);
