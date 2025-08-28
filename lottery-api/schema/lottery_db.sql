-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 22, 2025 lúc 08:10 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `lottery_db`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `excerpt` text DEFAULT NULL,
  `content` longtext NOT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `reading_time` int(11) DEFAULT 0,
  `status` enum('draft','review','scheduled','published') DEFAULT 'draft',
  `published_at` datetime DEFAULT NULL,
  `scheduled_at` datetime DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL,
  `canonical_url` varchar(255) DEFAULT NULL,
  `og_image` varchar(255) DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `articles`
--

INSERT INTO `articles` (`id`, `author_id`, `title`, `slug`, `excerpt`, `content`, `thumbnail`, `reading_time`, `status`, `published_at`, `scheduled_at`, `meta_title`, `meta_description`, `canonical_url`, `og_image`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 3, 'Kết quả xổ số miền Bắc hôm nay', 'ket-qua-xsmb-hom-nay', 'Cập nhật kết quả XSMB mới nhất.', '<p>Nội dung chi tiết kết quả xổ số miền Bắc hôm nay...</p>', '/uploads/xsmb.jpg', 3, 'published', '2025-08-22 10:50:09', NULL, 'Kết quả XSMB hôm nay', 'Cập nhật kết quả xổ số miền Bắc hôm nay nhanh và chính xác.', NULL, NULL, 3, NULL, '2025-08-22 03:50:09', '2025-08-22 03:50:09'),
(2, 4, 'Thống kê loto miền Trung', 'thong-ke-loto-mien-trung', 'Phân tích loto miền Trung.', '<p>Số liệu thống kê loto miền Trung...</p>', '/uploads/xsmt.jpg', 4, 'published', '2025-08-22 10:50:09', NULL, 'Thống kê loto MT', 'Thống kê chi tiết loto miền Trung hôm nay.', NULL, NULL, 4, NULL, '2025-08-22 03:50:09', '2025-08-22 03:50:09'),
(3, 3, 'Kinh nghiệm soi cầu chuẩn xác', 'kinh-nghiem-soi-cau-chuan', 'Chia sẻ bí quyết soi cầu hiệu quả.', '<p>Kinh nghiệm soi cầu chi tiết...</p>', '/uploads/soi-cau.jpg', 5, 'published', '2025-08-22 10:50:09', NULL, 'Kinh nghiệm soi cầu', 'Hướng dẫn soi cầu lô đề chuẩn xác.', NULL, NULL, 3, NULL, '2025-08-22 03:50:09', '2025-08-22 03:50:09'),
(4, 2, 'Tin tức xổ số mới nhất', 'tin-tuc-xo-so-moi-nhat', 'Cập nhật tin tức mới.', '<p>Tin tức mới nhất về xổ số...</p>', '/uploads/tin-tuc.jpg', 2, 'published', '2025-08-22 10:50:09', NULL, 'Tin tức xổ số', 'Tin tức nhanh chóng về xổ số 3 miền.', NULL, NULL, 2, NULL, '2025-08-22 03:50:09', '2025-08-22 03:50:09'),
(5, 3, 'Chiến lược chơi xổ số hiệu quả', 'chien-luoc-choi-xo-so', 'Chiến lược giúp bạn chơi hiệu quả.', '<p>Bài viết chia sẻ chiến lược chơi xổ số...</p>', '/uploads/kinh-nghiem.jpg', 6, 'published', '2025-08-22 10:50:09', NULL, 'Chiến lược chơi xổ số', 'Chiến lược chơi xổ số thông minh và an toàn.', NULL, NULL, 3, NULL, '2025-08-22 03:50:09', '2025-08-22 03:50:09');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `article_categories`
--

CREATE TABLE `article_categories` (
  `article_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `article_categories`
--

INSERT INTO `article_categories` (`article_id`, `category_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 5),
(5, 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `article_images`
--

CREATE TABLE `article_images` (
  `id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `media_id` int(11) NOT NULL,
  `alt_text` varchar(255) DEFAULT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT 0,
  `is_featured` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `article_images`
--

INSERT INTO `article_images` (`id`, `article_id`, `media_id`, `alt_text`, `caption`, `position`, `is_featured`, `created_at`) VALUES
(1, 1, 1, 'Ảnh kết quả XSMB', 'KQ XSMB', 1, 1, '2025-08-22 03:50:09'),
(2, 2, 2, 'Ảnh thống kê loto MT', 'TK loto MT', 1, 1, '2025-08-22 03:50:09'),
(3, 3, 4, 'Ảnh soi cầu', 'Soi cầu', 1, 1, '2025-08-22 03:50:09'),
(4, 4, 3, 'Ảnh tin tức', 'Tin xổ số', 1, 1, '2025-08-22 03:50:09'),
(5, 5, 5, 'Ảnh kinh nghiệm', 'Kinh nghiệm', 1, 1, '2025-08-22 03:50:09');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `article_provinces`
--

CREATE TABLE `article_provinces` (
  `article_id` int(11) NOT NULL,
  `province_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `article_revisions`
--

CREATE TABLE `article_revisions` (
  `id` bigint(20) NOT NULL,
  `article_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `excerpt` text DEFAULT NULL,
  `content` longtext NOT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `article_tags`
--

CREATE TABLE `article_tags` (
  `article_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `article_tags`
--

INSERT INTO `article_tags` (`article_id`, `tag_id`) VALUES
(1, 1),
(2, 2),
(3, 4),
(4, 5),
(5, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `article_views`
--

CREATE TABLE `article_views` (
  `id` bigint(20) NOT NULL,
  `article_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `view_count` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `auth_tokens`
--

CREATE TABLE `auth_tokens` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `refresh_token` char(64) NOT NULL,
  `user_agent` varchar(255) DEFAULT NULL,
  `ip` varchar(45) DEFAULT NULL,
  `expires_at` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(120) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `created_at`) VALUES
(1, 'Kết quả xổ số', 'ket-qua-xo-so', 'Tin tức kết quả xổ số 3 miền', '2025-08-22 03:50:09'),
(2, 'Thống kê', 'thong-ke', 'Thống kê, phân tích xổ số', '2025-08-22 03:50:09'),
(3, 'Soi cầu', 'soi-cau', 'Dự đoán, soi cầu lô đề', '2025-08-22 03:50:09'),
(4, 'Kinh nghiệm', 'kinh-nghiem', 'Chia sẻ kinh nghiệm chơi xổ số', '2025-08-22 03:50:09'),
(5, 'Tin tức', 'tin-tuc', 'Cập nhật tin tức mới nhất', '2025-08-22 03:50:09');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lottery_prizes`
--

CREATE TABLE `lottery_prizes` (
  `id` bigint(20) NOT NULL,
  `result_id` bigint(20) NOT NULL,
  `province` varchar(50) DEFAULT NULL,
  `prize_type` varchar(10) NOT NULL,
  `number` varchar(10) NOT NULL,
  `reversed_number` varchar(32) GENERATED ALWAYS AS (reverse(`number`)) STORED
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `lottery_prizes`
--

INSERT INTO `lottery_prizes` (`id`, `result_id`, `province`, `prize_type`, `number`) VALUES
(1, 1, NULL, 'DB', '94127'),
(2, 1, NULL, 'G1', '42750'),
(3, 1, NULL, 'G2', '74104'),
(4, 1, NULL, 'G2', '87683'),
(5, 1, NULL, 'G3', '81958'),
(6, 1, NULL, 'G3', '91701'),
(7, 1, NULL, 'G3', '18532'),
(8, 1, NULL, 'G3', '68466'),
(9, 1, NULL, 'G3', '91536'),
(10, 1, NULL, 'G3', '45273'),
(11, 1, NULL, 'G4', '7891'),
(12, 1, NULL, 'G4', '3332'),
(13, 1, NULL, 'G4', '7157'),
(14, 1, NULL, 'G4', '6617'),
(15, 1, NULL, 'G5', '2203'),
(16, 1, NULL, 'G5', '6996'),
(17, 1, NULL, 'G5', '8523'),
(18, 1, NULL, 'G5', '1994'),
(19, 1, NULL, 'G5', '2365'),
(20, 1, NULL, 'G5', '2910'),
(21, 1, NULL, 'G6', '883'),
(22, 1, NULL, 'G6', '219'),
(23, 1, NULL, 'G6', '396'),
(24, 1, NULL, 'G7', '83'),
(25, 1, NULL, 'G7', '85'),
(26, 1, NULL, 'G7', '09'),
(27, 1, NULL, 'G7', '38'),
(28, 2, 'Tây Ninh', 'DB', '351303'),
(29, 2, 'Tây Ninh', 'G8', '90'),
(30, 2, 'An Giang', 'DB', '650396'),
(31, 2, 'An Giang', 'G8', '61'),
(32, 2, 'Bình Thuận', 'DB', '601298'),
(33, 2, 'Bình Thuận', 'G8', '29'),
(34, 3, 'Bình Định', 'DB', '227526'),
(35, 3, 'Bình Định', 'G8', '54'),
(36, 3, 'Quảng Trị', 'DB', '240200'),
(37, 3, 'Quảng Trị', 'G8', '89'),
(38, 3, 'Quảng Bình', 'DB', '847205'),
(39, 3, 'Quảng Bình', 'G8', '38'),
(40, 4, NULL, 'DB', '12421'),
(41, 4, NULL, 'G1', '98854'),
(42, 4, NULL, 'G2', '59095'),
(43, 4, NULL, 'G2', '02817'),
(44, 4, NULL, 'G3', '79034'),
(45, 4, NULL, 'G3', '49589'),
(46, 4, NULL, 'G3', '94859'),
(47, 4, NULL, 'G3', '63919'),
(48, 4, NULL, 'G3', '04963'),
(49, 4, NULL, 'G3', '38674'),
(50, 4, NULL, 'G4', '5174'),
(51, 4, NULL, 'G4', '6819'),
(52, 4, NULL, 'G4', '0735'),
(53, 4, NULL, 'G4', '8141'),
(54, 4, NULL, 'G5', '7474'),
(55, 4, NULL, 'G5', '4340'),
(56, 4, NULL, 'G5', '4475'),
(57, 4, NULL, 'G5', '4827'),
(58, 4, NULL, 'G5', '5244'),
(59, 4, NULL, 'G5', '8682'),
(60, 4, NULL, 'G6', '076'),
(61, 4, NULL, 'G6', '942'),
(62, 4, NULL, 'G6', '741'),
(63, 4, NULL, 'G7', '35'),
(64, 4, NULL, 'G7', '90'),
(65, 4, NULL, 'G7', '96'),
(66, 4, NULL, 'G7', '06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lottery_results`
--

CREATE TABLE `lottery_results` (
  `id` bigint(20) NOT NULL,
  `region` enum('MB','MT','MN') NOT NULL,
  `province_codes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`province_codes`)),
  `provinces` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`provinces`)),
  `draw_date` date NOT NULL,
  `raw_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`raw_json`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `lottery_results`
--

INSERT INTO `lottery_results` (`id`, `region`, `province_codes`, `provinces`, `draw_date`, `raw_json`, `created_at`, `updated_at`) VALUES
(1, 'MB', '[\"2LA\", \"5LA\", \"11LA\", \"12LA\", \"13LA\", \"15LA\"]', NULL, '2025-08-21', '{\"DB\": \"94127\", \"G1\": \"42750\", \"G2\": [\"74104\", \"87683\"], \"G3\": [\"81958\", \"91701\", \"18532\", \"68466\", \"91536\", \"45273\"], \"G4\": [\"7891\", \"3332\", \"7157\", \"6617\"], \"G5\": [\"2203\", \"6996\", \"8523\", \"1994\", \"2365\", \"2910\"], \"G6\": [\"883\", \"219\", \"396\"], \"G7\": [\"83\", \"85\", \"09\", \"38\"]}', '2025-08-21 13:51:43', '2025-08-21 13:51:43'),
(2, 'MN', NULL, '[\"Tây Ninh\", \"An Giang\", \"Bình Thuận\"]', '2025-08-21', '{\"Tây Ninh\": {\"DB\": \"351303\", \"G8\": \"90\"}, \"An Giang\": {\"DB\": \"650396\", \"G8\": \"61\"}, \"Bình Thuận\": {\"DB\": \"601298\", \"G8\": \"29\"}}', '2025-08-21 13:51:43', '2025-08-21 13:51:43'),
(3, 'MT', NULL, '[\"Bình Định\", \"Quảng Trị\", \"Quảng Bình\"]', '2025-08-21', '{\"Bình Định\": {\"DB\": \"227526\", \"G8\": \"54\"}, \"Quảng Trị\": {\"DB\": \"240200\", \"G8\": \"89\"}, \"Quảng Bình\": {\"DB\": \"847205\", \"G8\": \"38\"}}', '2025-08-21 13:51:43', '2025-08-21 13:51:43'),
(4, 'MB', '[\"10LK\",\"12LK\",\"13LK\",\"14LK\",\"2LK\",\"7LK\"]', NULL, '2025-08-13', '{\"DB\":\"12421\",\"G1\":\"98854\",\"G2\":[\"59095\",\"02817\"],\"G3\":[\"79034\",\"49589\",\"94859\",\"63919\",\"04963\",\"38674\"],\"G4\":[\"5174\",\"6819\",\"0735\",\"8141\"],\"G5\":[\"7474\",\"4340\",\"4475\",\"4827\",\"5244\",\"8682\"],\"G6\":[\"076\",\"942\",\"741\"],\"G7\":[\"35\",\"90\",\"96\",\"06\"]}', '2025-08-21 16:21:03', '2025-08-21 16:21:03');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `media_assets`
--

CREATE TABLE `media_assets` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `mime_type` varchar(100) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `size_bytes` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `media_assets`
--

INSERT INTO `media_assets` (`id`, `url`, `file_name`, `mime_type`, `width`, `height`, `size_bytes`, `created_by`, `created_at`) VALUES
(1, '/uploads/xsmb.jpg', 'xsmb.jpg', 'image/jpeg', 800, 600, 120000, 1, '2025-08-22 03:50:09'),
(2, '/uploads/xsmt.jpg', 'xsmt.jpg', 'image/jpeg', 800, 600, 125000, 1, '2025-08-22 03:50:09'),
(3, '/uploads/xsmn.jpg', 'xsmn.jpg', 'image/jpeg', 800, 600, 128000, 1, '2025-08-22 03:50:09'),
(4, '/uploads/soi-cau.jpg', 'soi-cau.jpg', 'image/jpeg', 800, 600, 130000, 2, '2025-08-22 03:50:09'),
(5, '/uploads/kinh-nghiem.jpg', 'kinh-nghiem.jpg', 'image/jpeg', 800, 600, 110000, 3, '2025-08-22 03:50:09');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` char(64) NOT NULL,
  `expires_at` datetime NOT NULL,
  `used` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `provinces`
--

CREATE TABLE `provinces` (
  `id` int(11) NOT NULL,
  `code` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `region_code` enum('MB','MT','MN') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `redirects`
--

CREATE TABLE `redirects` (
  `id` int(11) NOT NULL,
  `source_path` varchar(255) NOT NULL,
  `target_path` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `regions`
--

CREATE TABLE `regions` (
  `code` enum('MB','MT','MN') NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`) VALUES
(1, 'admin', 'Toàn quyền'),
(2, 'editor', 'Duyệt/Xuất bản'),
(3, 'author', 'Viết bài');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `system_settings`
--

CREATE TABLE `system_settings` (
  `id` int(11) NOT NULL,
  `key` varchar(100) NOT NULL,
  `value` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `system_settings`
--

INSERT INTO `system_settings` (`id`, `key`, `value`, `created_at`, `updated_at`) VALUES
(1, 'site_name', 'Lottery & Blog API', '2025-08-22 06:09:36', '2025-08-22 06:09:36'),
(2, 'site_description', 'SEO-friendly Lottery Results & Blog Platform', '2025-08-22 06:09:36', '2025-08-22 06:09:36'),
(3, 'logo_url', '/uploads/logo.png', '2025-08-22 06:09:36', '2025-08-22 06:09:36'),
(4, 'default_language', 'vi', '2025-08-22 06:09:36', '2025-08-22 06:09:36'),
(5, 'items_per_page', '20', '2025-08-22 06:09:36', '2025-08-22 06:09:36');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tags`
--

INSERT INTO `tags` (`id`, `name`, `slug`) VALUES
(1, 'XSMB', 'xsmb'),
(2, 'XSMT', 'xsmt'),
(3, 'XSMN', 'xsmn'),
(4, 'Thống kê loto', 'thong-ke-loto'),
(5, 'Dự đoán hôm nay', 'du-doan-hom-nay');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(190) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `full_name` varchar(190) DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `last_login_at` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password_hash`, `full_name`, `avatar_url`, `is_active`, `last_login_at`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@example.com', '$2b$10$FzF8JYvZcZ8Xq9Z8ePjSeO0F7gZ0HjHhZV9h4hYxHjH9hZp9QkF9W', 'Admin User', NULL, 1, NULL, '2025-08-22 03:50:09', '2025-08-22 03:50:09'),
(2, 'editor', 'editor@example.com', '$2b$10$abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef', 'Editor User', NULL, 1, NULL, '2025-08-22 03:50:09', '2025-08-22 03:50:09'),
(3, 'author1', 'author1@example.com', '$2b$10$abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef', 'Author One', NULL, 1, NULL, '2025-08-22 03:50:09', '2025-08-22 03:50:09'),
(4, 'author2', 'author2@example.com', '$2b$10$abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef', 'Author Two', NULL, 1, NULL, '2025-08-22 03:50:09', '2025-08-22 03:50:09'),
(5, 'member', 'member@example.com', '$2b$10$abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef', 'Normal Member', NULL, 1, NULL, '2025-08-22 03:50:09', '2025-08-22 03:50:09');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 3),
(5, 3);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `author_id` (`author_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `idx_articles_status_published` (`status`,`published_at`);
ALTER TABLE `articles` ADD FULLTEXT KEY `ft_articles` (`title`,`excerpt`,`content`);

--
-- Chỉ mục cho bảng `article_categories`
--
ALTER TABLE `article_categories`
  ADD PRIMARY KEY (`article_id`,`category_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `article_images`
--
ALTER TABLE `article_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article_id` (`article_id`),
  ADD KEY `media_id` (`media_id`);

--
-- Chỉ mục cho bảng `article_provinces`
--
ALTER TABLE `article_provinces`
  ADD PRIMARY KEY (`article_id`,`province_id`),
  ADD KEY `province_id` (`province_id`);

--
-- Chỉ mục cho bảng `article_revisions`
--
ALTER TABLE `article_revisions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article_id` (`article_id`),
  ADD KEY `created_by` (`created_by`);

--
-- Chỉ mục cho bảng `article_tags`
--
ALTER TABLE `article_tags`
  ADD PRIMARY KEY (`article_id`,`tag_id`),
  ADD KEY `tag_id` (`tag_id`);

--
-- Chỉ mục cho bảng `article_views`
--
ALTER TABLE `article_views`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_article_date` (`article_id`,`date`);

--
-- Chỉ mục cho bảng `auth_tokens`
--
ALTER TABLE `auth_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `refresh_token` (`refresh_token`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Chỉ mục cho bảng `lottery_prizes`
--
ALTER TABLE `lottery_prizes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_prize_number` (`number`),
  ADD KEY `idx_prize_type` (`prize_type`),
  ADD KEY `idx_prizes_result` (`result_id`),
  ADD KEY `idx_prizes_reversed` (`reversed_number`);

--
-- Chỉ mục cho bảng `lottery_results`
--
ALTER TABLE `lottery_results`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_result` (`region`,`draw_date`),
  ADD KEY `idx_results_drawdate` (`draw_date`),
  ADD KEY `idx_results_region_drawdate` (`region`,`draw_date`),
  ADD KEY `idx_results_region` (`region`);

--
-- Chỉ mục cho bảng `media_assets`
--
ALTER TABLE `media_assets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`),
  ADD KEY `region_code` (`region_code`);

--
-- Chỉ mục cho bảng `redirects`
--
ALTER TABLE `redirects`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `source_path` (`source_path`);

--
-- Chỉ mục cho bảng `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`code`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `system_settings`
--
ALTER TABLE `system_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `key` (`key`);

--
-- Chỉ mục cho bảng `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Chỉ mục cho bảng `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `article_images`
--
ALTER TABLE `article_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `article_revisions`
--
ALTER TABLE `article_revisions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `article_views`
--
ALTER TABLE `article_views`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `auth_tokens`
--
ALTER TABLE `auth_tokens`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `lottery_prizes`
--
ALTER TABLE `lottery_prizes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT cho bảng `lottery_results`
--
ALTER TABLE `lottery_results`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `media_assets`
--
ALTER TABLE `media_assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `redirects`
--
ALTER TABLE `redirects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `system_settings`
--
ALTER TABLE `system_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `articles_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `articles_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `article_categories`
--
ALTER TABLE `article_categories`
  ADD CONSTRAINT `article_categories_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `article_categories_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `article_images`
--
ALTER TABLE `article_images`
  ADD CONSTRAINT `article_images_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `article_images_ibfk_2` FOREIGN KEY (`media_id`) REFERENCES `media_assets` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `article_provinces`
--
ALTER TABLE `article_provinces`
  ADD CONSTRAINT `article_provinces_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `article_provinces_ibfk_2` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `article_revisions`
--
ALTER TABLE `article_revisions`
  ADD CONSTRAINT `article_revisions_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `article_revisions_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `article_tags`
--
ALTER TABLE `article_tags`
  ADD CONSTRAINT `article_tags_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `article_tags_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `article_views`
--
ALTER TABLE `article_views`
  ADD CONSTRAINT `article_views_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `auth_tokens`
--
ALTER TABLE `auth_tokens`
  ADD CONSTRAINT `auth_tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `lottery_prizes`
--
ALTER TABLE `lottery_prizes`
  ADD CONSTRAINT `lottery_prizes_ibfk_1` FOREIGN KEY (`result_id`) REFERENCES `lottery_results` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `media_assets`
--
ALTER TABLE `media_assets`
  ADD CONSTRAINT `media_assets_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD CONSTRAINT `password_resets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `provinces`
--
ALTER TABLE `provinces`
  ADD CONSTRAINT `provinces_ibfk_1` FOREIGN KEY (`region_code`) REFERENCES `regions` (`code`);

--
-- Các ràng buộc cho bảng `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
