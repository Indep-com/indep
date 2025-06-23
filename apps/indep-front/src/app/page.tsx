'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './page.css';
import {useRouter} from "next/navigation";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/log-out');
  };

  return (
      <div className="layout">
        <aside className="sidebar">
          <div className="profile-button">profil</div>
          <Link href="/candidatures" className="sidebar-link">Mes candidatures1</Link>
          <Link href="/candidatures" className="sidebar-link">Mes candidatures2</Link>
          <Link href="/candidatures" className="sidebar-link">Mes candidatures3</Link>
        </aside>

        <div className="main-content">
          <header className={`header ${scrolled ? 'shrink' : ''}`}>
            <h1 style={{ flex: 1 }}>INDEP.COM</h1>
            {!isAuthenticated ? (
                <Link href="/login" className="login-button">
                  Connexion
                </Link>
            ) : (
                <button onClick={handleLogout} className="login-button">
                    Déconnecter
                </button>
            )}
          </header>

          <div className="cards-section">
            <div className="column">
              <Link href="/missions">
                <h2 style={{ cursor: 'pointer' }}>Mission</h2>
              </Link>
              <div className="card"><p>Mission<br />Mission</p></div>
              <div className="card"><p>Mission<br />Mission</p></div>
              <div className="card"><p>Mission<br />Mission</p></div>
            </div>

            <div className="column">
              <h2>Freelance</h2>
              <div className="card"><p>Mission<br />Mission</p></div>
              <div className="card"><p>Mission<br />Mission</p></div>
              <div className="card"><p>Mission<br />Mission</p></div>
            </div>
          </div>
        </div>
      </div>
  );
}
