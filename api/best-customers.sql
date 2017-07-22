-- phpMyAdmin SQL Dump
-- version 4.3.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Tempo de geração: 22/07/2017 às 02:59
-- Versão do servidor: 5.5.51-38.2
-- Versão do PHP: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `conrado_best_cus`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `client`
--

CREATE TABLE IF NOT EXISTS `client` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cep` varchar(255) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `client`
--

INSERT INTO `client` (`id`, `name`, `tel`, `address`, `email`, `cep`) VALUES
(1, 'Maria', '2585-3652', 'Rua Estrela Azul', 'maria@maria.com', '04041-050'),
(4, 'jOAO', '2222-2223', 'fffd dd', 'joao@gmail.com', '08180-200'),
(3, 'Lucas Conrado', '2585-3652', 'Rua Estrela Azul', 'lucasrtmix@gmail.com', '05150-800'),
(5, 'teste', '2585-3652', 'Teste', 'teste@teste.com', '04041-050'),
(6, 'dfdf', '2585-3652', 'testesdsdssdsdsdsdsdsdsdsdsdd', 'teste@teste.com', '04041-050'),
(7, 'teste', '2585-3952', 'trste', 'teste@teste.com', '04041-050'),
(8, 'teste', '2585-3952', 'trste', 'teste@teste.com', '08040-080'),
(9, 'teste', '2585-3952', 'trste', 'teste@teste.com', '08180-200'),
(10, 'ffff', '8057-5595', 'efefeefe', 'teste@teste.com', '08180-200'),
(11, 'Test name', '2585-3652', 'Street test insert crud', 'lucas@conradoweb.com', '08170-300'),
(12, 'fgfg', '2585-3652', 'Estrela', 'fgfg@dff.ff', '08180-200');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
