'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [typeProjet, setTypeProjet] = useState('');
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        const formData = new FormData(e.currentTarget);
        const data = {
            nom: formData.get('nom'),
            prenom: formData.get('prenom'),
            email: formData.get('email'),
            telephone: formData.get('telephone') || '',
            entreprise: formData.get('entreprise') || '',
            typeProjet: formData.get('type-projet'),
            surface: formData.get('surface') || '',
            message: formData.get('message') || '',
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message:
                        'Votre demande a été envoyée avec succès ! Nous vous contacterons sous 24h.',
                });
                (e.target as HTMLFormElement).reset();
                setTypeProjet('');
            } else {
                setSubmitStatus({
                    type: 'error',
                    message:
                        result.error ||
                        'Une erreur est survenue. Veuillez réessayer.',
                });
            }
        } catch {
            setSubmitStatus({
                type: 'error',
                message:
                    'Une erreur est survenue. Veuillez réessayer plus tard.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-[160px] bg-custom-beige pb-10 px-6 lg:px-8 ">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1
                            data-aos="fade-up"
                            data-fade-up
                            className="text-3xl text-gray-900 md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Contactez-Nous
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-fade-up
                            className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-4">
                            Obtenez un devis gratuit et personnalisé pour votre
                            projet de pose de moquette
                        </p>
                        <p
                            data-aos="fade-up"
                            data-fade-up
                            className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto font-semibold">
                            Déplacement gratuit pour diagnostic, devis et
                            conseil.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-10 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div
                        data-aos="fade-up"
                        data-fade-up
                        className="grid text-black lg:grid-cols-2 gap-12">
                        {/* Formulaire de Contact */}
                        <div className=" p-6 sm:p-8 rounded-lg">
                            <h2
                                data-aos="fade-up"
                                className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
                                Demandez Votre Devis
                            </h2>
                            {submitStatus.type && (
                                <div
                                    className={`mb-6 p-4 ${
                                        submitStatus.type === 'success'
                                            ? 'bg-green-50 text-green-800 border border-green-200'
                                            : 'bg-red-50 text-red-800 border border-red-200'
                                    }`}>
                                    {submitStatus.message}
                                </div>
                            )}
                            <form
                                data-aos="fade-up"
                                onSubmit={handleSubmit}
                                className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="nom"
                                            className="block text-sm font-medium  mb-2">
                                            Nom *
                                        </label>
                                        <input
                                            type="text"
                                            id="nom"
                                            name="nom"
                                            required
                                            className="w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 border border-gray-300"
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="prenom"
                                            className="block text-sm font-medium  mb-2">
                                            Prénom *
                                        </label>
                                        <input
                                            type="text"
                                            id="prenom"
                                            name="prenom"
                                            required
                                            className="w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 border border-gray-300"
                                            placeholder="Votre prénom"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium  mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 border border-gray-300"
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="telephone"
                                        className="block text-sm font-medium  mb-2">
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        id="telephone"
                                        name="telephone"
                                        className="w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 border border-gray-300"
                                        placeholder="01 23 45 67 89"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="entreprise"
                                        className="block text-sm font-medium  mb-2">
                                        Entreprise
                                    </label>
                                    <input
                                        type="text"
                                        id="entreprise"
                                        name="entreprise"
                                        className="w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 border border-gray-300"
                                        placeholder="Nom de votre entreprise"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="type-projet"
                                        className="block text-sm font-medium  mb-2">
                                        Type de Projet *
                                    </label>
                                    <select
                                        id="type-projet"
                                        name="type-projet"
                                        required
                                        value={typeProjet}
                                        onChange={(e) =>
                                            setTypeProjet(e.target.value)
                                        }
                                        className={`w-full rounded-md px-4 py-3 focus:ring-2 focus:ring-red-600 bg-white border border-gray-300 ${
                                            typeProjet === ''
                                                ? 'text-gray-400'
                                                : 'text-gray-900'
                                        }`}>
                                        <option
                                            value=""
                                            className="text-gray-400">
                                            Sélectionnez un type
                                        </option>
                                        <option value="Théâtres & Opéras">
                                            Théâtres & Opéras
                                        </option>
                                        <option value="Hôtellerie & Restauration">
                                            Hôtellerie & Restauration
                                        </option>
                                        <option value="Banques & Entreprises">
                                            Banques & Entreprises
                                        </option>
                                        <option value="Bijouteries de Luxe">
                                            Bijouteries de Luxe
                                        </option>
                                        <option value="Salles de Sport">
                                            Salles de Sport
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="surface"
                                        className="block text-sm font-medium  mb-2">
                                        Surface (m²)
                                    </label>
                                    <input
                                        type="number"
                                        id="surface"
                                        name="surface"
                                        className="w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 border border-gray-300"
                                        placeholder="Ex: 150"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium  mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 border border-gray-300"
                                        placeholder="Décrivez votre projet..."></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-red-700  px-8 py-4 text-white hover:bg-red-800 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed text-center">
                                    {isSubmitting
                                        ? 'Envoi en cours...'
                                        : 'Envoyer la Demande'}
                                </button>
                            </form>
                        </div>

                        {/* Informations de Contact */}
                        <div>
                            <h2
                                data-aos="fade-up"
                                data-fade-up
                                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                                Nos Coordonnées
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-4 lg:gap-8 lg:space-y-0">
                                <div
                                    data-aos="fade-up"
                                    data-fade-up
                                    className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4 text-center">
                                    <div className="w-12 h-12 bg-red-100 flex items-center justify-center flex-shrink-0 mb-3 lg:mb-0">
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
                                    <div className="lg:text-left">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Téléphone
                                        </h3>
                                        <p className="text-gray-600">
                                            01 23 45 67 89
                                        </p>
                                    </div>
                                </div>

                                <div
                                    data-aos="fade-up"
                                    data-fade-up
                                    className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4 text-center">
                                    <div className="w-12 h-12 bg-red-100 flex items-center justify-center flex-shrink-0 mb-3 lg:mb-0">
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
                                    <div className="lg:text-left">
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

                                <div
                                    data-aos="fade-up"
                                    data-fade-up
                                    className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4 text-center">
                                    <div className="w-12 h-12 bg-red-100 flex items-center justify-center flex-shrink-0 mb-3 lg:mb-0">
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
                                    <div className="lg:text-left">
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

                                <div
                                    data-aos="fade-up"
                                    data-fade-up
                                    className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4 text-center">
                                    <div className="w-12 h-12 bg-red-100 flex items-center justify-center flex-shrink-0 mb-3 lg:mb-0">
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
                                    <div className="lg:text-left">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Horaires
                                        </h3>
                                        <p className="text-gray-600">
                                            Lundi - Samedi: 8h00 - 18h00
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Zone d'intervention */}
                            <div
                                data-aos="fade-up"
                                data-fade-up
                                className="mt-12 p-6 bg-gray-50">
                                <p className="text-base md:text-lg font-semibold text-gray-900 mb-4 text-center md:text-left">
                                    Déplacement gratuit pour diagnostic, devis
                                    et conseil.
                                </p>
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center md:text-left">
                                    Zone d&apos;Intervention
                                </h3>
                                <p className="text-gray-600 mb-4 text-center md:text-left">
                                    Nous intervenons dans toute la région
                                    parisienne et ses environs :
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 text-center md:text-left">
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
            <section className="py-10 bg-custom-beige px-6 lg:px-8 ">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2
                            data-aos="fade-up"
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Questions Fréquentes
                        </h2>
                        <p
                            data-aos="fade-up"
                            className="text-base md:text-lg lg:text-xl text-gray-600">
                            Retrouvez les réponses aux questions les plus
                            courantes
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div
                            data-aos="fade-up"
                            className="bg-white p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Combien coûte une pose de moquette ?
                            </h3>
                            <p className="text-gray-600">
                                Le prix dépend de plusieurs facteurs : surface,
                                type de moquette, complexité de la pose. Nous
                                proposons des devis gratuits et personnalisés.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="bg-white p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Quel est le délai de pose ?
                            </h3>
                            <p className="text-gray-600">
                                En moyenne, 1 à 3 jours selon la surface. Nous
                                nous adaptons à vos contraintes d&apos;horaires
                                et pouvons intervenir le weekend si nécessaire.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="bg-white p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Proposez-vous une garantie ?
                            </h3>
                            <p className="text-gray-600">
                                Oui, nous offrons une garantie décennale sur
                                tous nos travaux de pose, conformément à la
                                réglementation en vigueur.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            className="bg-white p-6 border border-gray-200">
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
