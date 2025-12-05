import Image from 'next/image';

interface MoquetteEnLeProps {
    reverse?: boolean;
    bgColor?: 'beige' | 'white';
}

export default function MoquetteEnLe({ reverse = false, bgColor = 'white' }: MoquetteEnLeProps) {
    const imageDiv = (
        <div data-aos="fade-up" className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
            <Image
                src="/assets/moquette-rouge.png"
                alt="Moquette en lé - Rouleaux de 2 à 4 mètres"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
            />
        </div>
    );

    const textDiv = (
        <div data-aos="fade-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center md:text-left">
                La moquette en lé
            </h2>
            <div className="text-sm sm:text-base text-gray-600 space-y-4 text-center md:text-left">
                <p>
                    La moquette en lé, proposée en rouleaux de 2
                    à 4 mètres de largeur, est la solution
                    idéale pour habiller les sols avec élégance
                    et continuité. Grâce à ses grandes
                    dimensions, elle permet de couvrir de vastes
                    surfaces avec très peu de joints, offrant un
                    rendu uniforme, chaleureux et esthétique.
                    Très appréciée dans les espaces de vie comme
                    les chambres ou les salons, elle convient
                    également aux environnements professionnels
                    grâce à son excellent confort acoustique et
                    thermique.
                </p>
                <p>
                    Disponible dans une large variété de styles
                    — velours, bouclée, structurée, unie ou à
                    motifs — la moquette en lé s&apos;adapte à
                    toutes les ambiances et à tous les niveaux
                    d&apos;usage. Selon les besoins du projet,
                    elle peut être posée en pose collée, en pose
                    tendue sur thibaude pour un confort haut de
                    gamme, ou en pose semi-libre pour les pièces
                    à fréquentation modérée.
                </p>
                <p>
                    Choisir une moquette en lé, c&apos;est opter
                    pour un revêtement confortable, durable et
                    raffiné, idéal pour créer une atmosphère
                    cosy dans les intérieurs résidentiels comme
                    dans les lieux professionnels.
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

