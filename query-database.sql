-- Membuat database
CREATE DATABASE djouraisyah;

-- Menggunakan database
USE djouraisyah;

-- Membuat tabel users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Membuat tabel carts
CREATE TABLE carts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    quantity INT NOT NULL,
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES users(id)
);

-- Membuat tabel sales
CREATE TABLE sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT,
    product_name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    quantity INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    payment_method VARCHAR(255) NOT NULL,
    shipping_method VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id)
);
