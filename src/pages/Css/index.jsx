import React from 'react';
import { useEffect } from 'react';
import Cadres from '../../components/Cadres';
// import './style.scss'

function Css() {

    useEffect(() => {
        // Fait défiler la page vers le haut lorsque le composant est monté
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className=' fade-in-bottom'>
            <Cadres titre="CSS" text="Le CSS, ou Cascading Style Sheets, est un langage de feuilles de style utilisé dans le développement web pour définir l'apparence visuelle et la présentation des pages HTML. En d'autres termes, il permet de styliser et de mettre en forme le contenu d'un site web." />
            <Cadres class="cadres-img" titre="RESPONSIVE" text="Un site responsive, également appelé site web adaptatif, est un site conçu pour s'ajuster et offrir une expérience utilisateur optimale sur une variété de dispositifs et de tailles d'écrans. L'objectif principal d'un site responsive est de garantir que le contenu et la mise en page restent lisibles et fonctionnels quel que soit le périphérique utilisé, que ce soit un ordinateur de bureau, une tablette, un smartphone, ou tout autre appareil."
        pixUrl="/Responsive.gif" pixAlt="Responsive" />
            <Cadres class="cadres-img" titre="ANIMATION" text="Les animations CSS constituent une puissante fonctionnalité qui permet d'apporter une dynamique visuelle et une touche d'interactivité aux sites web. Les animations CSS fonctionnent en définissant des transitions entre différents états d'un élément HTML, ce qui peut inclure des changements de propriétés telles que la couleur, la taille, la position, ou même la transparence. Utilisées judicieusement, elles offrent une expérience utilisateur plus engageante en faisant vivre les éléments de la page."
        pixUrl="/Animation.gif" pixAlt="Animation" />
        <Cadres titre="MES PROJETS" text="" link1="https://github.com/4urelienC/Chevalier_Aurelien_1_Booki__072023" linktext1="Site_Booki" link2="https://github.com/4urelienC/Site_Sophie_Bluel" linktext2="Site_Sophie_Bluel" />
        </div>
    )
}

export default Css;