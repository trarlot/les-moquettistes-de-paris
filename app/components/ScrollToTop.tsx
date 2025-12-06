'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
    useEffect(() => {
        // Désactiver la restauration automatique du scroll
        if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Forcer le scroll vers le haut au chargement
        window.scrollTo(0, 0);
    }, []);

    return null;
}

