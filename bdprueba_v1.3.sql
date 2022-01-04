-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bdprueba
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `tbcategory`
--

DROP TABLE IF EXISTS `tbcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbcategory` (
  `id_category` int NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbcategory`
--

LOCK TABLES `tbcategory` WRITE;
/*!40000 ALTER TABLE `tbcategory` DISABLE KEYS */;
INSERT INTO `tbcategory` VALUES (1,'Casa','A'),(2,'Comidas y bebidas','A'),(3,'Entretenimiento','A'),(4,'Transporte','A'),(5,'Servicios','A'),(6,'Vida','A'),(7,'Sin categoría','A');
/*!40000 ALTER TABLE `tbcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbfriendship`
--

DROP TABLE IF EXISTS `tbfriendship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbfriendship` (
  `id_friendship` int NOT NULL AUTO_INCREMENT,
  `id-user-one` int NOT NULL,
  `id-user-two` int NOT NULL,
  PRIMARY KEY (`id_friendship`),
  KEY `id-user-one` (`id-user-one`,`id-user-two`),
  KEY `id-user-two` (`id-user-two`),
  CONSTRAINT `fk-friendship-user-one` FOREIGN KEY (`id-user-one`) REFERENCES `tbusers` (`id_users`),
  CONSTRAINT `fk-friendship-user-two` FOREIGN KEY (`id-user-two`) REFERENCES `tbusers` (`id_users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbfriendship`
--

LOCK TABLES `tbfriendship` WRITE;
/*!40000 ALTER TABLE `tbfriendship` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbfriendship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbgroup`
--

DROP TABLE IF EXISTS `tbgroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbgroup` (
  `id_group` int NOT NULL AUTO_INCREMENT,
  `id_own` int NOT NULL,
  `group_name` varchar(45) NOT NULL,
  `group_create` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinytext,
  PRIMARY KEY (`id_group`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbgroup`
--

LOCK TABLES `tbgroup` WRITE;
/*!40000 ALTER TABLE `tbgroup` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbgroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbgroupmember`
--

DROP TABLE IF EXISTS `tbgroupmember`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbgroupmember` (
  `id_group_member` int NOT NULL AUTO_INCREMENT,
  `id_group` int NOT NULL,
  `id_user` int NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id_group_member`),
  KEY `fk-group-users_idx` (`id_user`),
  KEY `fk-member-group_idx` (`id_group`),
  CONSTRAINT `fk-member-group` FOREIGN KEY (`id_group`) REFERENCES `tbgroup` (`id_group`),
  CONSTRAINT `fk-member-users` FOREIGN KEY (`id_user`) REFERENCES `tbusers` (`id_users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbgroupmember`
--

LOCK TABLES `tbgroupmember` WRITE;
/*!40000 ALTER TABLE `tbgroupmember` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbgroupmember` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbmovement`
--

DROP TABLE IF EXISTS `tbmovement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbmovement` (
  `id_movement` int NOT NULL AUTO_INCREMENT,
  `Concept` varchar(45) DEFAULT NULL,
  `id_group` int DEFAULT NULL,
  `id_category` int DEFAULT NULL,
  `id_subcategory` int DEFAULT NULL,
  `date_move` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_movement`),
  KEY `fk_movement_category_idx` (`id_category`),
  KEY `fk_movement_group_idx` (`id_group`),
  KEY `fk_movement_subcategory_idx` (`id_subcategory`),
  CONSTRAINT `fk_movement_category` FOREIGN KEY (`id_category`) REFERENCES `tbcategory` (`id_category`),
  CONSTRAINT `fk_movement_group` FOREIGN KEY (`id_group`) REFERENCES `tbgroup` (`id_group`),
  CONSTRAINT `fk_movement_subcategory` FOREIGN KEY (`id_subcategory`) REFERENCES `tbsubcategory` (`id_subcategory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbmovement`
--

LOCK TABLES `tbmovement` WRITE;
/*!40000 ALTER TABLE `tbmovement` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbmovement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbmovementdetail`
--

DROP TABLE IF EXISTS `tbmovementdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbmovementdetail` (
  `id_movement` int NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `from` int NOT NULL,
  `to` int NOT NULL,
  PRIMARY KEY (`id_movement`),
  CONSTRAINT `fk_movement_detail_movement` FOREIGN KEY (`id_movement`) REFERENCES `tbmovement` (`id_movement`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbmovementdetail`
--

LOCK TABLES `tbmovementdetail` WRITE;
/*!40000 ALTER TABLE `tbmovementdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbmovementdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbsubcategory`
--

DROP TABLE IF EXISTS `tbsubcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbsubcategory` (
  `id_category` int NOT NULL,
  `id_subcategory` int NOT NULL AUTO_INCREMENT,
  `subcategory` varchar(45) NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id_subcategory`),
  KEY `fk-category-subcategory_idx` (`id_category`),
  CONSTRAINT `fk-category-subcategory` FOREIGN KEY (`id_category`) REFERENCES `tbcategory` (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbsubcategory`
--

LOCK TABLES `tbsubcategory` WRITE;
/*!40000 ALTER TABLE `tbsubcategory` DISABLE KEYS */;
INSERT INTO `tbsubcategory` VALUES (1,0,'Alquiler','A'),(1,1,'Electrónica','A'),(1,2,'Hipoteca','A'),(1,3,'Mantenimiento','A'),(1,4,'Mascotas','A'),(1,5,'Muebles','A'),(1,6,'Otro','A'),(1,7,'Suministros del hogar','A'),(2,8,'Alimentos','A'),(2,9,'Licor','A'),(2,10,'Restaurantes','A'),(2,11,'Otro','A'),(3,12,'Deportes','A'),(3,13,'Juegos','A'),(3,14,'Música','A'),(3,15,'Películas','A'),(3,16,'Otro','A'),(4,17,'Autobús/tres','A'),(4,18,'Avión','A'),(4,19,'Bicicleta','A'),(4,20,'Coche','A'),(4,21,'Estacionamiento','A'),(4,22,'Gasolina','A'),(4,23,'Hotel','A'),(4,24,'Taxi','A'),(4,25,'Otro','A'),(5,26,'Agua','A'),(5,27,'Basura','A'),(5,28,'Calefacción','A'),(5,29,'Electricidad','A'),(5,30,'Limpieza','A'),(5,31,'TV/Teléfono/Internet','A'),(5,32,'Otro','A'),(6,33,'Formación','A'),(6,34,'Gastos Médicos','A'),(6,35,'Guardería','A'),(6,36,'Impuestos','A'),(6,37,'Regalos','A'),(6,38,'Ropa','A'),(6,39,'Seguro','A'),(6,40,'Otro','A'),(7,41,'General','A');
/*!40000 ALTER TABLE `tbsubcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbusers`
--

DROP TABLE IF EXISTS `tbusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbusers` (
  `id_users` int NOT NULL AUTO_INCREMENT,
  `nombre` tinytext NOT NULL,
  `mail` varchar(30) NOT NULL,
  `user` varchar(30) DEFAULT NULL,
  `pass` varchar(20) NOT NULL,
  `date_register` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id_users`),
  UNIQUE KEY `correo_UNIQUE` (`mail`),
  UNIQUE KEY `user_UNIQUE` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbusers`
--

LOCK TABLES `tbusers` WRITE;
/*!40000 ALTER TABLE `tbusers` DISABLE KEYS */;
INSERT INTO `tbusers` VALUES (1,'Brandon','prueba@gmail.com','brandon','1234','2021-12-08 07:00:00','A'),(2,'Orlando','orlando@gmail.com','orlando','1234','2021-12-08 07:00:00','A'),(3,'Saulo','saulo@gmail.com','saulo','1234','2021-12-08 07:00:00','A'),(4,'Ramon','ramon@gmail.com','ramon','1234','2021-12-08 07:00:00','A'),(5,'Diego','diego@gmail.com','diego','1234','2021-12-08 07:00:00','A');
/*!40000 ALTER TABLE `tbusers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-02  5:56:24
