import React from 'react';
import { useEffect } from 'react';
import Cadres from '../../components/Cadres';
// import './style.scss'

function JavaS() {

    useEffect(() => {
        // Fait défiler la page vers le haut lorsque le composant est monté
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className=' fade-in-bottom'>
            <Cadres titre="JAVA SCRIPT" text="JavaScript, souvent abrégé en JS, est un langage de programmation polyvalent et interprété. Il est principalement utilisé pour créer des pages web interactives, offrant une expérience utilisateur dynamique et enrichissante. Conçu à l'origine pour fonctionner dans les navigateurs web, JavaScript est aujourd'hui également utilisé côté serveur grâce à des plates-formes comme Node.js." />
            <Cadres class="cadres-img" titre="INTERACTIVITÉ" text="JavaScript est le langage clé pour rendre une page web interactive. Il permet de manipuler le DOM (Document Object Model), réagir aux événements du navigateur (clics, survols, etc.) et modifier dynamiquement le contenu de la page sans avoir à recharger celle-ci."
        pixUrl="/Filtre.gif" pixAlt="Interaction" />
            <Cadres class="cadres-img" titre="REQUÊTES" text="La création de requêtes en JavaScript est une compétence essentielle pour interagir avec des serveurs distants, récupérer des données et mettre à jour dynamiquement le contenu d'une page web. Les requêtes JavaScript sont souvent utilisées pour communiquer avec des API (Interfaces de Programmation d'Application) et récupérer des informations telles que des données utilisateur, des informations météorologiques, des mises à jour en temps réel, etc."
        pixUrl="/API.gif" pixAlt="Requetes" />
            <Cadres titre="MES PROJETS" text="" link2="https://github.com/4urelienC/Site_Sophie_Bluel" linktext2="Site_Sophie_Bluel" link3="https://github.com/4urelienC/Nina-Carducci" linktext3="Site_Nina_Carducci" />
        </div>
    )
}

export default JavaS;