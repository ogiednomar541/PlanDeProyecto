-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-01-2022 a las 05:22:47
-- Versión del servidor: 8.0.22
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
-- Estructura de tabla para la tabla `articulos`
--

DROP TABLE IF EXISTS `articulos`;
CREATE TABLE IF NOT EXISTS `articulos` (
  `codigo` smallint NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='tabla ejemplo';

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`codigo`, `descripcion`, `precio`) VALUES
(1, 'fanta 1l', '1290'),
(2, 'coca cola 2lt', '1650'),
(3, 'sprite 2lt', '1290'),
(4, 'watts naranja 1lt', '1250');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gastosper`
--

DROP TABLE IF EXISTS `gastosper`;
CREATE TABLE IF NOT EXISTS `gastosper` (
  `idgasto` smallint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `cantidad` decimal(10,0) NOT NULL,
  `fechaex` date NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  PRIMARY KEY (`idgasto`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='tabla de gastos personales';

--
-- Volcado de datos para la tabla `gastosper`
--

INSERT INTO `gastosper` (`idgasto`, `nombre`, `descripcion`, `tipo`, `cantidad`, `fechaex`, `usuario`, `estado`) VALUES
(1, 'Gasto de Doritos', 'gasto de unas Sabritas de 240g', 'comida', '40', '2022-01-13', 'saulo', 'A'),
(2, 'Gasto de ropa', 'gasto de unos tennis', 'personal', '2200', '2022-01-22', 'saulo', 'A'),
(3, 'pago luz', 'pagar recibo mensual de luz', 'Hogar', '357', '2022-01-05', 'saulo', 'A'),
(4, 'pago de agua', 'pagar recibo de agua ', 'Hogar', '236', '2022-01-12', 'saulo', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb-group`
--

DROP TABLE IF EXISTS `tb-group`;
CREATE TABLE IF NOT EXISTS `tb-group` (
  `id-group` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name-gp` varchar(45) NOT NULL,
  `descripcion` varchar(80) DEFAULT NULL,
  `id-admn` int NOT NULL,
  `fecha-creac` date NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id-group`),
  UNIQUE KEY `name-gp_UNIQUE` (`name-gp`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb-gxp`
--

DROP TABLE IF EXISTS `tb-gxp`;
CREATE TABLE IF NOT EXISTS `tb-gxp` (
  `id-gxp` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(80) NOT NULL,
  `cantidad` decimal(6,2) NOT NULL,
  `fecha-gasto` date NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id-gxp`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb-pergpo`
--

DROP TABLE IF EXISTS `tb-pergpo`;
CREATE TABLE IF NOT EXISTS `tb-pergpo` (
  `id-pergpo` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name-gpo` varchar(45) NOT NULL,
  `user` varchar(30) NOT NULL,
  `cantidad` decimal(6,2) NOT NULL,
  `fecha-regis` date NOT NULL,
  PRIMARY KEY (`id-pergpo`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbusers`
--

DROP TABLE IF EXISTS `tbusers`;
CREATE TABLE IF NOT EXISTS `tbusers` (
  `idusers` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` tinytext NOT NULL,
  `mail` varchar(30) NOT NULL,
  `fechanac` date NOT NULL,
  `user` varchar(30) DEFAULT NULL,
  `pass` varchar(20) NOT NULL,
  `dateregister` date NOT NULL,
  `estatus` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE KEY `correo_UNIQUE` (`mail`),
  UNIQUE KEY `user_UNIQUE` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tbusers`
--

INSERT INTO `tbusers` (`idusers`, `nombre`, `mail`, `fechanac`, `user`, `pass`, `dateregister`, `estatus`) VALUES
(1, 'Brandon', 'prueba@gmail.com', '0000-00-00', 'brandon', '1234', '2021-12-08', 'A'),
(2, 'Orlando', 'orlando@gmail.com', '0000-00-00', 'orlando', '1234', '2021-12-08', 'A'),
(3, 'Saulo', 'saulo@gmail.com', '0000-00-00', 'saulo', '1234', '2021-12-08', 'A'),
(4, 'Ramon', 'ramon@gmail.com', '0000-00-00', 'ramon', '1234', '2021-12-08', 'A'),
(5, 'Diego', 'diego@gmail.com', '0000-00-00', 'diego', '1234', '2021-12-08', 'A'),
(6, 'carlos jose', 'ramon2000@gmail', '2022-10-30', 'carlos', 'clave', '2021-12-10', 'A'),
(7, 'saulo', 'saulo@gmail', '2021-12-02', 'saulor', '1234', '2021-12-11', 'A');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
