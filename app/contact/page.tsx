import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Contactez-Nous
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Obtenez un devis gratuit et personnalisé pour votre
                            projet de pose de moquette
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Formulaire de Contact */}
                        <ContactForm />

                        {/* Informations de Contact */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Nos Coordonnées
                            </h2>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-100 flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-red-700"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Téléphone
                                        </h3>
                                        <p className="text-gray-600">
                                            01 23 45 67 89
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Lun-Ven: 8h00-18h00
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-100 flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-red-700"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Email
                                        </h3>
                                        <p className="text-gray-600">
                                            contact@promoquette.fr
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Réponse sous 24h
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-100 flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-red-700"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Adresse
                                        </h3>
                                        <p className="text-gray-600">
                                            14 avenue de l&apos;opéra
                                        </p>
                                        <p className="text-gray-600">
                                            75001 Paris, France
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-100 flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-red-700"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Horaires
                                        </h3>
                                        <p className="text-gray-600">
                                            Lundi - Vendredi: 8h00 - 18h00
                                        </p>
                                        <p className="text-gray-600">
                                            Samedi: 9h00 - 12h00
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Interventions weekend sur demande
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Zone d'intervention */}
                            <div className="mt-12 p-6 bg-gray-50">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Zone d&apos;Intervention
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Nous intervenons dans toute la région
                                    parisienne et ses environs :
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                    <div>• Paris (tous arrondissements)</div>
                                    <div>• Hauts-de-Seine (92)</div>
                                    <div>• Seine-Saint-Denis (93)</div>
                                    <div>• Val-de-Marne (94)</div>
                                    <div>• Yvelines (78)</div>
                                    <div>• Essonne (91)</div>
                                    <div>• Val-d&apos;Oise (95)</div>
                                    <div>• Seine-et-Marne (77)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Questions Fréquentes
                        </h2>
                        <p className="text-xl text-gray-600">
                            Retrouvez les réponses aux questions les plus
                            courantes
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Combien coûte une pose de moquette ?
                            </h3>
                            <p className="text-gray-600">
                                Le prix dépend de plusieurs facteurs : surface,
                                type de moquette, complexité de la pose. Nous
                                proposons des devis gratuits et personnalisés.
                            </p>
                        </div>

                        <div className="bg-white p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Quel est le délai de pose ?
                            </h3>
                            <p className="text-gray-600">
                                En moyenne, 1 à 3 jours selon la surface. Nous
                                nous adaptons à vos contraintes d&apos;horaires
                                et pouvons intervenir le weekend si nécessaire.
                            </p>
                        </div>

                        <div className="bg-white p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Proposez-vous une garantie ?
                            </h3>
                            <p className="text-gray-600">
                                Oui, nous offrons une garantie décennale sur
                                tous nos travaux de pose, conformément à la
                                réglementation en vigueur.
                            </p>
                        </div>

                        <div className="bg-white p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Travaillez-vous avec des professionnels ?
                            </h3>
                            <p className="text-gray-600">
                                Absolument ! Nous travaillons principalement
                                avec des entreprises, hôtels, restaurants,
                                théâtres et espaces commerciaux.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
