import Image from 'next/image';
import ContactForm from '../../contact/ContactForm';

export default function Bijouterie() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-[160px] pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                            Bijouterie
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                            Revêtements de sol élégants et raffinés pour les
                            bijouteries et joailleries. Créez une ambiance de
                            luxe et de prestige pour mettre en valeur vos
                            créations.
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
                            Découvrez nos réalisations pour les bijouteries et
                            joailleries, où l&apos;élégance et le raffinement
                            sont essentiels pour créer une expérience client
                            exceptionnelle.
                        </p>
                    </div>
                    {/* Mobile/Tablette: 2 en haut, 1 en bas */}
                    <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:hidden">
                        {/* 2 photos en haut */}
                        <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center">
                            <div className="relative w-38 h-38 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src="/assets/bijouterie-moquette-1.png"
                                    alt="Réalisation moquette bijouterie"
                                    fill
                                    sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 288px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-38 h-38 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src="/assets/bijouterie-moquette-2.png"
                                    alt="Réalisation moquette bijouterie"
                                    fill
                                    sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 288px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* 1 photo en bas centrée */}
                        <div className="relative w-38 h-38 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/bijouterie-moquette-3.png"
                                alt="Réalisation moquette bijouterie"
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
                                src="/assets/bijouterie-moquette-1.png"
                                alt="Réalisation moquette bijouterie"
                                fill
                                sizes="288px, 320px"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/bijouterie-moquette-2.png"
                                alt="Réalisation moquette bijouterie"
                                fill
                                sizes="288px, 320px"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/assets/bijouterie-moquette-3.png"
                                alt="Réalisation moquette bijouterie"
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
                            Dans les bijouteries et joailleries, chaque détail
                            compte pour créer une ambiance raffinée et luxueuse.
                            Le choix du sol est déterminant : il doit être
                            élégant, mettre en valeur vos créations, et résister
                            au passage fréquent des clients tout en restant
                            facile à entretenir.
                        </p>
                        <p>
                            Nos solutions de revêtements de sol sur mesure vous
                            permettent de :
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 md:ml-6">
                            <li>
                                Sublimer vos espaces grâce à des matériaux et
                                finitions de qualité, reflétant l&apos;image de
                                prestige de votre boutique.
                            </li>
                            <li>
                                Assurer confort et sécurité pour vos clients et
                                votre personnel, avec des surfaces
                                antidérapantes et résistantes.
                            </li>
                            <li>
                                Harmoniser le design intérieur, en accord avec
                                vos vitrines, mobiliers et éclairages, pour
                                créer une atmosphère chaleureuse et élégante.
                            </li>
                            <li>
                                Faciliter l&apos;entretien quotidien, pour un
                                espace toujours impeccable et accueillant.
                            </li>
                        </ul>
                        <p>
                            Que vous souhaitiez un style contemporain, classique
                            ou audacieux, nous concevons des sols qui allient
                            esthétique, durabilité et prestige, parfaitement
                            adaptés à l&apos;univers du luxe et de la
                            joaillerie.
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
