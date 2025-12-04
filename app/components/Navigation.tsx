'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setIsDropdownOpen(false);
    };

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 100);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* Overlay noir transparent */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}
            <nav className="fixed top-0 w-full bg-white shadow-md backdrop-blur-sm z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex my-2 items-center">
                            <Link
                                href="/"
                                className="text-2xl flex items-center h-[80px] font-bold text-gray-900"
                                onClick={closeMenu}>
                                <Image
                                    src="/assets/logo-moquettistes-paris.png"
                                    alt="Les Moquettistes de Paris"
                                    width={80}
                                    height={80}
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation - Centré */}
                        <div className="hidden lg:flex items-center justify-center space-x-6 flex-1">
                            <Link
                                href="/services/theatres-operas"
                                className="text-gray-700 hover:text-red-700 transition-colors">
                                Théâtres & Opéras
                            </Link>
                            <Link
                                href="/services/hotels-restaurants"
                                className="text-gray-700 hover:text-red-700 transition-colors">
                                Hôtellerie
                            </Link>
                            <Link
                                href="/services/restauration"
                                className="text-gray-700 hover:text-red-700 transition-colors">
                                Restauration
                            </Link>
                            <Link
                                href="/services/banques-entreprises"
                                className="text-gray-700 hover:text-red-700 transition-colors">
                                Banques & Entreprises
                            </Link>
                            <Link
                                href="/services/cinema"
                                className="text-gray-700 hover:text-red-700 transition-colors">
                                Cinéma
                            </Link>
                            <div
                                className="relative group"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                <button className="text-gray-700 hover:text-red-700 transition-colors flex items-center">
                                    Autres
                                    <svg
                                        className={`ml-1 w-4 h-4 transition-transform ${
                                            isHovered ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className={`absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50 border border-gray-100 transition-all duration-200 ${
                                        isHovered
                                            ? 'opacity-100 visible'
                                            : 'opacity-0 invisible'
                                    }`}>
                                    <Link
                                        href="/services/espaces-evenementiels"
                                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors leading-relaxed">
                                        Espaces Événementiels
                                    </Link>
                                    <Link
                                        href="/services/bijouterie"
                                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors leading-relaxed">
                                        Bijouterie
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Bouton Contactez-nous - À droite */}
                        <div className="hidden lg:flex items-center justify-end">
                            <Link
                                href="/contact"
                                className="bg-red-700 text-white px-6 py-2 hover:bg-red-800 transition-colors font-medium leading-tight">
                                Contactez-nous
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 text-gray-700 hover:text-red-700 transition-colors"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="lg:hidden border-t border-gray-100 py-4">
                            <div className="flex flex-col space-y-4">
                                <Link
                                    href="/services/theatres-operas"
                                    onClick={closeMenu}
                                    className="text-gray-700 hover:text-red-700 transition-colors py-2">
                                    Théâtres & Opéras
                                </Link>
                                <Link
                                    href="/services/hotels-restaurants"
                                    onClick={closeMenu}
                                    className="text-gray-700 hover:text-red-700 transition-colors py-2">
                                    Hôtellerie
                                </Link>
                                <Link
                                    href="/services/restauration"
                                    onClick={closeMenu}
                                    className="text-gray-700 hover:text-red-700 transition-colors py-2">
                                    Restauration
                                </Link>
                                <Link
                                    href="/services/banques-entreprises"
                                    onClick={closeMenu}
                                    className="text-gray-700 hover:text-red-700 transition-colors py-2">
                                    Banques & Entreprises
                                </Link>
                                <Link
                                    href="/services/cinema"
                                    onClick={closeMenu}
                                    className="text-gray-700 hover:text-red-700 transition-colors py-2">
                                    Cinéma
                                </Link>
                                <div className="py-2">
                                    <button
                                        onClick={() =>
                                            setIsDropdownOpen(!isDropdownOpen)
                                        }
                                        className="text-gray-700 hover:text-red-700 transition-colors flex items-center w-full justify-between">
                                        Autres
                                        <svg
                                            className={`w-4 h-4 transition-transform ${
                                                isDropdownOpen
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="pl-4 mt-2 space-y-2">
                                            <Link
                                                href="/services/espaces-evenementiels"
                                                onClick={closeMenu}
                                                className="block text-gray-700 hover:text-red-700 transition-colors py-2 leading-relaxed">
                                                Espaces Événementiels
                                            </Link>
                                            <Link
                                                href="/services/bijouterie"
                                                onClick={closeMenu}
                                                className="block text-gray-700 hover:text-red-700 transition-colors py-2 leading-relaxed">
                                                Bijouterie
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                <Link
                                    href="/contact"
                                    onClick={closeMenu}
                                    className="bg-red-700 text-white px-6 py-2 hover:bg-red-800 transition-colors font-medium leading-tight text-center">
                                    Contactez-nous
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
