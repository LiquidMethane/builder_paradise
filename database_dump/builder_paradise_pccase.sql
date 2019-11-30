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
-- Table structure for table `pccase`
--

DROP TABLE IF EXISTS `pccase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pccase` (
  `partNo` int(11) NOT NULL,
  `caseType` varchar(30) NOT NULL,
  `sidePanel` varchar(3) NOT NULL,
  PRIMARY KEY (`partNo`),
  CONSTRAINT `pccase_ibfk_1` FOREIGN KEY (`partNo`) REFERENCES `part` (`partNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pccase`
--

LOCK TABLES `pccase` WRITE;
/*!40000 ALTER TABLE `pccase` DISABLE KEYS */;
INSERT INTO `pccase` VALUES (10700,'ATX Mid Tower','Yes'),(10701,'MicroATX Mini Tower','Yes'),(10702,'ATX Mid Tower','Yes'),(10703,'ATX Mid Tower','Yes'),(10704,'ATX Mid Tower','Yes'),(10705,'ATX Mid Tower','Yes'),(10706,'ATX Mid Tower','Yes'),(10707,'ATX Mid Tower','Yes'),(10708,'ATX Mid Tower','Yes'),(10709,'ATX Mid Tower','Yes'),(10710,'ATX Mid Tower','Yes'),(10711,'ATX Mid Tower','Yes'),(10712,'ATX Full Tower','Yes'),(10713,'ATX Mid Tower','Yes'),(10714,'ATX Mid Tower','Yes'),(10715,'MicroATX Mid Tower','No'),(10716,'ATX Mid Tower','Yes'),(10717,'ATX Mid Tower','No'),(10718,'ATX Full Tower','Yes'),(10719,'ATX Mid Tower','Yes'),(10720,'ATX Full Tower','Yes'),(10721,'ATX Mid Tower','Yes'),(10722,'ATX Mid Tower','Yes'),(10723,'ATX Mid Tower','Yes'),(10724,'ATX Mid Tower','Yes'),(10725,'Mini ITX Tower','Yes'),(10726,'ATX Mid Tower','Yes'),(10727,'MicroATX Mini Tower','Yes'),(10728,'ATX Mid Tower','Yes'),(10729,'ATX Full Tower','Yes'),(10730,'ATX Mid Tower','Yes'),(10731,'MicroATX Mini Tower','No'),(10732,'ATX Full Tower','Yes'),(10733,'ATX Full Tower','Yes'),(10734,'MicroATX Mini Tower','No'),(10735,'MicroATX Mini Tower','Yes'),(10736,'ATX Mid Tower','Yes'),(10737,'Mini ITX Tower','Yes'),(10738,'MicroATX Mini Tower','Yes'),(10739,'ATX Mid Tower','Yes'),(10740,'ATX Mid Tower','Yes'),(10741,'ATX Mid Tower','Yes'),(10742,'ATX Mid Tower','Yes'),(10743,'ATX Mid Tower','Yes'),(10744,'MicroATX Mini Tower','Yes'),(10745,'ATX Mid Tower','Yes'),(10746,'ATX Full Tower','Yes'),(10747,'ATX Mid Tower','Yes'),(10748,'ATX Mid Tower','Yes'),(10749,'ATX Mid Tower','Yes'),(10750,'ATX Mid Tower','Yes'),(10751,'MicroATX Mini Tower','Yes'),(10752,'ATX Mid Tower','Yes'),(10753,'MicroATX Mini Tower','No'),(10754,'ATX Mid Tower','Yes'),(10755,'MicroATX Mini Tower','Yes'),(10756,'MicroATX Mini Tower','No'),(10757,'ATX Mid Tower','Yes'),(10758,'ATX Mid Tower','Yes'),(10759,'ATX Mid Tower','Yes'),(10760,'Mini ITX Tower','Yes'),(10761,'ATX Mid Tower','Yes'),(10762,'ATX Mid Tower','Yes'),(10763,'ATX Mid Tower','Yes'),(10764,'ATX Mid Tower','No'),(10765,'Mini ITX Tower','No'),(10766,'ATX Mid Tower','Yes'),(10767,'ATX Mid Tower','Yes'),(10768,'ATX Mid Tower','Yes'),(10769,'ATX Mid Tower','Yes'),(10770,'ATX Mid Tower','Yes'),(10771,'ATX Mid Tower','Yes'),(10772,'ATX Mid Tower','Yes'),(10773,'MicroATX Mid Tower','Yes'),(10774,'MicroATX Mini Tower','Yes'),(10775,'ATX Mid Tower','Yes'),(10776,'ATX Mid Tower','Yes'),(10777,'ATX Mid Tower','Yes'),(10778,'ATX Full Tower','Yes'),(10779,'ATX Full Tower','Yes'),(10780,'ATX Mid Tower','Yes'),(10781,'ATX Mid Tower','No'),(10782,'ATX Mid Tower','Yes'),(10783,'ATX Mid Tower','Yes'),(10784,'MicroATX Mid Tower','Yes'),(10785,'Mini ITX Tower','Yes'),(10786,'ATX Full Tower','Yes'),(10787,'MicroATX Mini Tower','No'),(10788,'ATX Mid Tower','Yes'),(10789,'Mini ITX Tower','No'),(10790,'Mini ITX Tower','No'),(10791,'ATX Mid Tower','Yes'),(10792,'ATX Mid Tower','Yes'),(10793,'ATX Mid Tower','Yes'),(10794,'MicroATX Mini Tower','No'),(10795,'ATX Mid Tower','Yes'),(10796,'ATX Mid Tower','No'),(10797,'Mini ITX Tower','No'),(10798,'ATX Mid Tower','Yes'),(10799,'ATX Mid Tower','Yes');
/*!40000 ALTER TABLE `pccase` ENABLE KEYS */;
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
