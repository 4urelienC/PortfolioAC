import React from 'react';
import { useEffect } from 'react';
import Cadres from '../../components/Cadres';
// import './style.scss'

function ReactJS() {

    useEffect(() => {
        // Fait défiler la page vers le haut lorsque le composant est monté
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className=' fade-in-bottom'>
            <Cadres titre="REACT JS" text="L'une des caractéristiques majeures de React est sa gestion efficace du DOM (Document Object Model). Plutôt que de manipuler directement le DOM, React introduit un concept appelé le 'Virtual DOM'. Il crée une représentation virtuelle de l'interface utilisateur en mémoire et effectue les mises à jour de manière optimisée, minimisant ainsi les manipulations directes du DOM et améliorant les performances de l'application. /n
            /n React est également souvent associé à d'autres technologies, telles que 'React Router' pour la navigation dans l'application. Sa flexibilité et sa communauté active font de React un choix privilégié pour le développement d'applications web modernes et évolutives." />
            <Cadres class="cadres-img" titre="COMPOSANTS" text="React utilise un système de composants, ce qui signifie que l'interface utilisateur est construite à partir de petits éléments réutilisables appelés composants. Ces composants peuvent être imbriqués pour créer des interfaces utilisateur complexes tout en restant faciles à comprendre et à maintenir. Cette approche favorise également la réutilisation du code et simplifie le processus de développement./n
            /n Une autre caractéristique notable de React est son approche basée sur les 'props' (propriétés) et les 'state' (état). Les 'props' sont des données passées à un composant, tandis que l'état représente l'état interne d'un composant. Les mises à jour de l'état déclenchent automatiquement le ré-rendering du composant, garantissant une mise à jour dynamique de l'interface utilisateur en réponse aux changements de données."
        pixUrl="/Composants.gif" pixAlt="Composants" />
        <Cadres titre="MES PROJETS" text="" link1="https://github.com/4urelienC/Kasa" linktext1="Site_Kasa" />
        </div>
    )
}

export default ReactJS;