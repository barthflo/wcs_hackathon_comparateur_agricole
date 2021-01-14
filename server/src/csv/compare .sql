SET sql_mode = '';
SET GLOBAL time_zone = '+1:00';
SET FOREIGN_KEY_CHECKS = 0;
SET GROUP_CONCAT_MAX_LEN=32768;
SET @tables = NULL;
SELECT GROUP_CONCAT('`', table_name, '`') INTO @tables
  FROM information_schema.tables
  WHERE table_schema = (SELECT DATABASE());
SELECT IFNULL(@tables,'dummy') INTO @tables;
SET @tables = CONCAT('DROP TABLE IF EXISTS ', @tables);
PREPARE stmt FROM @tables;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
SET FOREIGN_KEY_CHECKS = 1;



CREATE TABLE `buyers` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `city_id` INT NOT NULL,
  `name` varchar(150) NOT NULL,
  `type` varchar(150) NOT NULL
);


CREATE TABLE `cities` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `zipcode` varchar(8) NOT NULL,
  `city` varchar(150) NOT NULL,
  `lat` varchar(150) NOT NULL,
  `long` varchar(150) NOT NULL,
   `insee_code` varchar(20) NOT NULL
);

CREATE TABLE `farmers` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `city_id` INT NULL,
  `registered_at` VARCHAR(255) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `farm_size` INT NOT NULL
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `category` varchar(150) NOT NULL
);

CREATE TABLE `transactions` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `farmer_id` INT NOT NULL,
  `buyer_id` INT NOT NULL,
  `created_at` VARCHAR(150),
  `price` INT NOT NULL,
  `quantity` INT NOT NULL
);


ALTER TABLE `buyers` ADD FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`);
​
ALTER TABLE `farmers` ADD FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`);
​
ALTER TABLE `transactions` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
​
ALTER TABLE `transactions` ADD FOREIGN KEY (`farmer_id`) REFERENCES `farmers` (`id`);
​
ALTER TABLE `transactions` ADD FOREIGN KEY (`buyer_id`) REFERENCES `buyers` (`id`);

