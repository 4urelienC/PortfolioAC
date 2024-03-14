import React from 'react';
import { useEffect } from 'react';
import Cadres from '../../components/Cadres';
// import './style.scss'

function NodeJS() {

    useEffect(() => {
        // Fait défiler la page vers le haut lorsque le composant est monté
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className=' fade-in-bottom'>
            <Cadres titre="NODE JS" text="Les caractéristiques clés de Node.js incluent son gestionnaire de paquets intégré appelé npm (Node Package Manager), qui simplifie le processus d'installation, de gestion et de partage de bibliothèques et de modules. Node.js permet également la création de serveurs web légers et rapides grâce à des frameworks populaires tels que Express.js. /n
            /n Node.js a apporté une nouvelle dynamique au développement côté serveur en unifiant le langage de programmation entre le client et le serveur, permettant aux développeurs de créer des applications web hautement évolutives et réactives avec une base de code cohérente. Son impact significatif perdure dans l'évolution constante du paysage du développement web moderne. /n
            /n La création d'API REST avec Node.js offre une approche flexible et efficace pour construire des services web robustes et évolutifs. Node.js, avec son modèle asynchrone et son écosystème dynamique, s'avère être l'un des choix les plus populaires parmi les développeurs pour la mise en œuvre d'API RESTful." />
            <Cadres class="cadres-img" titre="ROUTES" text="La création de routes avec Express, le framework web pour Node.js, constitue un aspect central dans le développement d'applications web robustes et structurées. Les routes définissent les points d'entrée de l'application, permettant de diriger les requêtes HTTP vers les fonctions de gestion appropriées."
        pixUrl="/Routes.gif" pixAlt="Routes" />
            <Cadres class="cadres-img" titre="MIDDLEWARES" text="Les middlewares jouent un rôle essentiel dans le développement d'applications web, agissant comme des intermédiaires entre la réception des requêtes et l'envoi des réponses. Ces composants intermédiaires s'intègrent dans la chaîne de traitement des requêtes pour effectuer des actions spécifiques, telles que la validation des données, la gestion des erreurs, l'authentification des utilisateurs, et bien plus encore./n
            /n Parmi les exemples courants d'utilisation des middlewares, on retrouve la gestion des sessions, l'authentification des utilisateurs, la compression des données, la gestion des erreurs, et la validation des entrées utilisateur. Les frameworks web, tels que Express pour Node.js, fournissent une architecture flexible pour intégrer et personnaliser ces middlewares en fonction des besoins spécifiques de chaque application."
        pixUrl="/Middleware.gif" pixAlt="Middleware" />
        <Cadres titre="MES PROJETS" text="" link1="https://github.com/4urelienC/P7-Dev-Web-livres_BackEnd" linktext1="Site_Mon_Vieux_Grimoire" />
        </div>
    )
}

export default NodeJS;