import Image from 'next/image';

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Nos Services
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Une gamme complète de services pour tous vos besoins
                            en revêtement de sol professionnel
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Théâtres & Opéras */}
            <section className="py-20 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Théâtres & Opéras
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl">
                            Solutions acoustiques et esthétiques pour salles de
                            spectacle et espaces culturels.
                        </p>
                    </div>
                    <div className="flex relative h-80 -mx-3">
                        <div className="relative flex-1 mx-3 overflow-visible group cursor-pointer transition-all duration-300 hover:flex-[3] group-hover:z-20">
                            <div
                                className="relative h-full transition-all duration-300"
                                style={{
                                    clipPath:
                                        'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
                                }}>
                                <Image
                                    src="/assets/theatre-moquette-1.jpg"
                                    alt="Réalisation moquette théâtre"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-bottom"
                                />
                            </div>
                        </div>
                        <div className="relative flex-1 mx-3 overflow-visible group cursor-pointer transition-all duration-300 hover:flex-[2] group-hover:z-20">
                            <div
                                className="relative h-full transition-all duration-300"
                                style={{
                                    clipPath:
                                        'polygon(15% 0, 100% 0, 85% 100%, 0 100%)',
                                }}>
                                <Image
                                    src="/assets/theatre-moquette-2.jpg"
                                    alt="Réalisation moquette théâtre"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-bottom"
                                />
                            </div>
                        </div>
                        <div className="relative flex-1 mx-3 overflow-visible group cursor-pointer transition-all duration-300 hover:flex-[2] group-hover:z-20">
                            <div
                                className="relative h-full transition-all duration-300"
                                style={{
                                    clipPath:
                                        'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
                                }}>
                                <Image
                                    src="/assets/theatre-moquette-3.jpg"
                                    alt="Réalisation moquette théâtre"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Hôtellerie & Restauration */}
            <section className="py-20 px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Hôtellerie & Restauration
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl">
                            Revêtements durables pour hôtels, restaurants et
                            établissements recevant du public.
                        </p>
                    </div>
                    <div className="flex relative h-80 -mx-3">
                        <div className="relative flex-1 mx-3 overflow-visible group cursor-pointer transition-all duration-300 hover:flex-[3] group-hover:z-20">
                            <div
                                className="relative h-full transition-all duration-300"
                                style={{
                                    clipPath:
                                        'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
                                }}>
                                <Image
                                    src="/assets/hotel-moquette-1.jpg"
                                    alt="Réalisation moquette hôtellerie"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-bottom   "
                                />
                            </div>
                        </div>
                        <div className="relative flex-1 mx-3 overflow-visible group cursor-pointer transition-all duration-300 hover:flex-[2] group-hover:z-20">
                            <div
                                className="relative h-full transition-all duration-300"
                                style={{
                                    clipPath:
                                        'polygon(15% 0, 100% 0, 85% 100%, 0 100%)',
                                }}>
                                <Image
                                    src="/assets/hotel-moquette-2.jpg"
                                    alt="Réalisation moquette hôtellerie"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-bottom"
                                />
                            </div>
                        </div>
                        <div className="relative flex-1 mx-3 overflow-visible group cursor-pointer transition-all duration-300 hover:flex-[2] group-hover:z-20">
                            <div
                                className="relative h-full transition-all duration-300"
                                style={{
                                    clipPath:
                                        'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
                                }}>
                                <Image
                                    src="/assets/hotel-moquette-3.jpg"
                                    alt="Réalisation moquette hôtellerie"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Salles de Sport */}
            <section className="py-20 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Salles de Sport
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl">
                            Solutions résistantes et antidérapantes pour centres
                            de fitness et espaces sportifs.
                        </p>
                    </div>
                    <div className="flex relative h-80 -mx-3">
                        <div className="relative flex-1 mx-3 overflow-visible group cursor-pointer transition-all duration-300 hover:flex-[3] group-hover:z-20">
                            <div
                                className="relative h-full transition-all duration-300"
                                style={{
                                    clipPath:
                                        'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
                                }}>
                                <Image
                                    src="/assets/gym-moquette-1.jpg"
                                    alt="Réalisation moquette salle de sport"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-bottom"
                                />
                            </div>
                        </div>
                        <div className="relative flex-1 mx-3 overflow-visible group cursor-pointer transition-all duration-300 hover:flex-[2] group-hover:z-20">
                            <div
                                className="relative h-full transition-all duration-300"
                                style={{
                                    clipPath:
                                        'polygon(15% 0, 100% 0, 85% 100%, 0 100%)',
                                }}>
                                <Image
                                    src="/assets/gym-moquette-2.jpg"
                                    alt="Réalisation moquette salle de sport"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-bottom"
                                />
                            </div>
                        </div>
                        <div className="relative flex-1 mx-3 overflow-visible group cursor-pointer transition-all duration-300 hover:flex-[2] group-hover:z-20">
                            <div
                                className="relative h-full transition-all duration-300"
                                style={{
                                    clipPath:
                                        'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
                                }}>
                                <Image
                                    src="/assets/gym-moquette-3.jpg"
                                    alt="Réalisation moquette salle de sport"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Banques & Entreprises */}
            <section className="py-20 px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Banques & Entreprises
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl">
                            Espaces professionnels et institutionnels avec
                            exigences de sécurité et d&apos;image. Revêtements
                            adaptés aux bureaux, open spaces, agences bancaires
                            et espaces d&apos;entreprise. Alliez confort
                            acoustique, sécurité et esthétique pour vos
                            collaborateurs et visiteurs.
                        </p>
                    </div>
                    <div className="flex relative h-80 -mx-3">
                        <div className="relative flex-1 mx-3 overflow-visible group cursor-pointer transition-all duration-300 hover:flex-[3] group-hover:z-20">
                            <div
                                className="relative h-full transition-all duration-300"
                                style={{
                                    clipPath:
                                        'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
                                }}>
                                <Image
                                    src="/assets/start-up-moquette-1.jpg"
                                    alt="Réalisation moquette banque et entreprise"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-bottom"
                                />
                            </div>
                        </div>
                        <div className="relative flex-1 mx-3 overflow-visible group cursor-pointer transition-all duration-300 hover:flex-[2] group-hover:z-20">
                            <div
                                className="relative h-full transition-all duration-300"
                                style={{
                                    clipPath:
                                        'polygon(15% 0, 100% 0, 85% 100%, 0 100%)',
                                }}>
                                <Image
                                    src="/assets/start-up-moquette-2.jpg"
                                    alt="Réalisation moquette banque et entreprise"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-bottom"
                                />
                            </div>
                        </div>
                        <div className="relative flex-1 mx-3 overflow-visible group cursor-pointer transition-all duration-300 hover:flex-[2] group-hover:z-20">
                            <div
                                className="relative h-full transition-all duration-300"
                                style={{
                                    clipPath:
                                        'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
                                }}>
                                <Image
                                    src="/assets/start-up-moquette-3.jpeg"
                                    alt="Réalisation moquette banque et entreprise"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-red-600 to-red-700">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Besoin d&apos;un Devis Personnalisé ?
                    </h2>
                    <p className="text-xl text-red-100 mb-8">
                        Contactez-nous pour une étude gratuite de votre projet
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-white text-red-700 px-8 py-4 hover:bg-gray-100 transition-colors font-medium">
                            📞 Demander un Devis
                        </a>
                        <a
                            href="tel:+33123456789"
                            className="bg-red-600 text-white px-8 py-4 hover:bg-red-500 transition-colors font-medium">
                            ✉️ 01 23 45 67 89
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
