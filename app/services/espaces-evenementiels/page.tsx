import Image from 'next/image';
import ContactForm from '../../contact/ContactForm';

export default function EspacesEvenementiels() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-[160px] pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                            Espaces Événementiels
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                            Espaces événementiels et culturels, où le sol doit
                            être à la fois résistant, esthétique et sécurisant.
                            Solutions sur mesure pour tous vos projets.
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
                            Découvrez nos réalisations pour divers espaces :
                            salles de sport, espaces événementiels, centres
                            culturels et bien d&apos;autres.
                        </p>
                    </div>
                    {/* Mobile/Tablette: 2 en haut, 1 en bas */}
                    <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:hidden">
                        {/* 2 photos en haut */}
                        <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center">
                            <div className="relative w-38 h-38 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src="/assets/moquette-openspace-1.png"
                                    alt="Réalisation moquette salle de sport"
                                    fill
                                    sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 288px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-38 h-38 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src="/assets/gym-moquette-2.jpg"
                                    alt="Réalisation moquette salle de sport"
                                    fill
                                    sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 288px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* 1 photo en bas centrée */}
                        <div className="relative w-38 h-38 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/moquette-openspace-2.png"
                                alt="Réalisation moquette salle de sport"
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
                                src="/assets/moquette-openspace-1.png"
                                alt="Réalisation moquette salle de sport"
                                fill
                                sizes="288px, 320px"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/gym-moquette-2.jpg"
                                alt="Réalisation moquette salle de sport"
                                fill
                                sizes="288px, 320px"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/moquette-openspace-2.png"
                                alt="Réalisation moquette salle de sport"
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

            {/* Description Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-sm sm:text-base text-gray-700 space-y-4 text-center md:text-left">
                        <p>
                            Dans les espaces événementiels et culturels, le
                            choix du sol est essentiel. Il doit être résistant,
                            capable de supporter un fort passage, tout en
                            restant esthétique et sécurisant pour tous les
                            visiteurs. Nos solutions sur mesure vous permettent
                            de concilier design, confort et fonctionnalité, tout
                            en s&apos;adaptant à la configuration de votre
                            espace.
                        </p>
                        <p>
                            Nous proposons des revêtements de sol spécialement
                            conçus pour :
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 md:ml-6">
                            <li>
                                Accueillir un flux important de visiteurs sans
                                altérer l&apos;apparence ou la durabilité du
                                sol.
                            </li>
                            <li>
                                Assurer la sécurité, grâce à des matériaux
                                antidérapants et conformes aux normes en
                                vigueur.
                            </li>
                            <li>
                                Créer une ambiance chaleureuse et élégante, en
                                jouant sur les textures, couleurs et motifs.
                            </li>
                            <li>
                                Faciliter l&apos;entretien et la maintenance,
                                pour des espaces toujours accueillants et
                                impeccables.
                            </li>
                        </ul>
                        <p>
                            Que ce soit pour des salles de spectacle, galeries,
                            auditoriums ou centres d&apos;exposition, nous vous
                            accompagnons pour choisir le revêtement le mieux
                            adapté à vos besoins, alliant performance et style.
                            Chaque projet bénéficie d&apos;une solution
                            personnalisée, pensée pour durer et sublimer votre
                            espace.
                        </p>
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
