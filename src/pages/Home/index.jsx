import React from 'react';
import Cadres from '../../components/Cadres';
import './style.scss'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <Cadres titre="DÉVELOPPEUR WEB" text="Passionné par l'informatique, l'univers du web et les nouvelles technologies, je souhaite élargir mes compétences et connaissances en m'investissant dans des projets d'envergures.
        C'est dans cette optique que j'ai choisit de me reconvertir pour découvrir un métier bien plus riche en oportunités professionnelles.
        /n Mon parcours a été façonné par une curiosité incessante pour comprendre les mécanismes qui composent les sites web modernes et les applications interactives. La possibilité de concrétiser des idées en ligne, de les rendre accessibles à un large public, et d'améliorer l'expérience utilisateur sont des aspects qui me motivent profondément.
        /n En tant que développeur web, je mets un point d'honneur à créer des solutions élégantes, efficaces et axées sur l'utilisateur. Mon objectif est de participer activement à la création de produits numériques qui non seulement répondent aux besoins actuels, mais anticipent également les évolutions futures du secteur." />
        <Cadres titre="FORMATIONS" text="CADASE - BAC +2 COMMUNICATION AUDIOVISUELLE 
        /n - Cadrage vidéo
        /n - Montage vidéo
        /n - Prise de son
        /n - Rédaction journalistique
        /n - Écriture scénaristique
        /n
        /n OPENCLASSROOM - BAC +2 DÉVELOPPEUR WEB 
        /n - Construction de sites web responsives et dynamiques
        /n - Création d'API et de bases de données
        /n - Optimisation des performances et réalisation de maintenance de sites web déjà existants
        /n - Gestion de projets web de A à Z" />
      </div>
      <div className="home-right">
        <Cadres titre="CONTACT" text="06 06 70 79 06 /n chevalier.auel@gmail.com /n Chateaudun, France" />
        <Cadres titre="LANGUES" text="Français: Maternelle /n Anglais: Professionelle" />
        <Cadres titre="AUTRES LOGICIELS" text="Adobe Photoshop /n Adobe Illustrator /n Adobe Premiere Pro /n Adobe After Effect /n Sony Vegas Pro /n Avid /n Final Cut 7" />
        <Cadres titre="PASSIONS" text="Écriture /n Codage /n Cinéma /n Jeux de rôles /n Japon /n Gundam" />
      </div>
    </div>
  );
}

export default Home;