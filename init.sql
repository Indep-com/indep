-- 1. Table des utilisateurs
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(20) CHECK (role IN ('freelance', 'entreprise')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. CV pour les freelances (fichier stocké dans MinIO)
CREATE TABLE freelance_cvs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    bio TEXT,
    skills TEXT[],
    experience TEXT,
    portfolio_url TEXT,
    cv_url TEXT, -- Lien MinIO vers le CV
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Missions proposées par les freelances
CREATE TABLE missions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, -- auteur freelance
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    status VARCHAR(20) CHECK (status IN ('ouverte', 'en_cours', 'terminee')) DEFAULT 'ouverte',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Candidatures faites par les entreprises
CREATE TABLE candidatures (
    id SERIAL PRIMARY KEY,
    mission_id INTEGER REFERENCES missions(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, -- entreprise
    lettre_motivation TEXT,
    status VARCHAR(20) CHECK (status IN ('en_attente', 'acceptee', 'refusee')) DEFAULT 'en_attente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
