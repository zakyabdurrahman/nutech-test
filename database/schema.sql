CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: users
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email CHAR(50) NOT NULL,
    password CHAR(100) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    profile_image TEXT
);

-- Table: balances
CREATE TABLE balances (
    bal_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(user_id),
    balance INT DEFAULT 0
);

-- Table: banners
CREATE TABLE banners (
    banner_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    banner_name VARCHAR(50) NOT NULL,
    banner_image VARCHAR(100) NOT NULL,
    description VARCHAR(50) NOT NULL
);

-- Table: services
CREATE TABLE services (
    service_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    service_code VARCHAR(50) NOT NULL,
    service_name VARCHAR(100) NOT NULL,
    service_icon VARCHAR(50) NOT NULL,
    service_tariff INT NOT NULL
);

-- Table: transactions
CREATE TABLE transactions (
    trans_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(user_id),
    invoice_number VARCHAR(50),
    transaction_type VARCHAR(50),
    created_on DATE,
    total_amount INT,
    description TEXT
);

