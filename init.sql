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

BEGIN;

-- 1. Users (tous en freelance pour la démo)
INSERT INTO users (email, password, name, role)
VALUES
  ('alice.freelance@example.com', 'password1', 'Alice Freelance', 'freelance'),
  ('bob.freelance@example.com',   'password2', 'Bob Freelance',   'freelance'),
  ('carol.freelance@example.com', 'password3', 'Carol Freelance', 'freelance')
RETURNING id;

-- 2. CVs pour les freelances (IDs 1,2,3)
INSERT INTO freelance_cvs (user_id, bio, skills, portfolio_url, cv_url)
VALUES
  (1, 'Développeuse full-stack passionnée.', ARRAY['JavaScript','Node.js','React'], 'https://portfolio.alice.dev', 'https://minio.local/cv-bucket/alice.pdf'),
  (2, 'Spécialiste backend et API REST.',      ARRAY['Node.js','NestJS','PostgreSQL'], 'https://portfolio.bob.dev',   'https://minio.local/cv-bucket/alice.pdf'),
  (3, 'Designer UI/UX tourné React.',          ARRAY['Figma','React','Tailwind'],    'https://portfolio.carol.dev', 'https://minio.local/cv-bucket/alice.pdf');

-- 3. Missions proposées (auteur = user_id 1,2,3)
INSERT INTO missions (user_id, title, description, price, status)
VALUES
  (1, 'Intégration API externe',      'Intégration d’une API tierce pour paiement.',     1500.00, 'ouverte'),
  (2, 'Refonte structure base de données', 'Migration schema vers PostgreSQL optimisé.', 2000.00, 'ouverte'),
  (3, 'Design de dashboard admin',    'Création d’un dashboard react pour admin.',       1200.00, 'ouverte');

-- 4. Candidatures (toutes “entreprises” fictives = mêmes user_ids 1,2,3 pour la démo)
INSERT INTO candidatures (mission_id, user_id, lettre_motivation, status)
VALUES
  (1, 2, 'Votre projet m’intéresse particulièrement, je maîtrise ces APIs.', 'en_attente'),
  (2, 3, 'Expérience sur PostgreSQL : je suis votre personne idéale.',  'en_attente'),
  (3, 1, 'Design system solide et rapide à livrer pour votre dashboard.', 'en_attente');

COMMIT;
