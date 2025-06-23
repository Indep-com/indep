'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('http://localhost:3000/auth/register', {
                email,
                password,
                name,
            });

            const token = response.data.token;

            localStorage.setItem('authToken', token);
            router.push('/');
        } catch (err) {
            setMessage('Erreur réseau.');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
            <h2>Inscription</h2>
            <form onSubmit={handleRegister}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Nom complet :</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Prénom Nom"
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

                <button type="submit">S'inscrire</button>
            </form>

            {message && <p style={{ color: 'red' }}>{message}</p>}
        </div>
    );
};

export default RegisterPage;
