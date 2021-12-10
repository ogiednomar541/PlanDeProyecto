-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-12-2021 a las 20:43:53
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
-- Estructura de tabla para la tabla `tbcategory`
--

DROP TABLE IF EXISTS `tbcategory`;
CREATE TABLE IF NOT EXISTS `tbcategory` (
  `id-category` int NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id-category`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';

--
-- Volcado de datos para la tabla `tbcategory`
--

INSERT INTO `tbcategory` (`id-category`, `category`, `status`) VALUES
(1, 'Casa', 'A'),
(2, 'Comidas y bebidas', 'A'),
(3, 'Entretenimiento', 'A'),
(4, 'Transporte', 'A'),
(5, 'Servicios', 'A'),
(6, 'Vida', 'A'),
(7, 'Sin categoría', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbfriendship`
--

DROP TABLE IF EXISTS `tbfriendship`;
CREATE TABLE IF NOT EXISTS `tbfriendship` (
  `id-friendship` int NOT NULL AUTO_INCREMENT,
  `id-user-one` int NOT NULL,
  `id-user-two` int NOT NULL,
  PRIMARY KEY (`id-friendship`),
  KEY `id-user-one` (`id-user-one`,`id-user-two`),
  KEY `id-user-two` (`id-user-two`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbgroup`
--

DROP TABLE IF EXISTS `tbgroup`;
CREATE TABLE IF NOT EXISTS `tbgroup` (
  `id-group` int NOT NULL AUTO_INCREMENT,
  `id-own` int NOT NULL,
  `group-name` varchar(45) NOT NULL,
  `group-create` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinytext,
  PRIMARY KEY (`id-group`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbgroupmember`
--

DROP TABLE IF EXISTS `tbgroupmember`;
CREATE TABLE IF NOT EXISTS `tbgroupmember` (
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
-- Estructura de tabla para la tabla `tbsubcategory`
--

DROP TABLE IF EXISTS `tbsubcategory`;
CREATE TABLE IF NOT EXISTS `tbsubcategory` (
  `id-category` int NOT NULL,
  `id-subcategory` int NOT NULL AUTO_INCREMENT,
  `subcategory` varchar(45) NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id-subcategory`),
  KEY `fk-category-subcategory_idx` (`id-category`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tbsubcategory`
--

INSERT INTO `tbsubcategory` (`id-category`, `id-subcategory`, `subcategory`, `status`) VALUES
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
-- Estructura de tabla para la tabla `tbusers`
--

DROP TABLE IF EXISTS `tbusers`;
CREATE TABLE IF NOT EXISTS `tbusers` (
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
-- Volcado de datos para la tabla `tbusers`
--

INSERT INTO `tbusers` (`id-users`, `nombre`, `mail`, `user`, `pass`, `date-register`, `status`) VALUES
(1, 'Brandon', 'prueba@gmail.com', 'brandon', '1234', '2021-12-08 07:00:00', 'A'),
(2, 'Orlando', 'orlando@gmail.com', 'orlando', '1234', '2021-12-08 07:00:00', 'A'),
(3, 'Saulo', 'saulo@gmail.com', 'saulo', '1234', '2021-12-08 07:00:00', 'A'),
(4, 'Ramon', 'ramon@gmail.com', 'ramon', '1234', '2021-12-08 07:00:00', 'A'),
(5, 'Diego', 'diego@gmail.com', 'diego', '1234', '2021-12-08 07:00:00', 'A');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbfriendship`
--
ALTER TABLE `tbfriendship`
  ADD CONSTRAINT `fk-friendship-user-one` FOREIGN KEY (`id-user-one`) REFERENCES `tbusers` (`id-users`),
  ADD CONSTRAINT `fk-friendship-user-two` FOREIGN KEY (`id-user-two`) REFERENCES `tbusers` (`id-users`);

--
-- Filtros para la tabla `tbgroupmember`
--
ALTER TABLE `tbgroupmember`
  ADD CONSTRAINT `fk-member-group` FOREIGN KEY (`id-group`) REFERENCES `tbgroup` (`id-group`),
  ADD CONSTRAINT `fk-member-users` FOREIGN KEY (`id-user`) REFERENCES `tbusers` (`id-users`);

--
-- Filtros para la tabla `tbsubcategory`
--
ALTER TABLE `tbsubcategory`
  ADD CONSTRAINT `fk-category-subcategory` FOREIGN KEY (`id-category`) REFERENCES `tbcategory` (`id-category`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
