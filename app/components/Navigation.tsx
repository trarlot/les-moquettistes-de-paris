'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Overlay noir transparent */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex my-2 items-center">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-gray-900"
                                onClick={closeMenu}>
                                <Image
                                    src="/assets/logo.svg"
                                    alt="Les Moquettistes de Paris"
                                    width={120}
                                    height={120}
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-red-700 transition-colors">
                                Accueil
                            </Link>
                            <Link
                                href="/services"
                                className="text-gray-700 hover:text-red-700 transition-colors">
                                Services
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-700 hover:text-red-700 transition-colors">
                                Contact
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-red-700 text-white px-6 py-2 hover:bg-red-800 transition-colors font-medium leading-tight">
                                Devis Gratuit
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-gray-700 hover:text-red-700 transition-colors"
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
                        <div className="md:hidden border-t border-gray-100 py-4">
                            <div className="flex flex-col space-y-4">
                                <Link
                                    href="/"
                                    onClick={closeMenu}
                                    className="text-gray-700 hover:text-red-700 transition-colors py-2">
                                    Accueil
                                </Link>
                                <Link
                                    href="/services"
                                    onClick={closeMenu}
                                    className="text-gray-700 hover:text-red-700 transition-colors py-2">
                                    Services
                                </Link>
                                <Link
                                    href="/contact"
                                    onClick={closeMenu}
                                    className="text-gray-700 hover:text-red-700 transition-colors py-2">
                                    Contact
                                </Link>
                                <Link
                                    href="/contact"
                                    onClick={closeMenu}
                                    className="bg-red-700 text-white px-6 py-2 hover:bg-red-800 transition-colors font-medium leading-tight text-center">
                                    Devis Gratuit
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

