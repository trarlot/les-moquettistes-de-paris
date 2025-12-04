import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './contact/ContactForm';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-[160px] bg-custom-beige pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl  sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black text-center lg:text-left mb-6 sm:mb-10 ">
                        Spécialiste en moquette pour professionnels
                    </h1>
                    <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-8 items-center">
                        <div className="relative  overflow-hidden w-full max-w-sm lg:max-w-md aspect-square shrink-0">
                            <Image
                                src="/assets/moquettistes-paris-logo.png"
                                alt="Réalisation de pose de moquette professionnelle"
                                className="object-cover w-full h-full"
                                width={600}
                                height={600}
                                priority
                            />
                        </div>
                        <div className="w-full">
                            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-black leading-tight mb-4 text-center lg:text-left">
                                Les Moquetistes de Paris – Une histoire de
                                maîtrise et de partenariat
                            </h2>
                            <p className="text-sm sm:text-base md:text-base lg:text-base text-black mb-4 sm:mb-6 text-center lg:text-left">
                                L’histoire des Moquetistes de Paris est avant
                                tout celle de deux professionnels issus du
                                terrain, amis depuis l’enfance et entrepreneurs
                                accomplis. Chacun a développé son expertise à la
                                tête de sa propre structure : la SARL
                                Zimmermann, spécialisée dans les revêtements de
                                sièges pour théâtres et hôtellerie, et la SAS
                                Maison Cloteaux, experte en rénovation d’espaces
                                professionnels.
                            </p>
                            <p className="text-sm sm:text-base md:text-base lg:text-base text-black mb-4 sm:mb-6 text-center lg:text-left">
                                Au fil des années, leurs expériences se sont
                                croisées sur de nombreux projets. Ils partagent
                                les mêmes exigences : précision du geste, sens
                                du détail, respect des engagements et priorité
                                donnée à la satisfaction client. Face à
                                l’évolution du marché et à la demande croissante
                                de solutions haut de gamme, l’idée d’allier
                                leurs compétences s’est imposée naturellement.
                            </p>
                            <p className="text-sm sm:text-base md:text-base lg:text-base text-black text-center lg:text-left">
                                C’est ainsi qu’est née l’entreprise Les
                                Moquetistes de Paris, dédiée à la fourniture et
                                à la pose de moquettes premium.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section
                id="expertise"
                className="py-12 sm:py-16 px-4 sm:px-6 bg-white lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center px-4">
                        Une expertise issue de décennies de terrain
                    </h2>
                    <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 text-center px-4">
                        Leur maîtrise technique répond parfaitement aux
                        exigences des environnements professionnels où la
                        qualité est essentielle :
                    </p>

                    {/* Mobile: Liste avec images rondes alternées gauche/droite en quinconce */}
                    <div className="md:hidden space-y-8 sm:space-y-12 mb-6 sm:mb-8">
                        {/* Théâtres - Cercle gauche, texte droite */}
                        <div className="flex flex-row items-center gap-4 max-w-[400px] sm:max-w-[500px] mx-auto  sm:gap-6">
                            <Link
                                href="/services/theatres-operas"
                                className="group shrink-0 hover:opacity-90 transition-opacity">
                                <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/theatre-moquette-1.jpg"
                                        alt="Réalisation moquette théâtre"
                                        fill
                                        sizes="500px 500px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                                    Théâtres
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    Où la moquette participe à l&apos;acoustique
                                    et à l&apos;élégance du lieu.
                                </p>
                            </div>
                        </div>

                        {/* Restaurants - Cercle droite, texte gauche */}
                        <div className="flex flex-row-reverse items-center max-w-[400px] sm:max-w-[500px] mx-auto  gap-4 sm:gap-6 mt-8 sm:mt-12">
                            <Link
                                href="/services/restauration"
                                className="group shrink-0 hover:opacity-90 transition-opacity">
                                <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/restaurant-moquette-2.jpg"
                                        alt="Réalisation moquette restaurant"
                                        fill
                                        sizes="500px 500px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                                    Restaurants
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    Où confort, chaleur et durabilité doivent
                                    cohabiter.
                                </p>
                            </div>
                        </div>

                        {/* Hôtellerie - Cercle gauche, texte droite */}
                        <div className="flex flex-row items-center max-w-[400px] sm:max-w-[500px] mx-auto  gap-4 sm:gap-6">
                            <Link
                                href="/services/hotels-restaurants"
                                className="group shrink-0 hover:opacity-90 transition-opacity">
                                <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/hotel-moquette-1.jpg"
                                        alt="Réalisation moquette hôtellerie"
                                        fill
                                        sizes="500px 500px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                                    Hôtellerie
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    Où chaque espace doit refléter une identité
                                    et une expérience client irréprochables.
                                </p>
                            </div>
                        </div>

                        {/* Espaces événementiels - Cercle droite, texte gauche */}
                        <div className="flex flex-row-reverse items-center max-w-[400px] sm:max-w-[500px] mx-auto  gap-4 sm:gap-6 mt-8 sm:mt-12">
                            <Link
                                href="/services/espaces-evenementiels"
                                className="group shrink-0 hover:opacity-90 transition-opacity">
                                <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/moquette-openspace-1.png"
                                        alt="Réalisation moquette événementiel"
                                        fill
                                        sizes="500px 500px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                                    Espaces événementiels et culturels
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    Où le sol doit être à la fois résistant,
                                    esthétique et sécurisant.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop: Grille 2x2 avec bulles rondes */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 mb-6 sm:mb-8">
                        {/* Théâtres */}
                        <div className="flex flex-col items-center">
                            <Link
                                href="/services/theatres-operas"
                                className="group hover:opacity-90 transition-opacity mb-4">
                                <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/theatre-moquette-1.jpg"
                                        alt="Réalisation moquette théâtre"
                                        fill
                                        sizes="(max-width: 1024px) 192px, 256px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="text-center">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                                    Théâtres
                                </h3>
                                <p className="text-sm lg:text-base text-gray-600">
                                    Où la moquette participe à l&apos;acoustique
                                    et à l&apos;élégance du lieu.
                                </p>
                            </div>
                        </div>

                        {/* Restaurants */}
                        <div className="flex flex-col items-center">
                            <Link
                                href="/services/restauration"
                                className="group hover:opacity-90 transition-opacity mb-4">
                                <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/restaurant-moquette-2.jpg"
                                        alt="Réalisation moquette restaurant"
                                        fill
                                        sizes="(max-width: 1024px) 192px, 256px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="text-center">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                                    Restaurants
                                </h3>
                                <p className="text-sm lg:text-base text-gray-600">
                                    Où confort, chaleur et durabilité doivent
                                    cohabiter.
                                </p>
                            </div>
                        </div>

                        {/* Hôtellerie */}
                        <div className="flex flex-col items-center">
                            <Link
                                href="/services/hotels-restaurants"
                                className="group hover:opacity-90 transition-opacity mb-4">
                                <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/hotel-moquette-1.jpg"
                                        alt="Réalisation moquette hôtellerie"
                                        fill
                                        sizes="(max-width: 1024px) 192px, 256px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="text-center">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                                    Hôtellerie
                                </h3>
                                <p className="text-sm lg:text-base text-gray-600">
                                    Où chaque espace doit refléter une identité
                                    et une expérience client irréprochables.
                                </p>
                            </div>
                        </div>

                        {/* Espaces événementiels */}
                        <div className="flex flex-col items-center">
                            <Link
                                href="/services/espaces-evenementiels"
                                className="group hover:opacity-90 transition-opacity mb-4">
                                <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/moquette-openspace-1.png"
                                        alt="Réalisation moquette événementiel"
                                        fill
                                        sizes="(max-width: 1024px) 192px, 256px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="text-center">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                                    Espaces événementiels et culturels
                                </h3>
                                <p className="text-sm lg:text-base text-gray-600">
                                    Où le sol doit être à la fois résistant,
                                    esthétique et sécurisant.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600 max-w-3xl mx-auto text-center px-4">
                        Grâce à leur expérience, ils accompagnent leurs clients
                        de A à Z : conseils, sélection des matériaux, solutions
                        sur mesure et pose réalisée avec la plus grande
                        précision.
                    </p>
                </div>
            </section>

            {/* Engagement Section */}
            <section
                id="engagement"
                className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-custom-beige">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-4">
                        Un engagement commun : la qualité sans compromis
                    </h2>
                    <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-12 text-center px-4">
                        Les Moquettistes de Paris se distinguent par :
                    </p>

                    {/* Mobile: Bulles et texte face à face en alternant */}
                    <div className="md:hidden space-y-6 sm:space-y-8 max-w-[400px] sm:max-w-[500px] mx-auto px-4">
                        {/* Matériaux - Bulle gauche, texte droite */}
                        <div className="flex flex-row items-center gap-4 sm:gap-6">
                            <div className="shrink-0">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10"
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
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                    Des matériaux sélectionnés avec exigence
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Alliant design, durabilité et performance.
                                </p>
                            </div>
                        </div>

                        {/* Équipe - Bulle droite, texte gauche */}
                        <div className="flex flex-row-reverse items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
                            <div className="shrink-0">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10"
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
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                    Une équipe qualifiée
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Structurée autour d&apos;artisans
                                    expérimentés et passionnés.
                                </p>
                            </div>
                        </div>

                        {/* Organisation - Bulle gauche, texte droite */}
                        <div className="flex flex-row items-center gap-4 sm:gap-6">
                            <div className="shrink-0">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10"
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
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                    Une organisation fiable
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Permettant de respecter délais, budgets et
                                    exigences spécifiques.
                                </p>
                            </div>
                        </div>

                        {/* Confiance - Bulle droite, texte gauche */}
                        <div className="flex flex-row-reverse items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
                            <div className="shrink-0">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10"
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
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                    Une relation client basée sur la confiance
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Construite sur la transparence et la
                                    communication.
                                </p>
                            </div>
                        </div>

                        {/* Travail sans gêne - Bulle gauche, texte droite */}
                        <div className="flex flex-row items-center gap-4 sm:gap-6">
                            <div className="shrink-0">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10"
                                        fill="none"
                                        stroke="red"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                    Travail sans gêne
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Intervention discrète qui respecte votre
                                    activité.
                                </p>
                            </div>
                        </div>

                        {/* Horaires adaptés - Bulle droite, texte gauche */}
                        <div className="flex flex-row-reverse items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
                            <div className="shrink-0">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10"
                                        fill="none"
                                        stroke="red"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                    Horaires adaptés aux besoins
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Flexibilité pour s&apos;adapter à vos
                                    contraintes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop: Grille 2x2 avec bulles */}
                    <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                        <div className="flex flex-col items-center">
                            <div className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
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
                            <div className="text-center">
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                    Des matériaux sélectionnés avec exigence
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Alliant design, durabilité et performance.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
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
                            <div className="text-center">
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                    Une équipe qualifiée
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Structurée autour d&apos;artisans
                                    expérimentés et passionnés.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
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
                            <div className="text-center">
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                    Une organisation fiable
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Permettant de respecter délais, budgets et
                                    exigences spécifiques.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
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
                            <div className="text-center">
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                    Une relation client basée sur la confiance
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Construite sur la transparence et la
                                    communication.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                                    fill="none"
                                    stroke="red"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                            </div>
                            <div className="text-center">
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                    Travail sans gêne
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Intervention discrète qui respecte votre
                                    activité.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                                    fill="none"
                                    stroke="red"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div className="text-center">
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                    Horaires adaptés aux besoins
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Flexibilité pour s&apos;adapter à vos
                                    contraintes.
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
