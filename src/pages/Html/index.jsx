import React from 'react';
import { useEffect } from 'react';
import Cadres from '../../components/Cadres';
// import './style.scss'

function Html() {

    useEffect(() => {
        // Fait défiler la page vers le haut lorsque le composant est monté
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className=' fade-in-bottom'>
            <Cadres titre="HTML" text="Le HTML, ou HyperText Markup Language, est le langage de balisage standard utilisé pour créer des documents et des pages web. Conçu pour décrire la structure et le contenu d'une page, le HTML utilise un ensemble de balises pour définir différents éléments et leur attribuer des rôles spécifiques." />
            <Cadres class="cadres-img" titre="RÉFÉRENCEMENT" text="Le référencement, souvent abrégé SEO (Search Engine Optimization), constitue une composante essentielle du monde numérique, façonnant la visibilité et la pertinence d'un site web au sein des moteurs de recherche tels que Google, Bing et Yahoo. C'est une discipline dynamique et stratégique visant à optimiser la présence en ligne d'une entité, que ce soit une entreprise, un blog ou une organisation."
        pixUrl="/Statistiques_SEO.gif" pixAlt="Statistiques SEO" />
            <Cadres class="cadres-img" titre="CRÉATION DE FORMULAIRES" text="La création de formulaires est une étape fondamentale dans le développement web, offrant aux utilisateurs une interface interactive pour saisir et soumettre des informations. En HTML, la structure des formulaires repose sur une série d'éléments spécifiques qui permettent de collecter différentes données."
        pixUrl="/Formulaire.gif" pixAlt="Formulaire" />
            <Cadres titre="MES PROJETS" text="" link1="https://github.com/4urelienC/Chevalier_Aurelien_1_Booki__072023" linktext1="Site_Booki" link2="https://github.com/4urelienC/Site_Sophie_Bluel" linktext2="Site_Sophie_Bluel" link3="https://github.com/4urelienC/Nina-Carducci" linktext3="Site_Nina_Carducci" />
        </div>
    )
}

export default Html;