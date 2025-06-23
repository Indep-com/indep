'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('http://localhost:3000/auth/register', {
                email,
                password,
                nom,
                prenom,
            });

            const token = response.data.token;
            localStorage.setItem('authToken', token);
            router.push('/');
        } catch (err) {
            console.error(err);
            alert('Erreur lors de l’inscription.');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
            <h2>Inscription</h2>
            <form onSubmit={handleRegister}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Nom :</label>
                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                        style={{ width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Prénom :</label>
                    <input
                        type="text"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        required
                        style={{ width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Email :</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Mot de passe :</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%' }}
                    />
                </div>
                <button type="submit">S’inscrire</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default RegisterPage;
