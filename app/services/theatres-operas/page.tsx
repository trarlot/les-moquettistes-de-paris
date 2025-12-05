import ContactForm from '../../components/ContactForm';
import MoquetteEnLe from '../../components/MoquetteEnLe';
import Dalle from '../../components/Dalle';
import Realisation from '../../components/Realisation';

export default function TheatresOperas() {
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
                            Théâtres & Opéras
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-fade-up
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                            Solutions acoustiques et esthétiques pour salles de
                            spectacle et espaces culturels. La moquette
                            participe à l&apos;acoustique et à l&apos;élégance
                            du lieu.
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
                            data-fade-up
                            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Nos réalisations
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-fade-up
                            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center">
                            Découvrez nos réalisations pour les théâtres et
                            opéras, où chaque détail compte pour créer une
                            expérience acoustique et visuelle exceptionnelle.
                        </p>
                    </div>
                    <Realisation
                        image1="/assets/theatre-moquette-1.jpg"
                        image2="/assets/theatre-moquette-2.jpg"
                        image3="/assets/theatre-moquette-3.jpg"
                        alt1="Réalisation moquette théâtre"
                        alt2="Réalisation moquette théâtre"
                        alt3="Réalisation moquette théâtre"
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

            <ContactForm />
        </div>
    );
}
