import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    title: 'Les Moquettistes de Paris - Pose Professionnelle de Moquette',
    description:
        'Expert en pose de moquettes pour professionnels. Solutions sur-mesure pour bureaux, hôtels, espaces commerciaux. Qualité et fiabilité garanties.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${roboto.variable} font-sans antialiased`}>
                {/* Navigation */}
                <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex justify-between items-center ">
                            <div className="flex my-2 items-center">
                                <Link
                                    href="/"
                                    className="text-2xl font-bold text-gray-900">
                                    <Image
                                        src="/assets/logo.svg"
                                        alt="Les Moquettistes de Paris"
                                        width={120}
                                        height={120}
                                    />
                                </Link>
                            </div>
                            <div className="hidden md:flex space-x-8">
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
                            </div>
                            <Link
                                href="/contact"
                                className="bg-red-700 text-white px-6 py-2 hover:bg-red-800 transition-colors font-medium leading-tight">
                                Devis Gratuit
                            </Link>
                        </div>
                    </div>
                </nav>
                {children}
                {/* Footer */}
                <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-white text-xl font-bold mb-4">
                                    Les Moquettistes de Paris
                                </h3>
                                <p className="text-sm mb-4">
                                    Expert en pose de moquette professionnelle
                                    pour établissements prestigieux.
                                </p>
                                <div className="text-sm">
                                    <p className="mb-1">
                                        14 avenue de l&apos;opéra
                                    </p>
                                    <p className="mb-1">75001 Paris, France</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-4">
                                    Services
                                </h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link
                                            href="/services"
                                            className="hover:text-white transition-colors">
                                            Théâtres & Opéras
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services"
                                            className="hover:text-white transition-colors">
                                            Hôtellerie & Restauration
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services"
                                            className="hover:text-white transition-colors">
                                            Banques & Entreprises
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services"
                                            className="hover:text-white transition-colors">
                                            Salles de Sport
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-4">
                                    Navigation
                                </h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:text-white transition-colors">
                                            Accueil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services"
                                            className="hover:text-white transition-colors">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="hover:text-white transition-colors">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="hover:text-white transition-colors">
                                            Devis Gratuit
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-4">
                                    Horaires
                                </h4>
                                <p className="text-sm mb-2">Lundi - Vendredi</p>
                                <p className="text-sm mb-4">8h00 - 18h00</p>
                                <p className="text-sm">
                                    Interventions possibles
                                </p>
                                <p className="text-sm">
                                    le weekend sur demande
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                            <p>
                                &copy; 2025 Les Moquettistes de Paris. Tous
                                droits réservés.
                            </p>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
