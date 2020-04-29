DROP DATABASE IF EXISTS thenetblogz;

CREATE DATABASE thenetblogz;
USE thenetblogz

CREATE TABLE 'blogs' (
    `id` Int(11) AUTO_INCREMENT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `body` VARCHAR(800) NOT NULL,
    `created at` DATETIME NOT NULL,

    PRIMARY KEY (`id`)
)