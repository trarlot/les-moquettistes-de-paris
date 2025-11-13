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
            </body>
        </html>
    );
}
