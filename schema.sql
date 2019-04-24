DROP DATABASE IF EXISTS tast_rewarder;

CREATE DATABASE tast_rewarder;

USE tast_rewarder;

CREATE TABLE `parent`
(
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `userName` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `child`
(
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `userName` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `parentsChildren`
(
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `parent_id` int,
  `chid_id` int
);

CREATE TABLE `task`
(
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `value` int,
  `aproved` boolean,
  `parent_id` int,
  `chid_id` int NULL
);

CREATE TABLE `reward`
(
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `value` int,
  `aproved` boolean,
  `parent_id` int,
  `chid_id` int NULL
);

ALTER TABLE `parentsChildren` ADD FOREIGN KEY (`chid_id`) REFERENCES `child` (`id`);

ALTER TABLE `parentsChildren` ADD FOREIGN KEY (`parent_id`) REFERENCES `parent` (`id`);

ALTER TABLE `task` ADD FOREIGN KEY (`chid_id`) REFERENCES `child` (`id`);

ALTER TABLE `task` ADD FOREIGN KEY (`parent_id`) REFERENCES `parent` (`id`);

ALTER TABLE `reward` ADD FOREIGN KEY (`chid_id`) REFERENCES `child` (`id`);

ALTER TABLE `reward` ADD FOREIGN KEY (`parent_id`) REFERENCES `parent` (`id`);