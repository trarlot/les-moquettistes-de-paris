import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-40 flex items-center h-[80vh] pb-20 px-6 lg:px-8 bg-white0">
                <div className="grid max-w-7xl mx-auto md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Expert en pose de moquettes pour professionnels
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Solutions sur-mesure pour vos espaces
                            professionnels. Qualité irréprochable, respect des
                            délais et service haut de gamme.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center bg-red-700 text-white px-8 py-3 leading-none hover:bg-red-800 transition-colors font-medium text-center">
                                Demander un Devis
                            </a>
                            <a
                                href="/services"
                                className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-3 leading-none hover:border-red-700 hover:text-red-700 transition-colors font-medium text-center">
                                Nos Services
                            </a>
                        </div>
                    </div>
                    <div className="relative h-96 bg-gray-200 overflow-hidden">
                        <Image
                            src="/assets/les-moquettistes-de-paris.jpg"
                            alt="Réalisation de pose de moquette professionnelle"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-6 bg-gray-50 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Nos Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Une gamme complète de services pour tous vos besoins
                            en revêtement de sol professionnel
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-red-100 flex rounded-full items-center justify-center mb-6">
                                <svg
                                    className="w-7 h-7 text-red-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Théâtres & Opéras
                            </h3>
                            <p className="text-gray-600">
                                Solutions acoustiques et esthétiques pour salles
                                de spectacle et espaces culturels.
                            </p>
                        </div>

                        <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-red-100 flex rounded-full items-center justify-center mb-6">
                                <svg
                                    className="w-7 h-7 text-red-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Hôtellerie & Restauration
                            </h3>
                            <p className="text-gray-600">
                                Revêtements durables pour hôtels, restaurants et
                                établissements recevant du public.
                            </p>
                        </div>

                        <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-red-100 flex rounded-full items-center justify-center mb-6">
                                <svg
                                    className="w-7 h-7 text-red-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Banques & Entreprises
                            </h3>
                            <p className="text-gray-600">
                                Espaces professionnels et institutionnels avec
                                exigences de sécurité et d&apos;image.
                                Revêtements adaptés aux bureaux, open spaces,
                                agences bancaires et espaces d&apos;entreprise.
                            </p>
                        </div>

                        <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-red-100 flex rounded-full items-center justify-center mb-6">
                                <svg
                                    className="w-7 h-7 text-red-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Bijouteries de Luxe
                            </h3>
                            <p className="text-gray-600">
                                Revêtements haut de gamme pour boutiques de luxe
                                et espaces d&apos;exposition précieux.
                            </p>
                        </div>

                        <div className="bg-white p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-red-100 flex rounded-full items-center justify-center mb-6">
                                <svg
                                    className="w-7 h-7 text-red-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Salles de Sport
                            </h3>
                            <p className="text-gray-600">
                                Solutions résistantes et antidérapantes pour
                                centres de fitness et espaces sportifs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Avantages Section */}
            <section id="avantages" className="py-20 px-6 lg:px-8 ">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Pourquoi Nous Choisir
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            L&apos;excellence au service de vos projets
                            professionnels
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white  text-2xl font-bold">
                                    15+
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Années d&apos;Expérience
                            </h3>
                            <p className="text-gray-600">
                                Plus de 500 chantiers réalisés avec succès
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Qualité Certifiée
                            </h3>
                            <p className="text-gray-600">
                                Certifications professionnelles et garantie
                                décennale
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Respect des Délais
                            </h3>
                            <p className="text-gray-600">
                                Planning rigoureux et interventions planifiées
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Équipe Qualifiée
                            </h3>
                            <p className="text-gray-600">
                                Poseurs expérimentés et formés en continu
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Témoignages Section */}
            <section id="temoignages" className="py-20 px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Ce que disent nos clients
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 shadow-sm border border-gray-200">
                            <svg
                                className="w-16 h-16 text-gray-300 mb-4 "
                                fill="currentColor"
                                style={{ transform: 'scaleX(-1)' }}
                                viewBox="0 0 24 24">
                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                            </svg>
                            <p className="text-gray-600 text-lg">
                                Travail impeccable et équipe très
                                professionnelle. Ils ont su respecter nos
                                contraintes d&apos;horaires et le résultat est
                                au-delà de nos attentes.
                            </p>
                            <svg
                                className="w-16 h-16 text-gray-300 mt-4 ml-auto"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                            </svg>
                        </div>

                        <div className="bg-white p-8 shadow-sm border border-gray-200">
                            <svg
                                className="w-16 h-16 text-gray-300 mb-4"
                                fill="currentColor"
                                style={{ transform: 'scaleX(-1)' }}
                                viewBox="0 0 24 24">
                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                            </svg>
                            <p className="text-gray-600 text-lg">
                                Un partenaire fiable pour notre groupe. 3
                                projets réalisés avec eux, toujours avec la même
                                qualité de service et de finition.
                            </p>
                            <svg
                                className="w-16 h-16 text-gray-300 mt-4 ml-auto"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                            </svg>
                        </div>

                        <div className="bg-white p-8 shadow-sm border border-gray-200">
                            <svg
                                className="w-16 h-16 text-gray-300 mb-4"
                                fill="currentColor"
                                style={{ transform: 'scaleX(-1)' }}
                                viewBox="0 0 24 24">
                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                            </svg>
                            <p className="text-gray-600 text-lg">
                                Réactivité, conseil et expertise. Pro Moquette
                                nous a accompagné sur le choix des matériaux et
                                la pose a été réalisée en un temps record.
                            </p>
                            <svg
                                className="w-16 h-16 text-gray-300 mt-4 ml-auto"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section
                id="contact"
                className="py-20 px-6 lg:px-8 bg-gradient-to-br from-red-600 to-red-700">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Prêt à Démarrer Votre Projet ?
                    </h2>
                    <p className="text-xl text-red-100 mb-8">
                        Obtenez un devis gratuit et personnalisé sous 24h
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+33123456789"
                            className="bg-white text-red-700 px-8 py-4 hover:bg-gray-100 transition-colors font-medium">
                            📞 01 23 45 67 89
                        </a>
                        <a
                            href="mailto:contact@promoquette.fr"
                            className="bg-red-600 text-white px-8 py-4 hover:bg-red-500 transition-colors font-medium">
                            ✉️ contact@promoquette.fr
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-white text-xl font-bold mb-4">
                                Pro Moquette
                            </h3>
                            <p className="text-sm">
                                Votre expert en pose de moquette professionnelle
                                depuis 2010.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">
                                Services
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors">
                                        Bureaux
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors">
                                        Hôtels
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors">
                                        Commerces
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors">
                                        Rénovation
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">
                                Entreprise
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors">
                                        À propos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors">
                                        Certifications
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors">
                                        Garanties
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">
                                Horaires
                            </h4>
                            <p className="text-sm mb-2">Lundi - Vendredi</p>
                            <p className="text-sm mb-4">8h00 - 18h00</p>
                            <p className="text-sm">Interventions possibles</p>
                            <p className="text-sm">le weekend sur demande</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                        <p>&copy; 2025 Pro Moquette. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
