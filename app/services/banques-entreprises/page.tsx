import Image from 'next/image';
import ContactForm from '../../contact/ContactForm';

export default function BanquesEntreprises() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-[160px] pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                            Banques & Entreprises
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                            Espaces professionnels et institutionnels avec
                            exigences de sécurité et d&apos;image. Revêtements
                            adaptés aux bureaux, open spaces, agences bancaires
                            et espaces d&apos;entreprise.
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
                            Découvrez nos réalisations pour les banques et
                            entreprises, où confort acoustique, sécurité et
                            esthétique se conjuguent pour vos collaborateurs et
                            visiteurs.
                        </p>
                    </div>
                    {/* Mobile/Tablette: 2 en haut, 1 en bas */}
                    <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:hidden">
                        {/* 2 photos en haut */}
                        <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center">
                            <div className="relative w-38 h-38 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src="/assets/start-up-moquette-1.jpg"
                                    alt="Réalisation moquette banque et entreprise"
                                    fill
                                    sizes="500px, 500px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-38 h-38 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src="/assets/start-up-moquette-2.jpg"
                                    alt="Réalisation moquette banque et entreprise"
                                    fill
                                    sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 288px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* 1 photo en bas centrée */}
                        <div className="relative w-38 h-38 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/start-up-moquette-3.jpeg"
                                alt="Réalisation moquette banque et entreprise"
                                fill
                                sizes="(max-width: 640px) 160px, (max-width: 768px) 500px, 500px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    {/* Desktop: 3 photos côte à côte */}
                    <div className="hidden lg:flex gap-6 xl:gap-8 justify-center items-center">
                        <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/start-up-moquette-1.jpg"
                                alt="Réalisation moquette banque et entreprise"
                                fill
                                sizes="288px, 320px"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/start-up-moquette-2.jpg"
                                alt="Réalisation moquette banque et entreprise"
                                fill
                                sizes="288px, 320px"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/start-up-moquette-3.jpeg"
                                alt="Réalisation moquette banque et entreprise"
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
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                        <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/assets/dalle2.jpg"
                                alt="César Dalle - Moquette structurée Haute Couture Balsan"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center md:text-left">
                                Dalle de moquette structurée Haute Couture, en
                                fils teint masse Econyl® pour les espaces
                                premiums
                            </h2>
                            <div className="text-sm sm:text-base text-gray-600 space-y-4 text-center md:text-left">
                                <p>
                                    Disponible en plusieurs coloris,{' '}
                                    <strong>César Dalle </strong>
                                    trouve ses origines dans les motifs
                                    orientaux traditionnels. Designé par les
                                    stylistes Balsan, cette dalle de moquette 50
                                    x 50 cm aux effets estompés apporte design
                                    et élégance à tous vos espaces hôteliers de
                                    prestige (suites, espaces lounge, salles de
                                    réception...).
                                </p>
                                <p>
                                    Issu de la collection{' '}
                                    <strong>Carré Couture</strong>, ce motif est
                                    doté d&apos;une structure riche de
                                    1050gr/m². Alliant confort et résistance,
                                    César Dalle est parfaitement adapté aux
                                    zones à fort passage.
                                </p>
                                <p>
                                    Personnalisable dès 400 m², ce motif peut
                                    être décliné selon vos envies grâce à
                                    l&apos;outil{' '}
                                    <strong>Color My Brodery</strong>, qui
                                    propose 32 harmonies. Explorez notre Design
                                    Studio pour imaginer votre propre version du
                                    dessin César Dalle, et créez avec nos
                                    designers une dalle de transition sur
                                    mesure, disponible en format 50x50 cm ou en
                                    dalle géante 1x1 m.
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
