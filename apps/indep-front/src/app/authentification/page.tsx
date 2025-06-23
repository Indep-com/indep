'use client';

import React, { useState } from 'react';
import {useRouter} from "next/navigation";
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                email,
                password,
            });

            const token = response.data.token;

            localStorage.setItem('authToken', token);
            router.push('/');
        } catch (error) {
            if (
                typeof error === 'object' &&
                error !== null &&
                'response' in error &&
                typeof (error as any).response === 'object' &&
                (error as any).response !== null &&
                'data' in (error as any).response &&
                typeof (error as any).response.data === 'object' &&
                'message' in (error as any).response.data
            ) {
                setMessage('Erreur de connexion : ' + (error as any).response.data.message);
            } else {
                setMessage('Erreur de connexion : Erreur inconnue');
            }
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
            <h2>Connexion</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Se connecter</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginPage;
