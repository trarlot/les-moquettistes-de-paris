import Image from 'next/image';
import ContactForm from '../../contact/ContactForm';

export default function BanquesEntreprises() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-[160px] pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-red-700">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
                            Banques & Entreprises
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto">
                            Espaces professionnels et institutionnels avec
                            exigences de sécurité et d&apos;image. Revêtements
                            adaptés aux bureaux, open spaces, agences bancaires
                            et espaces d&apos;entreprise.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div className="relative h-64 sm:h-80 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/assets/start-up-moquette-1.jpg"
                                alt="Réalisation moquette banque et entreprise"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover object-bottom"
                            />
                        </div>
                        <div className="relative h-64 sm:h-80 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/assets/start-up-moquette-2.jpg"
                                alt="Réalisation moquette banque et entreprise"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover object-bottom"
                            />
                        </div>
                        <div className="relative h-64 sm:h-80 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/assets/start-up-moquette-3.jpeg"
                                alt="Réalisation moquette banque et entreprise"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover object-bottom"
                            />
                        </div>
                    </div>
                    <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-700 font-semibold text-center mt-8 sm:mt-12">
                        Déplacement gratuit pour diagnostic, devis et conseil.
                    </p>
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
