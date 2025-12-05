import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './components/ContactForm';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-[160px] bg-custom-beige pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1
                        data-fade-up
                        data-aos="fade-up"
                        className="text-2xl uppercase font-playfair sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black text-center lg:text-left mb-6 sm:mb-10 ">
                        Spécialiste en moquette pour professionnels
                    </h1>
                    <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-8 items-center">
                        <div className="relative  w-full flex flex-col items-center justify-center gap-4">
                            <Image
                                data-fade-up
                                data-aos="fade-up"
                                src="/assets/moquettistes-paris.png"
                                alt="Réalisation de pose de moquette professionnelle"
                                className="object-cover w-72 h-72"
                                width={600}
                                height={600}
                                priority
                            />
                            <h2
                                data-fade-up
                                data-aos="fade-up"
                                className="text-3xl uppercase font-playfair max-w-lg mx-auto  md:text-4xl lg:text-5xl font-bold text-black text-center ">
                                Les moquettistes de Paris
                            </h2>
                            <p
                                data-aos="fade-up"
                                data-fade-up
                                className="text-base md:text-lg lg:text-lg text-black text-center lg:text-left mb-6 sm:mb-10">
                                2 talents, naît l&apos;élégance
                            </p>
                        </div>
                        <div className="w-full">
                            <h2
                                data-fade-up
                                data-aos="fade-up"
                                className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-black leading-tight mb-4 text-center lg:text-left">
                                Les Moquetistes de Paris – Une histoire de
                                maîtrise et de partenariat
                            </h2>
                            <p
                                data-aos="fade-up"
                                data-fade-up
                                className="text-sm sm:text-base md:text-base lg:text-base text-black mb-4 sm:mb-6 text-center lg:text-left">
                                L&apos;histoire des Moquetistes de Paris est
                                avant tout celle de deux professionnels issus du
                                terrain, amis depuis l&apos;enfance et
                                entrepreneurs accomplis. Chacun a développé son
                                expertise à la tête de sa propre structure : la
                                SARL Zimmermann, spécialisée dans les
                                revêtements de sièges pour théâtres et
                                hôtellerie, et la SAS Maison Cloteaux, experte
                                en rénovation d&apos;espaces professionnels.
                            </p>
                            <p
                                data-fade-up
                                data-aos="fade-up"
                                className="text-sm sm:text-base md:text-base lg:text-base text-black mb-4 sm:mb-6 text-center lg:text-left">
                                Au fil des années, leurs expériences se sont
                                croisées sur de nombreux projets. Ils partagent
                                les mêmes exigences : précision du geste, sens
                                du détail, respect des engagements et priorité
                                donnée à la satisfaction client. Face à
                                l&apos;évolution du marché et à la demande
                                croissante de solutions haut de gamme,
                                l&apos;idée d&apos;allier leurs compétences
                                s&apos;est imposée naturellement.
                            </p>
                            <p
                                data-fade-up
                                data-aos="fade-up"
                                className="text-sm sm:text-base md:text-base lg:text-base text-black text-center lg:text-left">
                                C&apos;est ainsi qu&apos;est née
                                l&apos;entreprise Les Moquetistes de Paris,
                                dédiée à la fourniture et à la pose de moquettes
                                premium.
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
                    <h2
                        data-fade-up
                        data-aos="fade-up"
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center px-4">
                        Une expertise issue de décennies de terrain
                    </h2>
                    <p
                        data-fade-up
                        data-aos="fade-up"
                        className="text-sm sm:text-base md:text-base lg:text-base text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 text-center px-4">
                        Leur maîtrise technique répond parfaitement aux
                        exigences des environnements professionnels où la
                        qualité est essentielle :
                    </p>

                    {/* Structure unifiée : quinconce mobile / grille 3x2 desktop */}
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-8 lg:gap-12 mb-6 sm:mb-8">
                        {/* Théâtres - Gauche mobile, grille desktop */}
                        <div
                            data-aos="fade-up"
                            className="flex flex-row md:flex-col items-center gap-4 sm:gap-6 max-w-[400px] sm:max-w-[500px] md:max-w-none mx-auto md:mx-0">
                            <Link
                                href="/services/theatres-operas"
                                className="group shrink-0 hover:opacity-90 transition-opacity md:mb-4">
                                <div
                                    data-aos="fade-up"
                                    className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/theatre-moquette-1.jpg"
                                        alt="Réalisation moquette théâtre"
                                        fill
                                        sizes="(max-width: 768px) 384px, (max-width: 1024px) 512px, 512px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="flex-1 md:flex-none text-left md:text-center">
                                <h3
                                    data-aos="fade-up"
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-2">
                                    Théâtres
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-600">
                                    Où la moquette participe à l&apos;acoustique
                                    et à l&apos;élégance du lieu.
                                </p>
                            </div>
                        </div>

                        {/* Restaurants - Droite mobile, grille desktop */}
                        <div
                            data-aos="fade-up"
                            className="flex flex-row-reverse md:flex-col items-center gap-4 sm:gap-6 max-w-[600px]  md:max-w-none mx-auto md:mx-0">
                            <Link
                                href="/services/restauration"
                                className="group shrink-0 hover:opacity-90 transition-opacity md:mb-4">
                                <div
                                    data-aos="fade-up"
                                    className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/restaurant-moquette-2.jpg"
                                        alt="Réalisation moquette restaurant"
                                        fill
                                        sizes="(max-width: 768px) 384px, (max-width: 1024px) 512px, 512px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="flex-1 md:flex-none text-right md:text-center">
                                <h3
                                    data-aos="fade-up"
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-2">
                                    Restaurants
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-600">
                                    Où confort, chaleur et durabilité doivent
                                    cohabiter.
                                </p>
                            </div>
                        </div>

                        {/* Hôtellerie - Gauche mobile, grille desktop */}
                        <div
                            data-aos="fade-up"
                            className="flex flex-row md:flex-col items-center gap-4 sm:gap-6 max-w-[600px]  md:max-w-none mx-auto md:mx-0">
                            <Link
                                href="/services/hotels-restaurants"
                                className="group shrink-0 hover:opacity-90 transition-opacity md:mb-4">
                                <div
                                    data-aos="fade-up"
                                    className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/hotel-moquette-1.jpg"
                                        alt="Réalisation moquette hôtellerie"
                                        fill
                                        sizes="(max-width: 768px) 384px, (max-width: 1024px) 512px, 512px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="flex-1 md:flex-none text-left md:text-center">
                                <h3
                                    data-aos="fade-up"
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-2">
                                    Hôtellerie
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-600">
                                    Où chaque espace doit refléter une identité
                                    et une expérience client irréprochables.
                                </p>
                            </div>
                        </div>

                        {/* Espaces événementiels - Droite mobile, grille desktop */}
                        <div
                            data-aos="fade-up"
                            className="flex flex-row-reverse md:flex-col items-center gap-4 sm:gap-6 max-w-[600px]  md:max-w-none mx-auto md:mx-0">
                            <Link
                                href="/services/espaces-evenementiels"
                                className="group shrink-0 hover:opacity-90 transition-opacity md:mb-4">
                                <div
                                    data-aos="fade-up"
                                    className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/moquette-openspace-1.png"
                                        alt="Réalisation moquette événementiel"
                                        fill
                                        sizes="(max-width: 768px) 384px, (max-width: 1024px) 512px, 512px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="flex-1 md:flex-none text-right md:text-center">
                                <h3
                                    data-aos="fade-up"
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-2">
                                    Espaces événementiels et culturels
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-600">
                                    Où le sol doit être à la fois résistant,
                                    esthétique et sécurisant.
                                </p>
                            </div>
                        </div>

                        {/* Banques & Entreprises - Gauche mobile, grille desktop */}
                        <div
                            data-aos="fade-up"
                            className="flex flex-row md:flex-col items-center gap-4 sm:gap-6 max-w-[600px]  md:max-w-none mx-auto md:mx-0">
                            <Link
                                href="/services/banques-entreprises"
                                className="group shrink-0 hover:opacity-90 transition-opacity md:mb-4">
                                <div
                                    data-aos="fade-up"
                                    className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/start-up-moquette-1.jpg"
                                        alt="Réalisation moquette banque et entreprise"
                                        fill
                                        sizes="(max-width: 768px) 384px, (max-width: 1024px) 512px, 512px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="flex-1 md:flex-none text-left md:text-center">
                                <h3
                                    data-aos="fade-up"
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-2">
                                    Banques & Entreprises
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-600">
                                    Où confort acoustique, sécurité et
                                    esthétique se conjuguent pour vos
                                    collaborateurs.
                                </p>
                            </div>
                        </div>

                        {/* Cinéma - Droite mobile, grille desktop */}
                        <div
                            data-aos="fade-up"
                            className="flex flex-row-reverse md:flex-col items-center gap-4 sm:gap-6 max-w-[600px]  md:max-w-none mx-auto md:mx-0">
                            <Link
                                href="/services/cinema"
                                className="group shrink-0 hover:opacity-90 transition-opacity md:mb-4">
                                <div
                                    data-aos="fade-up"
                                    className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                    <Image
                                        src="/assets/cinema-moquette-1.jpg"
                                        alt="Réalisation moquette cinéma"
                                        fill
                                        sizes="(max-width: 768px) 384px, (max-width: 1024px) 512px, 512px"
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </Link>
                            <div className="flex-1 md:flex-none text-right md:text-center">
                                <h3
                                    data-aos="fade-up"
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-2">
                                    Cinéma
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-600">
                                    Où la moquette participe à l&apos;acoustique
                                    et crée une ambiance chaleureuse.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p
                        data-aos="fade-up"
                        className="text-sm sm:text-base md:text-base lg:text-base text-gray-600 max-w-3xl mx-auto text-center px-4">
                        Grâce à leur expérience, ils accompagnent leurs clients
                        de A à Z : conseils, sélection des matériaux, solutions
                        sur mesure et pose réalisée avec la plus grande
                        précision.
                    </p>
                </div>
            </section>
            {/* Transformation Section */}
            <section
                id="transformation"
                className="py-12 sm:py-16 w-full px-4 sm:px-6 lg:px-8  bg-custom-beige text-center">
                <h2
                    data-aos="fade-up"
                    className="text-xl sm:text-2xl md:text-3xl  max-w-4xl mx-auto font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                    Transformer les espaces, sublimer les ambiances
                </h2>
                <p
                    data-aos="fade-up"
                    className="text-sm sm:text-base md:text-base lg:text-base max-w-4xl mx-auto text-gray-600 mb-4 sm:mb-6 px-4">
                    Chaque projet est abordé comme une nouvelle histoire à
                    écrire. Les Moquettistes de Paris s&apos;attachent à
                    comprendre l&apos;identité et les besoins du lieu afin de
                    créer une ambiance unique. Leur objectif : faire de votre
                    sol un élément clé de l&apos;expérience que vous proposez à
                    vos clients, visiteurs ou spectateurs.
                </p>
                <p
                    data-aos="fade-up"
                    className="text-sm sm:text-base md:text-base lg:text-base max-w-4xl mx-auto text-gray-700 font-semibold px-4">
                    Déplacement gratuit pour diagnostic, devis et conseil.
                </p>
            </section>
            {/* Engagement Section */}
            <section
                id="engagement"
                className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2
                        data-aos="fade-up"
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-4">
                        Un engagement commun : la qualité sans compromis
                    </h2>
                    <p
                        data-aos="fade-up"
                        className="text-sm sm:text-base md:text-base lg:text-base text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-12 text-center px-4">
                        Les Moquettistes de Paris se distinguent par :
                    </p>

                    {/* Mobile: Bulles et texte alignés à gauche */}
                    <div className="md:hidden space-y-6 sm:space-y-8 max-w-[400px] sm:max-w-[500px] mx-auto px-4">
                        {/* Matériaux */}
                        <div
                            data-aos="fade-up"
                            className="flex flex-row items-center gap-4 sm:gap-6">
                            <div className="shrink-0">
                                <div
                                    data-aos="fade-up"
                                    className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10"
                                        fill="none"
                                        stroke="oklch(57.7% 0.245 27.325)"
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
                                <h3
                                    data-aos="fade-up"
                                    className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                    Des matériaux sélectionnés avec exigence
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm text-gray-700">
                                    Alliant design, durabilité et performance.
                                </p>
                            </div>
                        </div>

                        {/* Équipe */}
                        <div
                            data-aos="fade-up"
                            className="flex flex-row items-center gap-4 sm:gap-6">
                            <div className="shrink-0">
                                <div
                                    data-aos="fade-up"
                                    className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10"
                                        fill="none"
                                        stroke="oklch(57.7% 0.245 27.325)"
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
                                <h3
                                    data-aos="fade-up"
                                    className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                    Une équipe qualifiée
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm text-gray-700">
                                    Structurée autour d&apos;artisans
                                    expérimentés et passionnés.
                                </p>
                            </div>
                        </div>

                        {/* Organisation */}
                        <div
                            data-aos="fade-up"
                            className="flex flex-row items-center gap-4 sm:gap-6">
                            <div className="shrink-0">
                                <div
                                    data-aos="fade-up"
                                    className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10"
                                        fill="none"
                                        stroke="oklch(57.7% 0.245 27.325)"
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
                                <h3
                                    data-aos="fade-up"
                                    className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                    Une organisation fiable
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm text-gray-700">
                                    Permettant de respecter délais, budgets et
                                    exigences spécifiques.
                                </p>
                            </div>
                        </div>

                        {/* Confiance */}
                        <div
                            data-aos="fade-up"
                            className="flex flex-row items-center gap-4 sm:gap-6">
                            <div className="shrink-0">
                                <div
                                    data-aos="fade-up"
                                    className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10"
                                        fill="none"
                                        stroke="oklch(57.7% 0.245 27.325)"
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
                                <h3
                                    data-aos="fade-up"
                                    className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                    Une relation client basée sur la confiance
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm text-gray-700">
                                    Construite sur la transparence et la
                                    communication.
                                </p>
                            </div>
                        </div>

                        {/* Travail sans gêne */}
                        <div
                            data-aos="fade-up"
                            className="flex flex-row items-center gap-4 sm:gap-6">
                            <div className="shrink-0">
                                <div
                                    data-aos="fade-up"
                                    className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10"
                                        fill="none"
                                        stroke="oklch(57.7% 0.245 27.325)"
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
                                <h3
                                    data-aos="fade-up"
                                    className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                    Travail sans gêne
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm text-gray-700">
                                    Intervention discrète qui respecte votre
                                    activité.
                                </p>
                            </div>
                        </div>

                        {/* Horaires adaptés */}
                        <div
                            data-aos="fade-up"
                            className="flex flex-row items-center gap-4 sm:gap-6">
                            <div className="shrink-0">
                                <div
                                    data-aos="fade-up"
                                    className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10"
                                        fill="none"
                                        stroke="oklch(57.7% 0.245 27.325)"
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
                                <h3
                                    data-aos="fade-up"
                                    className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                    Horaires adaptés aux besoins
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm text-gray-700">
                                    Flexibilité pour s&apos;adapter à vos
                                    contraintes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop: Grille 2x2 avec bulles */}
                    <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                        <div
                            data-aos="fade-up"
                            className="flex flex-col items-center">
                            <div
                                data-aos="fade-up"
                                className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
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
                                <h3
                                    data-aos="fade-up"
                                    className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                    Des matériaux sélectionnés avec exigence
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm text-gray-700">
                                    Alliant design, durabilité et performance.
                                </p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="flex flex-col items-center">
                            <div
                                data-aos="fade-up"
                                className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
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
                                <h3
                                    data-aos="fade-up"
                                    className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                    Une équipe qualifiée
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm text-gray-700">
                                    Structurée autour d&apos;artisans
                                    expérimentés et passionnés.
                                </p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="flex flex-col items-center">
                            <div
                                data-aos="fade-up"
                                className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
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
                                <h3
                                    data-aos="fade-up"
                                    className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                    Une organisation fiable
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm text-gray-700">
                                    Permettant de respecter délais, budgets et
                                    exigences spécifiques.
                                </p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="flex flex-col items-center">
                            <div
                                data-aos="fade-up"
                                className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
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
                                <h3
                                    data-aos="fade-up"
                                    className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                    Une relation client basée sur la confiance
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm text-gray-700">
                                    Construite sur la transparence et la
                                    communication.
                                </p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="flex flex-col items-center">
                            <div
                                data-aos="fade-up"
                                className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
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
                                <h3
                                    data-aos="fade-up"
                                    className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                    Travail sans gêne
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm text-gray-700">
                                    Intervention discrète qui respecte votre
                                    activité.
                                </p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="flex flex-col items-center">
                            <div
                                data-aos="fade-up"
                                className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
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
                                <h3
                                    data-aos="fade-up"
                                    className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                    Horaires adaptés aux besoins
                                </h3>
                                <p
                                    data-aos="fade-up"
                                    className="text-xs sm:text-sm text-gray-700">
                                    Flexibilité pour s&apos;adapter à vos
                                    contraintes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />
        </div>
    );
}
