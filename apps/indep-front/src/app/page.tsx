'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './page.css';

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
          <h1>INDEP.COM</h1>
        </header>

        <div className="cards-section">
          <div className="column">
            <h2>Mission</h2>
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
