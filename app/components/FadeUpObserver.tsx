'use client';

import { useLayoutEffect, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FadeUpObserver() {
    const globalDelayCounterRef = useRef<number>(0);
    const pathname = usePathname();

    useLayoutEffect(() => {
        // Fonction pour vérifier si un élément est visible dans le viewport
        const isElementVisible = (element: Element): boolean => {
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;

            const visibleTop = Math.max(rect.top, 0);
            const visibleBottom = Math.min(rect.bottom, viewportHeight);
            const visibleLeft = Math.max(rect.left, 0);
            const visibleRight = Math.min(rect.right, viewportWidth);

            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibleWidth = Math.max(0, visibleRight - visibleLeft);

            return (
                visibleHeight > 0 &&
                visibleWidth > 0 &&
                rect.top < viewportHeight &&
                rect.bottom > 0 &&
                rect.left < viewportWidth &&
                rect.right > 0 &&
                rect.height > 0 &&
                rect.width > 0
            );
        };

        // Parcourir tous les éléments avec data-fade-up dans l'ordre du DOM
        const processAllElements = () => {
            // Réinitialiser le compteur
            globalDelayCounterRef.current = 0;

            // Parcourir tous les éléments dans l'ordre du DOM
            const elements = document.querySelectorAll('[data-fade-up]');

            elements.forEach((el) => {
                // Ignorer les éléments qui ont déjà un délai
                if (el.hasAttribute('data-aos-delay')) {
                    return;
                }

                // Vérifier si l'élément est visible dans le viewport
                if (isElementVisible(el)) {
                    // Élément visible : lui ajouter un délai progressif
                    const htmlElement = el as HTMLElement;

                    // Vérifier si l'élément a un délai de base défini (data-fade-up-delay)
                    const baseDelay =
                        htmlElement.getAttribute('data-fade-up-delay');
                    let delay: number;

                    if (baseDelay) {
                        // Utiliser le délai de base spécifié
                        delay =
                            parseInt(baseDelay, 10) +
                            globalDelayCounterRef.current * 100;
                    } else {
                        // Utiliser le délai progressif normal
                        delay = globalDelayCounterRef.current * 100;
                    }

                    htmlElement.setAttribute(
                        'data-aos-delay',
                        delay.toString(),
                    );
                    globalDelayCounterRef.current++;
                }
                // Si l'élément n'est pas visible, on ne fait rien (pas d'observer)
            });

            // Rafraîchir AOS pour prendre en compte les nouveaux attributs
            if (typeof window !== 'undefined' && 'AOS' in window) {
                const AOS = (window as { AOS?: { refresh: () => void } }).AOS;
                if (AOS) {
                    AOS.refresh();
                }
            }
        };

        // Traiter les éléments immédiatement au chargement
        processAllElements();
        // Un petit délai pour s'assurer que le DOM est complètement chargé
        const timeoutId = setTimeout(processAllElements, 100);

        // Nettoyage
        return () => {
            clearTimeout(timeoutId);
        };
    }, [pathname]); // Réexécuter à chaque changement de route

    // Réexécuter aussi après un court délai pour s'assurer que le DOM est mis à jour
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            // Réinitialiser le compteur et retraiter tous les éléments
            globalDelayCounterRef.current = 0;
            const elements = document.querySelectorAll('[data-fade-up]');

            const isElementVisible = (element: Element): boolean => {
                const rect = element.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const viewportWidth = window.innerWidth;

                const visibleTop = Math.max(rect.top, 0);
                const visibleBottom = Math.min(rect.bottom, viewportHeight);
                const visibleLeft = Math.max(rect.left, 0);
                const visibleRight = Math.min(rect.right, viewportWidth);

                const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                const visibleWidth = Math.max(0, visibleRight - visibleLeft);

                return (
                    visibleHeight > 0 &&
                    visibleWidth > 0 &&
                    rect.top < viewportHeight &&
                    rect.bottom > 0 &&
                    rect.left < viewportWidth &&
                    rect.right > 0 &&
                    rect.height > 0 &&
                    rect.width > 0
                );
            };

            elements.forEach((el) => {
                // Retirer les anciens délais pour les retraiter
                if (el.hasAttribute('data-aos-delay')) {
                    el.removeAttribute('data-aos-delay');
                }

                if (isElementVisible(el)) {
                    const htmlElement = el as HTMLElement;
                    const baseDelay =
                        htmlElement.getAttribute('data-fade-up-delay');
                    let delay: number;

                    if (baseDelay) {
                        delay =
                            parseInt(baseDelay, 10) +
                            globalDelayCounterRef.current * 100;
                    } else {
                        delay = globalDelayCounterRef.current * 100;
                    }

                    htmlElement.setAttribute(
                        'data-aos-delay',
                        delay.toString(),
                    );
                    globalDelayCounterRef.current++;
                }
            });

            // Rafraîchir AOS
            if (typeof window !== 'undefined' && 'AOS' in window) {
                const AOS = (window as { AOS?: { refresh: () => void } }).AOS;
                if (AOS) {
                    AOS.refresh();
                }
            }
        }, 150);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [pathname]);

    return null;
}
