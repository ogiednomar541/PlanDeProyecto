-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 12-01-2022 a las 01:33:16
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='tabla de gastos personales';

--
-- Volcado de datos para la tabla `gastosper`
--

INSERT INTO `gastosper` (`idgasto`, `nombre`, `descripcion`, `tipo`, `cantidad`, `fechaex`, `usuario`, `estado`) VALUES
(1, 'Gasto de Doritos', 'gasto de unas Sabritas de 240g', 'Comida', '40', '2022-01-13', 'saulo', 'PAGADO'),
(2, 'Gasto de ropa', 'gasto de unos tennis', 'Otro', '2200', '2022-01-11', 'saulo', 'PENDIENTE'),
(3, 'Pago luz', 'pagar recibo mensual de luz', 'Hogar', '357', '2022-01-22', 'saulo', 'PENDIENTE'),
(4, 'Pago de agua', 'pagar recibo de agua ', 'Hogar', '236', '2022-01-12', 'saulo', 'PENDIENTE'),
(5, 'Consulta', 'Doctor', 'Salud', '600', '2022-01-14', 'saulo', 'PENDIENTE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbgroup`
--

DROP TABLE IF EXISTS `tbgroup`;
CREATE TABLE IF NOT EXISTS `tbgroup` (
  `idgroup` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `namegp` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descripcion` varchar(80) DEFAULT NULL,
  `user` varchar(30) NOT NULL,
  `fechacreac` date NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`idgroup`),
  UNIQUE KEY `name-gp_UNIQUE` (`namegp`),
  UNIQUE KEY `namegp` (`namegp`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tbgroup`
--

INSERT INTO `tbgroup` (`idgroup`, `namegp`, `descripcion`, `user`, `fechacreac`, `status`) VALUES
(1, 'Primero', 'probando', 'brandon', '2022-01-10', 'A'),
(2, 'Cena', 'algo', 'saulo', '2022-01-10', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbgxp`
--

DROP TABLE IF EXISTS `tbgxp`;
CREATE TABLE IF NOT EXISTS `tbgxp` (
  `id-gxp` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(80) NOT NULL,
  `cantidad` decimal(6,2) NOT NULL,
  `fecha-gasto` date NOT NULL,
  `status` tinytext NOT NULL,
  PRIMARY KEY (`id-gxp`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbpergpo`
--

DROP TABLE IF EXISTS `tbpergpo`;
CREATE TABLE IF NOT EXISTS `tbpergpo` (
  `idpergpo` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `namegp` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user` varchar(30) NOT NULL,
  `cantidad` decimal(6,2) NOT NULL,
  `fecharegis` date NOT NULL,
  PRIMARY KEY (`idpergpo`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tbpergpo`
--

INSERT INTO `tbpergpo` (`idpergpo`, `namegp`, `user`, `cantidad`, `fecharegis`) VALUES
(1, 'Primero', 'brandon', '50.00', '2022-01-07'),
(2, 'Cena', 'brandon', '150.00', '2022-01-09'),
(3, 'Primero', 'saulo', '80.00', '2022-01-07'),
(4, 'Primero', 'ramon', '70.00', '2022-01-07'),
(10, 'Cena', 'ramon', '50.00', '2022-01-11'),
(6, 'Cena', 'saulo', '150.00', '2022-01-09'),
(7, 'Cena', 'carlos', '150.00', '2022-01-09'),
(8, 'Primero', 'carlos', '50.00', '2022-01-11'),
(9, 'Primero', 'orlando', '40.00', '2022-01-11');

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
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tbusers`
--

INSERT INTO `tbusers` (`idusers`, `nombre`, `mail`, `fechanac`, `user`, `pass`, `dateregister`, `estatus`) VALUES
(1, 'Administrador', 'Administrador@gmail.com', '0000-00-00', 'AdminAdmin', '1234', '2021-12-08', 'A'),
(2, 'Orlando', 'orlando@gmail.com', '0000-00-00', 'orlando', '12345', '2021-12-08', 'A'),
(3, 'Saulo', 'saulo@gmail.com', '0000-00-00', 'saulo', '1234', '2021-12-08', 'A'),
(4, 'Ramon', 'ramon@gmail.com', '0000-00-00', 'ramon', '1234', '2021-12-08', 'A'),
(5, 'Diego', 'diego@gmail.com', '0000-00-00', 'diego', '1234', '2021-12-08', 'A'),
(6, 'carlos jose', 'ramon2000@gmail', '2022-10-30', 'carlos', 'clave', '2021-12-10', 'A'),
(7, 'saulo', 'saulo@gmail', '2021-12-02', 'saulor', '1234', '2021-12-11', 'A'),
(8, 'Brandom', 'prueba@gmail.com', '0000-00-00', 'brandon', '1234', '2021-12-08', 'A');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
