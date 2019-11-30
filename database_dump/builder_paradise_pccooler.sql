CREATE DATABASE  IF NOT EXISTS `builder_paradise` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `builder_paradise`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: builder_paradise
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pccooler`
--

DROP TABLE IF EXISTS `pccooler`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pccooler` (
  `partNo` int(11) NOT NULL,
  `coolerType` varchar(10) NOT NULL,
  PRIMARY KEY (`partNo`),
  CONSTRAINT `pccooler_ibfk_1` FOREIGN KEY (`partNo`) REFERENCES `part` (`partNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pccooler`
--

LOCK TABLES `pccooler` WRITE;
/*!40000 ALTER TABLE `pccooler` DISABLE KEYS */;
INSERT INTO `pccooler` VALUES (10100,'Air'),(10101,'Liquid'),(10102,'Air'),(10103,'Liquid'),(10104,'Liquid'),(10105,'Air'),(10106,'Air'),(10107,'Liquid'),(10108,'Air'),(10109,'Liquid'),(10110,'Air'),(10111,'Liquid'),(10112,'Air'),(10113,'Liquid'),(10114,'Air'),(10115,'Liquid'),(10116,'Liquid'),(10117,'Liquid'),(10118,'Air'),(10119,'Liquid'),(10120,'Air'),(10121,'Liquid'),(10122,'Air'),(10123,'Liquid'),(10124,'Air'),(10125,'Air'),(10126,'Liquid'),(10127,'Air'),(10128,'Liquid'),(10129,'Air'),(10130,'Liquid'),(10131,'Liquid'),(10132,'Liquid'),(10133,'Air'),(10134,'Air'),(10135,'Air'),(10136,'Air'),(10137,'Air'),(10138,'Air'),(10139,'Liquid'),(10140,'Air'),(10141,'Liquid'),(10142,'Liquid'),(10143,'Air'),(10144,'Air'),(10145,'Air'),(10146,'Air'),(10147,'Liquid'),(10148,'Air'),(10149,'Air'),(10150,'Air'),(10151,'Liquid'),(10152,'Air'),(10153,'Liquid'),(10154,'Air'),(10155,'Liquid'),(10156,'Liquid'),(10157,'Air'),(10158,'Liquid'),(10159,'Liquid'),(10160,'Air'),(10161,'Air'),(10162,'Liquid'),(10163,'Air'),(10164,'Liquid'),(10165,'Air'),(10166,'Air'),(10167,'Liquid'),(10168,'Air'),(10169,'Air'),(10170,'Liquid'),(10171,'Air'),(10172,'Air'),(10173,'Liquid'),(10174,'Air'),(10175,'Liquid'),(10176,'Liquid'),(10177,'Air'),(10178,'Air'),(10179,'Air'),(10180,'Liquid'),(10181,'Air'),(10182,'Liquid'),(10183,'Air'),(10184,'Air'),(10185,'Air'),(10186,'Liquid'),(10187,'Air'),(10188,'Liquid'),(10189,'Air'),(10190,'Air'),(10191,'Liquid'),(10192,'Liquid'),(10193,'Liquid'),(10194,'Air'),(10195,'Liquid'),(10196,'Liquid'),(10197,'Air'),(10198,'Air'),(10199,'Air');
/*!40000 ALTER TABLE `pccooler` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-30 14:29:14
