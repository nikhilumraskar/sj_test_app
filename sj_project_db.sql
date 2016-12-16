-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2016 at 12:28 PM
-- Server version: 5.5.32
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `sj_project_db`
--
CREATE DATABASE IF NOT EXISTS `sj_project_db` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sj_project_db`;

-- --------------------------------------------------------

--
-- Table structure for table `contact_us_table`
--

CREATE TABLE IF NOT EXISTS `contact_us_table` (
  `contact_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `title` varchar(20) DEFAULT NULL,
  `query_text` varchar(50) DEFAULT NULL,
  `reply_flag` int(11) DEFAULT NULL,
  `reply_text` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`contact_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `contact_us_table`
--

INSERT INTO `contact_us_table` (`contact_id`, `user_id`, `title`, `query_text`, `reply_flag`, `reply_text`) VALUES
(1, 5, 'ff', 'f', 1, 'good'),
(3, 5, 'ascdas', 'cdavcdsvvv', 1, 'dd'),
(4, 4, 'gog', 'y but', 1, 'asd test'),
(5, 5, 'final test', 'finally done', 1, 'well done'),
(6, 4, 'final test', 'does it wok', 1, 'well done'),
(7, 4, 'chekc aa', 'sdfgh', 1, 'ok');

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE IF NOT EXISTS `content` (
  `content_id` int(11) NOT NULL AUTO_INCREMENT,
  `content_title` varchar(20) NOT NULL,
  `schedule_date` varchar(10) NOT NULL,
  `content_page_1` varchar(500) NOT NULL,
  `content_page_2` varchar(500) NOT NULL,
  `content_page_3` varchar(500) NOT NULL,
  PRIMARY KEY (`content_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`content_id`, `content_title`, `schedule_date`, `content_page_1`, `content_page_2`, `content_page_3`) VALUES
(2, 'My Bike', '2016-09-05', 'I still remember the day when I got my first bicycle. I got it when I was seven years old.', 'It was a four-wheel cycle. It was pink in colour. There was a beautiful picture of Barbie on my cycle seat. Every day morning I would ride my cycle . I loved to ring the bell whenever I saw people coming near my cycle.', 'My cycle had a basket in the front. I always kept my favourite teddy bear in the basket. Afterwards my father removed the side wheels. I was very scared to ride the cycle without side wheels. Suddenly, one day I put both my legs on the pedals and rode.'),
(3, 'My Pet', '2016-09-01', 'I am fond of pets. I have a pet dog. I call it Jim. It is two years old. It is very beautiful to look at. It is smart and active. It runs at an incredible speed. Its body is covered with a soft fur. It has a small tail and long ears.\nI have in it a loving and faithful companion. It accompanies me when I go out for a walk. It begins to wag its tail when it sees me. It licks my feet. I like to play with it. I throw a ball[edit]', 'It runs after it and brings it back holding it in its mouth. It can swim. It answers to its name. It is very intelligent. It carries my messages to my friends. It runs after cats and barks at strangers and other dogs. It plays with small children and seems to like their company.\nAt times, I go hunting. It goes with me. It helps me track the game.', 'It runs after hares, foxes, jackals and other small animals and overtakes them. At night, it guards the house. It is very sensitive to sound. At the slightest sound, it gets startled and begins to bark. A thief dare not come near our house. It has a very strong instinct.[edit]'),
(5, 'My hobbies', '2016-09-01', 'My hobby is reading. I read story books, magazines, newspapers and any kind of material that I find interesting.\nThis hobby got started when I was a little boy. I had always wanted my parents to read fairy tales and other stories to me. Soon they got fed up and tired of having to read to me continually. So as soon as I could, I learned to read', 'I started with simple ABC books. Soon I could read simple fairy tales and other stories. Now I read just about anything that is available.\n\nReading enables me to learn about so many things that I would otherwise not know. I learned about how people lived in bygone days of magic and mystery.', 'The wonderful thing about reading is that I do not have to learn things the hard way. For example, I do not have to catch a disease to know that it can kill me. I know the danger so I can avoid it. Also I do not have to go deep into the jungle to learn about the tiger. I can read all about it in a book.');

-- --------------------------------------------------------

--
-- Table structure for table `content_comments`
--

CREATE TABLE IF NOT EXISTS `content_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment_text` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `content_id` (`content_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=41 ;

--
-- Dumping data for table `content_comments`
--

INSERT INTO `content_comments` (`id`, `content_id`, `user_id`, `comment_text`) VALUES
(7, 5, 1, 'c1'),
(8, 5, 1, 'ss'),
(9, 5, 1, 'wert'),
(32, 3, 5, 'on 2'),
(33, 3, 2, 'nice'),
(34, 3, 2, 'final'),
(35, 3, 4, 'nikhil'),
(36, 3, 2, 'caaptcha'),
(37, 3, 2, 'der'),
(38, 3, 2, 'gg'),
(39, 3, 4, 'nn'),
(40, 2, 1, 'ok');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `user_role` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `user_role`) VALUES
(1, 'admin', 'admin', 'admin'),
(2, 'anonymous', '', 'anonymous'),
(4, 'nikhil', 'nikhil', 'user'),
(5, 'tony', 'tony', 'user'),
(6, 'test', 'test', 'user');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contact_us_table`
--
ALTER TABLE `contact_us_table`
  ADD CONSTRAINT `contact_us_table_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `content_comments`
--
ALTER TABLE `content_comments`
  ADD CONSTRAINT `content_comments_ibfk_1` FOREIGN KEY (`content_id`) REFERENCES `content` (`content_id`),
  ADD CONSTRAINT `content_comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
