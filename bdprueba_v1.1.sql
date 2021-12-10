-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-12-2021 a las 19:30:55
-- Versión del servidor: 8.0.27
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdprueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb-category`
--

DROP TABLE IF EXISTS `tb-category`;
CREATE TABLE IF NOT EXISTS `tb-category` (
  `id-category` int NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id-category`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';

--
-- Volcado de datos para la tabla `tb-category`
--

INSERT INTO `tb-category` (`id-category`, `category`, `status`) VALUES
(1, 'Casa', 'A'),
(2, 'Comidas y bebidas', 'A'),
(3, 'Entretenimiento', 'A'),
(4, 'Transporte', 'A'),
(5, 'Servicios', 'A'),
(6, 'Vida', 'A'),
(7, 'Sin categoría', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb-friendship`
--

DROP TABLE IF EXISTS `tb-friendship`;
CREATE TABLE IF NOT EXISTS `tb-friendship` (
  `id-friendship` int NOT NULL AUTO_INCREMENT,
  `id-user-one` int NOT NULL,
  `id-user-two` int NOT NULL,
  PRIMARY KEY (`id-friendship`),
  KEY `id-user-one` (`id-user-one`,`id-user-two`),
  KEY `id-user-two` (`id-user-two`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb-group`
--

DROP TABLE IF EXISTS `tb-group`;
CREATE TABLE IF NOT EXISTS `tb-group` (
  `id-group` int NOT NULL AUTO_INCREMENT,
  `id-own` int NOT NULL,
  `group-name` varchar(45) NOT NULL,
  `group-create` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinytext,
  PRIMARY KEY (`id-group`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb-group-member`
--

DROP TABLE IF EXISTS `tb-group-member`;
CREATE TABLE IF NOT EXISTS `tb-group-member` (
  `id-group-member` int NOT NULL AUTO_INCREMENT,
  `id-group` int NOT NULL,
  `id-user` int NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id-group-member`),
  KEY `fk-group-users_idx` (`id-user`),
  KEY `fk-member-group_idx` (`id-group`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb-movement`
--

DROP TABLE IF EXISTS `tb-movement`;
CREATE TABLE IF NOT EXISTS `tb-movement` (
  `id-movement` int NOT NULL AUTO_INCREMENT,
  `id-who` int NOT NULL,
  `id-origin` int DEFAULT NULL,
  `id-dest` int DEFAULT NULL,
  `id-group` int DEFAULT NULL,
  `amount` decimal(10,0) DEFAULT NULL,
  `executed` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `id-movement-type` int NOT NULL,
  `id-category` int DEFAULT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id-movement`),
  KEY `fk-movement-users_idx` (`id-who`),
  KEY `fk-movement-users-origin_idx` (`id-origin`),
  KEY `fk-movement-users-dest_idx` (`id-dest`),
  KEY `fk-movement-group_idx` (`id-group`),
  KEY `fk-movement-category_idx` (`id-category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb-movement-type`
--

DROP TABLE IF EXISTS `tb-movement-type`;
CREATE TABLE IF NOT EXISTS `tb-movement-type` (
  `id-movement-type` int NOT NULL AUTO_INCREMENT,
  `movement-type` varchar(45) NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id-movement-type`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tb-movement-type`
--

INSERT INTO `tb-movement-type` (`id-movement-type`, `movement-type`, `status`) VALUES
(1, 'Añadir persona a grupo', 'A'),
(2, 'Añadir amigo', 'A'),
(3, 'Añadir grupo', 'A'),
(4, 'Añadir gasto', 'A'),
(5, 'Registrar pago a mi cuenta', 'A'),
(6, 'Registrar pago a otras cuentas', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb-subcategory`
--

DROP TABLE IF EXISTS `tb-subcategory`;
CREATE TABLE IF NOT EXISTS `tb-subcategory` (
  `id-category` int NOT NULL,
  `id-subcategory` int NOT NULL AUTO_INCREMENT,
  `subcategory` varchar(45) NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id-subcategory`),
  KEY `fk-category-subcategory_idx` (`id-category`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tb-subcategory`
--

INSERT INTO `tb-subcategory` (`id-category`, `id-subcategory`, `subcategory`, `status`) VALUES
(1, 0, 'Alquiler', 'A'),
(1, 1, 'Electrónica', 'A'),
(1, 2, 'Hipoteca', 'A'),
(1, 3, 'Mantenimiento', 'A'),
(1, 4, 'Mascotas', 'A'),
(1, 5, 'Muebles', 'A'),
(1, 6, 'Otro', 'A'),
(1, 7, 'Suministros del hogar', 'A'),
(2, 8, 'Alimentos', 'A'),
(2, 9, 'Licor', 'A'),
(2, 10, 'Restaurantes', 'A'),
(2, 11, 'Otro', 'A'),
(3, 12, 'Deportes', 'A'),
(3, 13, 'Juegos', 'A'),
(3, 14, 'Música', 'A'),
(3, 15, 'Películas', 'A'),
(3, 16, 'Otro', 'A'),
(4, 17, 'Autobús/tres', 'A'),
(4, 18, 'Avión', 'A'),
(4, 19, 'Bicicleta', 'A'),
(4, 20, 'Coche', 'A'),
(4, 21, 'Estacionamiento', 'A'),
(4, 22, 'Gasolina', 'A'),
(4, 23, 'Hotel', 'A'),
(4, 24, 'Taxi', 'A'),
(4, 25, 'Otro', 'A'),
(5, 26, 'Agua', 'A'),
(5, 27, 'Basura', 'A'),
(5, 28, 'Calefacción', 'A'),
(5, 29, 'Electricidad', 'A'),
(5, 30, 'Limpieza', 'A'),
(5, 31, 'TV/Teléfono/Internet', 'A'),
(5, 32, 'Otro', 'A'),
(6, 33, 'Formación', 'A'),
(6, 34, 'Gastos Médicos', 'A'),
(6, 35, 'Guardería', 'A'),
(6, 36, 'Impuestos', 'A'),
(6, 37, 'Regalos', 'A'),
(6, 38, 'Ropa', 'A'),
(6, 39, 'Seguro', 'A'),
(6, 40, 'Otro', 'A'),
(7, 41, 'General', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb-users`
--

DROP TABLE IF EXISTS `tb-users`;
CREATE TABLE IF NOT EXISTS `tb-users` (
  `id-users` int NOT NULL AUTO_INCREMENT,
  `nombre` tinytext NOT NULL,
  `mail` varchar(30) NOT NULL,
  `user` varchar(30) DEFAULT NULL,
  `pass` varchar(20) NOT NULL,
  `date-register` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id-users`),
  UNIQUE KEY `correo_UNIQUE` (`mail`),
  UNIQUE KEY `user_UNIQUE` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tb-users`
--

INSERT INTO `tb-users` (`id-users`, `nombre`, `mail`, `user`, `pass`, `date-register`, `status`) VALUES
(1, 'Brandon', 'prueba@gmail.com', 'brandon', '1234', '2021-12-08 07:00:00', 'A'),
(2, 'Orlando', 'orlando@gmail.com', 'orlando', '1234', '2021-12-08 07:00:00', 'A'),
(3, 'Saulo', 'saulo@gmail.com', 'saulo', '1234', '2021-12-08 07:00:00', 'A'),
(4, 'Ramon', 'ramon@gmail.com', 'ramon', '1234', '2021-12-08 07:00:00', 'A'),
(5, 'Diego', 'diego@gmail.com', 'diego', '1234', '2021-12-08 07:00:00', 'A');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tb-friendship`
--
ALTER TABLE `tb-friendship`
  ADD CONSTRAINT `fk-friendship-user-one` FOREIGN KEY (`id-user-one`) REFERENCES `tb-users` (`id-users`),
  ADD CONSTRAINT `fk-friendship-user-two` FOREIGN KEY (`id-user-two`) REFERENCES `tb-users` (`id-users`);

--
-- Filtros para la tabla `tb-group-member`
--
ALTER TABLE `tb-group-member`
  ADD CONSTRAINT `fk-member-group` FOREIGN KEY (`id-group`) REFERENCES `tb-group` (`id-group`),
  ADD CONSTRAINT `fk-member-users` FOREIGN KEY (`id-user`) REFERENCES `tb-users` (`id-users`);

--
-- Filtros para la tabla `tb-movement`
--
ALTER TABLE `tb-movement`
  ADD CONSTRAINT `fk-movement-category` FOREIGN KEY (`id-category`) REFERENCES `tb-category` (`id-category`),
  ADD CONSTRAINT `fk-movement-group` FOREIGN KEY (`id-group`) REFERENCES `tb-group` (`id-group`),
  ADD CONSTRAINT `fk-movement-type-movement` FOREIGN KEY (`id-movement`) REFERENCES `tb-movement-type` (`id-movement-type`),
  ADD CONSTRAINT `fk-movement-users` FOREIGN KEY (`id-who`) REFERENCES `tb-users` (`id-users`),
  ADD CONSTRAINT `fk-movement-users-dest` FOREIGN KEY (`id-dest`) REFERENCES `tb-users` (`id-users`),
  ADD CONSTRAINT `fk-movement-users-origin` FOREIGN KEY (`id-origin`) REFERENCES `tb-users` (`id-users`);

--
-- Filtros para la tabla `tb-subcategory`
--
ALTER TABLE `tb-subcategory`
  ADD CONSTRAINT `fk-category-subcategory` FOREIGN KEY (`id-category`) REFERENCES `tb-category` (`id-category`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
