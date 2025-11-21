import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './contact/ContactForm';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-[160px] bg-custom-beige pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center md:text-left mb-6 sm:mb-10 font-playfair">
                        Les Moquettistes de Paris
                    </h1>
                    <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-8 items-center">
                        <div className="relative bg-gray-200 overflow-hidden w-full max-w-sm lg:max-w-md aspect-square shrink-0">
                            <Image
                                src="/assets/logo2.jpg"
                                alt="Réalisation de pose de moquette professionnelle"
                                className="object-cover w-full h-full"
                                width={600}
                                height={600}
                                priority
                            />
                        </div>
                        <div className="w-full">
                            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-black leading-tight mb-4 text-center md:text-left">
                                Une histoire d&apos;amitié et de savoir-faire
                            </h2>
                            <p className="text-sm sm:text-base md:text-base lg:text-base text-black mb-4 sm:mb-6 text-center md:text-left">
                                L&apos;histoire des Moquettistes de Paris
                                commence bien avant la création de
                                l&apos;entreprise. Elle débute par deux amis
                                d&apos;enfance qui, des années plus tard,
                                deviendront des entrepreneurs passionnés. Déjà à
                                la tête chacun de leur propre société - forgeant
                                une solide réputation dans le domaine des
                                revêtements de sièges pour Théâtres & Hôtellerie
                                pour la SARL Zimmermann et la rénovation des
                                espaces professionnels dans le bâtiment pour la
                                SAS Maison Cloteaux.
                            </p>
                            <p className="text-sm sm:text-base md:text-base lg:text-base text-black mb-4 sm:mb-6 text-center md:text-left">
                                Au fil du temps, leurs chemins professionnels
                                n&apos;ont cessé de se croiser. Ils partagent
                                les mêmes valeurs : le sens du détail, la
                                rigueur, le respect des engagements et un
                                profond attachement à la satisfaction de leurs
                                clients. Le marché évolue, les demandes
                                augmentent, et très vite apparaît une évidence :
                                unir leurs forces pour répondre encore mieux aux
                                attentes de leurs partenaires.
                            </p>
                            <p className="text-sm sm:text-base md:text-base lg:text-base text-black text-center md:text-left">
                                C&apos;est ainsi que naissent Les Moquettistes
                                de Paris, une entreprise spécialisée dans la
                                fourniture et la pose de moquette haut de gamme.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section
                id="expertise"
                className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center px-4">
                        Une expertise issue de décennies d&apos;expérience
                    </h2>
                    <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 text-center px-4">
                        Grâce à leurs parcours respectifs, ils maîtrisent
                        parfaitement les exigences des milieux professionnels où
                        la précision est essentielle :
                    </p>

                    {/* Grille 2x2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        {/* Théâtres */}
                        <Link
                            href="/services/theatres-operas"
                            className="group block w-full relative overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full h-56 sm:h-64 lg:h-80 overflow-hidden">
                                <Image
                                    src="/assets/theatre-moquette-1.jpg"
                                    alt="Réalisation moquette théâtre"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-bottom transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                    <h3 className="text-sm sm:text-base md:text-xl text-white leading-tight">
                                        <span className="font-bold">
                                            Théâtres :
                                        </span>{' '}
                                        où la moquette participe à
                                        l&apos;acoustique et à l&apos;élégance
                                        du lieu.
                                    </h3>
                                </div>
                            </div>
                        </Link>

                        {/* Restaurants */}
                        <Link
                            href="/services/restauration"
                            className="group block w-full relative overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full h-56 sm:h-64 lg:h-80 overflow-hidden">
                                <Image
                                    src="/assets/restaurant-moquette-2.jpg"
                                    alt="Réalisation moquette restaurant"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-bottom transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                    <h3 className="text-sm sm:text-base md:text-xl text-white leading-tight">
                                        <span className="font-bold">
                                            Restaurants :
                                        </span>{' '}
                                        Où confort, chaleur et durabilité
                                        doivent cohabiter.
                                    </h3>
                                </div>
                            </div>
                        </Link>

                        {/* Hôtellerie */}
                        <Link
                            href="/services/hotels-restaurants"
                            className="group block w-full relative overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full h-56 sm:h-64 lg:h-80 overflow-hidden">
                                <Image
                                    src="/assets/hotel-moquette-1.jpg"
                                    alt="Réalisation moquette hôtellerie"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-bottom transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                    <h3 className="text-sm sm:text-base md:text-xl text-white leading-tight">
                                        <span className="font-bold">
                                            Hôtellerie :
                                        </span>{' '}
                                        Où chaque espace doit refléter une
                                        identité et une expérience client
                                        irréprochables.
                                    </h3>
                                </div>
                            </div>
                        </Link>

                        {/* Espaces événementiels */}
                        <Link
                            href="/services/espaces-evenementiels"
                            className="group block w-full relative overflow-hidden rounded-lg  hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full h-56 sm:h-64 lg:h-80 overflow-hidden">
                                <Image
                                    src="/assets/gym-moquette-1.jpg"
                                    alt="Réalisation moquette événementiel"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-bottom transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                    <h3 className="text-sm sm:text-base md:text-xl text-white leading-tight">
                                        <span className="font-bold">
                                            Espaces événementiels et culturels :
                                        </span>{' '}
                                        Où le sol doit être à la fois résistant,
                                        esthétique et sécurisant.
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600 max-w-3xl mx-auto text-center px-4">
                        Leur savoir-faire leur permet de proposer un
                        accompagnement complet : du conseil à la sélection des
                        matériaux, jusqu&apos;à la pose minutieuse, en passant
                        par la création de solutions sur mesure adaptées aux
                        contraintes techniques de chaque lieu.
                    </p>
                </div>
            </section>

            {/* Rubrique Lame - LVT Elite Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-custom-beige">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start mb-6 sm:mb-8">
                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center md:text-left">
                                L&apos;excellence au sol, signée Elite
                            </h2>
                            <div className="text-sm sm:text-base text-gray-600 space-y-4 text-center md:text-left">
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
                        <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/assets/lame2.jpg"
                                alt="LVT DRYBACK ACOUSTIC 55 - Collection Elite Balsan"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 space-y-4 text-center md:text-left">
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

            {/* Rubrique Dalle - César Dalle Section */}
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
                                    <strong>César Dalle</strong>
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

            {/* Engagement Section */}
            <section
                id="engagement"
                className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-red-700">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 text-center px-4">
                        Un engagement commun : la qualité sans compromis
                    </h2>
                    <p className="text-sm sm:text-base md:text-base lg:text-base text-white max-w-3xl mx-auto mb-8 sm:mb-12 text-center px-4">
                        Les Moquettistes de Paris se distinguent par :
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
                        <div className="bg-white backdrop-blur-sm p-4 sm:p-6 border rounded-lg transition-all flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                                <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                    fill="none"
                                    stroke="red"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col flex-1">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1 sm:mb-2">
                                    Des matériaux sélectionnés avec exigence
                                </h3>
                                <p className="text-xs sm:text-sm text-black">
                                    Alliant design, durabilité et performance.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white backdrop-blur-sm p-4 sm:p-6 border rounded-lg transition-all flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                                <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                    fill="none"
                                    stroke="red"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col flex-1">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1 sm:mb-2">
                                    Une équipe qualifiée
                                </h3>
                                <p className="text-xs sm:text-sm text-black">
                                    Structurée autour d&apos;artisans
                                    expérimentés et passionnés.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white backdrop-blur-sm p-4 sm:p-6 border rounded-lg transition-all flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                                <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                    fill="none"
                                    stroke="red"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col flex-1">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1 sm:mb-2">
                                    Une organisation fiable
                                </h3>
                                <p className="text-xs sm:text-sm text-black">
                                    Permettant de respecter délais, budgets et
                                    exigences spécifiques.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white backdrop-blur-sm p-4 sm:p-6 border rounded-lg transition-all flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                                <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                    fill="none"
                                    stroke="red"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col flex-1">
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1 sm:mb-2">
                                    Une relation client basée sur la confiance
                                </h3>
                                <p className="text-xs sm:text-sm text-black">
                                    Construite sur la transparence et la
                                    communication.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transformation Section */}
            <section
                id="transformation"
                className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                    Transformer les espaces, sublimer les ambiances
                </h2>
                <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600 mb-4 sm:mb-6 px-4">
                    Chaque projet est abordé comme une nouvelle histoire à
                    écrire. Les Moquettistes de Paris s&apos;attachent à
                    comprendre l&apos;identité et les besoins du lieu afin de
                    créer une ambiance unique. Leur objectif : faire de votre
                    sol un élément clé de l&apos;expérience que vous proposez à
                    vos clients, visiteurs ou spectateurs.
                </p>
                <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-700 font-semibold px-4">
                    Déplacement gratuit pour diagnostic, devis et conseil.
                </p>
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
