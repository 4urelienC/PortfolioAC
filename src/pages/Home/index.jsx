import React from 'react';
import Cadres from '../../components/Cadres';
import './style.scss'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <Cadres text="Passionné par l'informatique et l'univers du web je souhaite élargir mes compétences et m'investir dans des projets d'envergure" />
        <Cadres titre="bonjour" text="Passionné par l'informatique et l'univers du web je souhaite élargir mes compétences et m'investir dans des projets d'envergure" />
      </div>
      <div className="home-right">
        <Cadres titre="CONTACT" text="Tel: 06 06 70 79 06 /n Mail: chevalier.auel@gmail.com /n Adress: Chateaudun, France" />
        <Cadres titre="LANGUES" text="Français: Maternelle /n Anglais: Professionelle" />
        <Cadres titre="AUTRES LOGICIELS" text="Adobe Photoshop /n Adobe Premiere Pro /n Adobe After Effect /n Sony Vegas /n Avid" />
        <Cadres titre="PASSIONS" text="Écriture /n Codage /n Cinéma /n Jeux de rôles /n Japon /n Gundam" />
      </div>
    </div>
  );
}

export default Home;