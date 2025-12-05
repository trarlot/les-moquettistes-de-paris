import Image from 'next/image';

interface DalleProps {
    reverse?: boolean;
    bgColor?: 'beige' | 'white';
}

export default function Dalle({ reverse = false, bgColor = 'white' }: DalleProps) {
    const imageDiv = (
        <div data-aos="fade-up" className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
            <Image
                src="/assets/dalle2.jpg"
                alt="César Dalle - Moquette structurée Haute Couture Balsan"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
            />
        </div>
    );

    const textDiv = (
        <div data-aos="fade-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center md:text-left">
                Dalle de moquette structurée Haute Couture, en
                fils teint masse Econyl® pour les espaces
                premiums
            </h2>
            <div className="text-sm sm:text-base text-gray-600 space-y-4 text-center md:text-left">
                <p>
                    Disponible en plusieurs coloris,{' '}
                    <strong>César Dalle </strong>
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
    );

    return (
        <section className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ${bgColor === 'beige' ? 'bg-custom-beige' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                    {reverse ? (
                        <>
                            {textDiv}
                            {imageDiv}
                        </>
                    ) : (
                        <>
                            {imageDiv}
                            {textDiv}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

