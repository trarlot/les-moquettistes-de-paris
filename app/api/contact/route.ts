import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nom, prenom, email, telephone, entreprise, typeProjet, surface, message } = body;

        // Validation des champs requis
        if (!nom || !prenom || !email || !typeProjet) {
            return NextResponse.json(
                { error: 'Les champs nom, prénom, email et type de projet sont requis.' },
                { status: 400 }
            );
        }

        // Email à l'entreprise
        await resend.emails.send({
            from: process.env.EMAIL_FROM || 'Contact <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL || 'contact@promoquette.fr',
            subject: `Nouvelle demande de devis - ${typeProjet}`,
            html: `
                <h2>Nouvelle demande de devis</h2>
                <p><strong>Nom:</strong> ${nom} ${prenom}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${telephone ? `<p><strong>Téléphone:</strong> ${telephone}</p>` : ''}
                ${entreprise ? `<p><strong>Entreprise:</strong> ${entreprise}</p>` : ''}
                <p><strong>Type de projet:</strong> ${typeProjet}</p>
                ${surface ? `<p><strong>Surface:</strong> ${surface} m²</p>` : ''}
                ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
            `,
        });

        // Email de confirmation au client
        await resend.emails.send({
            from: process.env.EMAIL_FROM || 'Contact <onboarding@resend.dev>',
            to: email,
            subject: 'Confirmation de votre demande de devis - Les Moquettistes de Paris',
            html: `
                <h2>Merci pour votre demande de devis</h2>
                <p>Bonjour ${prenom},</p>
                <p>Nous avons bien reçu votre demande de devis pour un projet de type <strong>${typeProjet}</strong>.</p>
                <p>Notre équipe va examiner votre demande et vous contactera dans les plus brefs délais (sous 24h).</p>
                <p>Récapitulatif de votre demande :</p>
                <ul>
                    <li>Type de projet : ${typeProjet}</li>
                    ${surface ? `<li>Surface : ${surface} m²</li>` : ''}
                    ${entreprise ? `<li>Entreprise : ${entreprise}</li>` : ''}
                </ul>
                <p>Cordialement,<br>L'équipe des Moquettistes de Paris</p>
            `,
        });

        return NextResponse.json(
            { message: 'Email envoyé avec succès', success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.' },
            { status: 500 }
        );
    }
}
