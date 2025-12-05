import ContactForm from '../../components/ContactForm';
import MoquetteEnLe from '../../components/MoquetteEnLe';
import Dalle from '../../components/Dalle';
import Realisation from '../../components/Realisation';

export default function Bijouterie() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-[160px] pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-custom-beige">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1
                            data-aos="fade-up"
                            data-fade-up
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                            Bijouterie
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-fade-up
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                            Revêtements de sol élégants et raffinés pour les
                            bijouteries et joailleries. Créez une ambiance de
                            luxe et de prestige pour mettre en valeur vos
                            créations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8 sm:mb-12">
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Nos réalisations
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center">
                            Découvrez nos réalisations pour les bijouteries et
                            joailleries, où l&apos;élégance et le raffinement
                            sont essentiels pour créer une expérience client
                            exceptionnelle.
                        </p>
                    </div>
                    <Realisation
                        image1="/assets/bijouterie-moquette-1.png"
                        image2="/assets/bijouterie-moquette-2.png"
                        image3="/assets/bijouterie-moquette-3.png"
                        alt1="Réalisation moquette bijouterie"
                        alt2="Réalisation moquette bijouterie"
                        alt3="Réalisation moquette bijouterie"
                    />
                    <p
                        data-aos="fade-up"
                        data-fade-up
                        className="text-sm sm:text-base md:text-base lg:text-base text-gray-700 font-semibold text-center mt-8 sm:mt-12">
                        Déplacement gratuit pour diagnostic, devis et conseil.
                    </p>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-custom-beige">
                <div className="max-w-4xl mx-auto">
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-sm sm:text-base text-gray-700 space-y-4 text-center md:text-left">
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

            <MoquetteEnLe bgColor="white" />
            <Dalle reverse={true} bgColor="beige" />

            <ContactForm />
        </div>
    );
}
