import Image from 'next/image';
import ContactForm from '../../components/ContactForm';
import MoquetteEnLe from '../../components/MoquetteEnLe';
import Dalle from '../../components/Dalle';
import Realisation from '../../components/Realisation';

export default function Restauration() {
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
                            Restauration
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-fade-up
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                            Où confort, chaleur et durabilité doivent cohabiter.
                            Revêtements adaptés aux restaurants et
                            établissements de restauration.
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
                            Découvrez nos réalisations pour la restauration, où
                            chaque espace doit allier esthétique, confort et
                            résistance aux passages intensifs.
                        </p>
                    </div>
                    <Realisation
                        image1="/assets/restaurant-moquette-1.jpg"
                        image2="/assets/restaurant-moquette-2.jpg"
                        image3="/assets/restaurant-moquette-3.jpg"
                        alt1="Réalisation moquette restaurant"
                        alt2="Réalisation moquette restaurant"
                        alt3="Réalisation moquette restaurant"
                    />
                    <p
                        data-aos="fade-up"
                        data-fade-up
                        className="text-sm sm:text-base md:text-base lg:text-base text-gray-700 font-semibold text-center mt-8 sm:mt-12">
                        Déplacement gratuit pour diagnostic, devis et conseil.
                    </p>
                </div>
            </section>

            {/* Rubrique Lame - LVT Elite Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-custom-beige">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start mb-6 sm:mb-8">
                        <div data-aos="fade-up">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center md:text-left">
                                L&apos;excellence au sol, signée Elite
                            </h2>
                            <div className="text-sm sm:text-base text-gray-700 space-y-4 text-center md:text-left">
                                <p>
                                    Le produit{' '}
                                    <strong>LVT DRYBACK ACOUSTIC 55</strong>,
                                    appartient à la collection{' '}
                                    <strong>ELITE</strong> de chez{' '}
                                    <strong>BALSAN</strong>. C&apos;est un
                                    revêtement de sol vinyle, décoratif,
                                    flexible. Il est catégorisé comme non chargé
                                    de Groupe T d&apos;abrasion, et est
                                    disponible en trois formats le premier, en
                                    lame de format 18,42 x 121,92 cm, le second
                                    est un format pour la pose en bâton rompu de
                                    10,16 x 60,96 cm et le dernier un format de
                                    dalle rectangulaire de 45,72 x 91,44 cm.
                                </p>
                                <p>
                                    Il est formé d&apos;une couche d&apos;usure
                                    de 0,55 mm, d&apos;un film décor et
                                    d&apos;une technologie multicouche composée
                                    d&apos;une couche intermédiaire confort
                                    combinée à une couche compacte afin
                                    d&apos;allier confort à la marche et
                                    robustesse. Le produit intègre une
                                    sous-couche acoustique de 1 mm lui
                                    prodiguant une absorption de 18dB.
                                    L&apos;épaisseur totale est donc de 3,5 mm.
                                </p>
                                <p>
                                    Il bénéficie d&apos;un traitement de surface
                                    polyuréthane réticulé (UltraProtect)
                                    facilitant l&apos;entretien et renforçant sa
                                    résistance à la micro-rayure, le protégeant
                                    durant toute sa durée de vie.
                                </p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/assets/lame2.jpg"
                                alt="LVT DRYBACK ACOUSTIC 55 - Collection Elite Balsan"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="text-sm sm:text-base text-gray-700 space-y-4 text-center md:text-left">
                        <p>
                            Cette collection comprend 8 références maintenue en
                            stock et 12 disponibles à la commande.
                        </p>
                        <p>
                            La LVT DRYBACK ACOUSTIC 55 est un produit en pose
                            collée permettant une pose rapide et résistante
                            grâce à l&apos;utilisation de colle permanente. Il
                            convient à une installation dans des locaux de type
                            U3P3E2C2. Il est classé Bfl- s1 selon la norme feu
                            EN 13501-1.
                        </p>
                        <p>
                            La collection ELITE ne contient pas de phtalate. Le
                            produit est 100% recyclable et contient 25% de
                            contenu recyclé. Il est conforme à la réglementation
                            REACH. Les émissions dans l&apos;air de TVOC à 28
                            jours (NF EN 16000) sont &lt; 10 pg/m³ et sont
                            classées A+ (la meilleure classe) dans le cadre de
                            l&apos;étiquetage sanitaire.
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
