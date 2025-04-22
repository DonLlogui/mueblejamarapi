-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 22-04-2025 a las 14:05:08
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mueblesjamar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `token`
--

CREATE TABLE `token` (
  `idToken` int NOT NULL,
  `usuario` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `rol` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `llave` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL,
  `documento` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nombres` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `telefono` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `correo` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `contrasena` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `rol` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Cliente',
  `estado` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `documento`, `nombres`, `telefono`, `correo`, `contrasena`, `rol`, `estado`) VALUES
(1, '12345678', 'pepito perez perez', '3002222222', 'pepito@gmail.com', '12345', 'Cliente', 'Activo'),
(2, '12345679', 'fulanito mazo mazo', '3002222221', 'fulanito@gmail.com', '12345', 'Cliente', 'Activo'),
(3, '12345677', 'Juanita Perez Mazo', '3002222223', 'juanita@gmail.com', '$2b$10$fJmPMp.OjmIRXd68PwAfUuDSJhad0fNVV1PKEQAaqaFxGkuQB3FmG', 'Cliente', 'Activo'),
(4, '12345676', 'Ana Perez Mazo', '3002222224', 'ana@gmail.com', '$2b$10$NYG0U1BQQFhbY4n6KrboyOjk2yauZjBMBy1HNUfjHq8kM04NcPJHm', 'Cliente', 'Activo'),
(9, '1234554321', 'Leidy Maria Tabares', '3005555555', 'tabares@gmail.com', '$2b$10$IRtCG3nk5uOic8CAe2tZPum14fqe40mS0gZrmavkgOqInOsdaOJIC', 'Cliente', 'Activo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`idToken`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `documento` (`documento`),
  ADD UNIQUE KEY `telefono` (`telefono`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
