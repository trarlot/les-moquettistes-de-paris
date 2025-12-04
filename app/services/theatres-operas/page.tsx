import Image from 'next/image';
import ContactForm from '../../contact/ContactForm';

export default function TheatresOperas() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-[160px] pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                            Théâtres & Opéras
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                            Solutions acoustiques et esthétiques pour salles de
                            spectacle et espaces culturels. La moquette
                            participe à l&apos;acoustique et à l&apos;élégance
                            du lieu.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 bg-custom-beige lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8 sm:mb-12">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Nos réalisations
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center">
                            Découvrez nos réalisations pour les théâtres et
                            opéras, où chaque détail compte pour créer une
                            expérience acoustique et visuelle exceptionnelle.
                        </p>
                    </div>
                    {/* Mobile/Tablette: 2 en haut, 1 en bas */}
                    <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:hidden">
                        {/* 2 photos en haut */}
                        <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center">
                            <div className="relative w-38 h-38 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src="/assets/theatre-moquette-1.jpg"
                                    alt="Réalisation moquette théâtre"
                                    fill
                                    sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 288px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-38 h-38 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src="/assets/theatre-moquette-2.jpg"
                                    alt="Réalisation moquette théâtre"
                                    fill
                                    sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 288px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* 1 photo en bas centrée */}
                        <div className="relative w-38 h-38 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/theatre-moquette-3.jpg"
                                alt="Réalisation moquette théâtre"
                                fill
                                sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 288px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    {/* Desktop: 3 photos côte à côte */}
                    <div className="hidden lg:flex gap-6 xl:gap-8 justify-center items-center">
                        <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/theatre-moquette-1.jpg"
                                alt="Réalisation moquette théâtre"
                                fill
                                sizes="288px, 320px"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/theatre-moquette-2.jpg"
                                alt="Réalisation moquette théâtre"
                                fill
                                sizes="288px, 320px"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/theatre-moquette-3.jpg"
                                alt="Réalisation moquette théâtre"
                                fill
                                sizes="288px, 320px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-700 font-semibold text-center mt-8 sm:mt-12">
                        Déplacement gratuit pour diagnostic, devis et conseil.
                    </p>
                </div>
            </section>
            {/* Rubrique Moquette en lé Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                        <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/assets/moquette-rouge.png"
                                alt="Moquette en lé - Rouleaux de 2 à 4 mètres"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center md:text-left">
                                La moquette en lé
                            </h2>
                            <div className="text-sm sm:text-base text-gray-600 space-y-4 text-center md:text-left">
                                <p>
                                    La moquette en lé, proposée en rouleaux de 2
                                    à 4 mètres de largeur, est la solution
                                    idéale pour habiller les sols avec élégance
                                    et continuité. Grâce à ses grandes
                                    dimensions, elle permet de couvrir de vastes
                                    surfaces avec très peu de joints, offrant un
                                    rendu uniforme, chaleureux et esthétique.
                                    Très appréciée dans les espaces de vie comme
                                    les chambres ou les salons, elle convient
                                    également aux environnements professionnels
                                    grâce à son excellent confort acoustique et
                                    thermique.
                                </p>
                                <p>
                                    Disponible dans une large variété de styles
                                    — velours, bouclée, structurée, unie ou à
                                    motifs — la moquette en lé s&apos;adapte à
                                    toutes les ambiances et à tous les niveaux
                                    d&apos;usage. Selon les besoins du projet,
                                    elle peut être posée en pose collée, en pose
                                    tendue sur thibaude pour un confort haut de
                                    gamme, ou en pose semi-libre pour les pièces
                                    à fréquentation modérée.
                                </p>
                                <p>
                                    Choisir une moquette en lé, c&apos;est opter
                                    pour un revêtement confortable, durable et
                                    raffiné, idéal pour créer une atmosphère
                                    cosy dans les intérieurs résidentiels comme
                                    dans les lieux professionnels.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section
                id="contact"
                className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-custom-beige">
                <div className="max-w-4xl mx-auto">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}
