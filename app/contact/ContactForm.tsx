'use client';

import { useState, FormEvent } from 'react';

interface ContactFormProps {
    showBorders?: boolean;
}

export default function ContactForm({ showBorders = false }: ContactFormProps) {
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
        <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
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
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="nom"
                            className="block text-sm font-medium text-gray-700 mb-2">
                            Nom *
                        </label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            required
                            className={`w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 ${
                                showBorders ? 'border border-gray-300' : ''
                            }`}
                            placeholder="Votre nom"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="prenom"
                            className="block text-sm font-medium text-gray-700 mb-2">
                            Prénom *
                        </label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            required
                            className={`w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 ${
                                showBorders ? 'border border-gray-300' : ''
                            }`}
                            placeholder="Votre prénom"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={`w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 ${
                            showBorders ? 'border border-gray-300' : ''
                        }`}
                        placeholder="votre@email.com"
                    />
                </div>

                <div>
                    <label
                        htmlFor="telephone"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                    </label>
                    <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        className={`w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 ${
                            showBorders ? 'border border-gray-300' : ''
                        }`}
                        placeholder="01 23 45 67 89"
                    />
                </div>

                <div>
                    <label
                        htmlFor="entreprise"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        Entreprise
                    </label>
                    <input
                        type="text"
                        id="entreprise"
                        name="entreprise"
                        className={`w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 ${
                            showBorders ? 'border border-gray-300' : ''
                        }`}
                        placeholder="Nom de votre entreprise"
                    />
                </div>

                <div>
                    <label
                        htmlFor="type-projet"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        Type de Projet *
                    </label>
                    <select
                        id="type-projet"
                        name="type-projet"
                        required
                        value={typeProjet}
                        onChange={(e) => setTypeProjet(e.target.value)}
                        className={`w-full rounded-md px-4 py-3 focus:ring-2 focus:ring-red-600 bg-white ${
                            typeProjet === ''
                                ? 'text-gray-400'
                                : 'text-gray-900'
                        } ${showBorders ? 'border border-gray-300' : ''}`}>
                        <option value="" className="text-gray-400">
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
                        <option value="Salles de Sport">Salles de Sport</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="surface"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        Surface (m²)
                    </label>
                    <input
                        type="number"
                        id="surface"
                        name="surface"
                        className={`w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 ${
                            showBorders ? 'border border-gray-300' : ''
                        }`}
                        placeholder="Ex: 150"
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className={`w-full rounded-md px-4 py-3 bg-white focus:ring-2 focus:ring-red-600 text-gray-900 placeholder:text-gray-400 ${
                            showBorders ? 'border border-gray-300' : ''
                        }`}
                        placeholder="Décrivez votre projet..."></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-700 text-white px-8 py-4 hover:bg-red-800 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la Demande'}
                </button>
            </form>
        </div>
    );
}
