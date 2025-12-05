import ContactForm from '../../components/ContactForm';
import MoquetteEnLe from '../../components/MoquetteEnLe';
import Dalle from '../../components/Dalle';
import Realisation from '../../components/Realisation';

export default function Cinema() {
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
                            Cinéma
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-fade-up
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                            Solutions acoustiques et esthétiques pour salles de
                            cinéma. La moquette participe à l&apos;acoustique et
                            crée une ambiance chaleureuse pour une expérience
                            cinématographique optimale.
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
                            Découvrez nos réalisations pour les salles de
                            cinéma, où chaque détail compte pour créer une
                            expérience acoustique et visuelle exceptionnelle.
                        </p>
                    </div>
                    <Realisation
                        image1="/assets/cinema-moquette-1.jpg"
                        image2="/assets/cinema-moquette-2.jpg"
                        image3="/assets/cinema-moquette-3.jpg"
                        alt1="Réalisation moquette cinéma"
                        alt2="Réalisation moquette cinéma"
                        alt3="Réalisation moquette cinéma"
                    />
                    <p
                        data-aos="fade-up"
                        data-fade-up
                        className="text-sm sm:text-base md:text-base lg:text-base text-gray-700 font-semibold text-center mt-8 sm:mt-12">
                        Déplacement gratuit pour diagnostic, devis et conseil.
                    </p>
                </div>
            </section>

            <MoquetteEnLe bgColor="beige" />
            <Dalle reverse={true} bgColor="white" />
            {/* Description Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-custom-beige">
                <div className="max-w-4xl mx-auto">
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-sm sm:text-base text-gray-700 space-y-4 text-center md:text-left">
                        <p>
                            Dans les salles de cinéma, le sol joue un rôle clé
                            dans le confort, la sécurité et l&apos;acoustique.
                            Chaque détail compte pour offrir aux spectateurs une
                            expérience immersive, où design, confort et
                            performance se conjuguent parfaitement.
                        </p>
                        <p>
                            Nos solutions de revêtements de sol sur mesure
                            permettent de :
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 md:ml-6">
                            <li>
                                Optimiser l&apos;acoustique grâce à des
                                matériaux absorbants, réduisant les
                                réverbérations et améliorant la qualité sonore.
                            </li>
                            <li>
                                Assurer confort et sécurité, avec des surfaces
                                antidérapantes adaptées aux flux de spectateurs.
                            </li>
                            <li>
                                Créer une ambiance élégante et immersive, en
                                harmonie avec l&apos;éclairage, les sièges et la
                                décoration de la salle.
                            </li>
                            <li>
                                Faciliter l&apos;entretien, pour des espaces
                                toujours propres et accueillants, même en cas de
                                forte fréquentation.
                            </li>
                        </ul>
                        <p>
                            Que ce soit pour des salles traditionnelles,
                            multiplex ou auditoriums premium, nous concevons des
                            sols qui allient esthétique, durabilité et
                            performance, pour sublimer l&apos;expérience
                            cinématographique de vos spectateurs.
                        </p>
                    </div>
                </div>
            </section>

            <ContactForm />
        </div>
    );
}
