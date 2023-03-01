// import { gql, useQuery } from "@apollo/client";
// import { Routes, Route, Link } from "react-router-dom";

import ArrowLinkTo from "../../assets/logos/ArrowLinkTo";
import LaunchChallenge from "../../assets/logos/LaunchChallenge";
import Partners from "../../assets/logos/Partners";
import { cardLogo, challengesImages, greenCardLogo, partnersLogo, versionFreeText, versionPremiumText } from "../../data/HomePageData";
import Button from "../../Shared/Buttons/Button";
import { PRIMARY } from "../../Shared/Constants/Color";
import Image from "../../Shared/Images/Image";
import VersionsLine from "../../Shared/Lines/VersionsLine";
import List from "../../Shared/List/List";

/* import { MyProfileQuery } from "../../gql/graphql"; */

/* import { ToastContainer } from "react-toastify";
import CreateWilder from "../../pages/CreateWilder/CreateWilder";
import {
  CREATE_WILDER_PATH,
  HOME_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from "../../pages/paths";
import Button from "../../Shared/Buttons/Button";
import MakeDifference from "../../assets/MakeDifference";
import GoodForPlanet from "../../assets/GoodForPlanet";
import Solidarity from "../../assets/Solidarity";
import WithFriends from "../../assets/WithFriends";
import Company from "../../assets/Company";
import LaunchChallenge from "../../assets/LaunchChallenge";
import Partners from "../../assets/Partners";
import Check from "../../assets/Check";
import { ArrowLinkTo } from "../../assets/ArrowContinue";

import { PRIMARY } from "../../Shared/Constants/Color";

{
  /* const MY_PROFILE = gql`
  query MyProfile {
    myProfile {
      emailAddress
    }
  }
`;*/

const Home = () => {
  /* const { data, refetch } = useQuery<MyProfileQuery>(MY_PROFILE); */
  return (
    <div className="home-page">
      <div className="home-image">
        <div className="home-text">
          <h2 className="home-title">Eco Playground</h2>
          <p className="home-subtitle">
            le premier réseau social et plateforme de jeu écolo
          </p>
          <p className="home-subtitle">
            Inscrivez-vous gratuitement, créez des groupes, invitez vos amis,
            lancez des challenges écologiques et jouez !
          </p>
          <div className="buttons">
            <Button type="button-primary" name="S'inscrire"  size="min-w-[140px]" />
            <Button type="button-primary" name="Se connecter"  size="min-w-[140px]" />
          </div>
        </div>
      </div>
      <div className="home-page">
        <div className="card">
          {cardLogo.map((element) => (
            <>
              <Image
                css="w-20"
                source={element.source}
                description={element.description}
              />
              <div className="font-bold text-lg">
                <p>{element.text}</p>
              </div>
            </>
          ))}
          <div className="custom-flex-center text-center">
            <p className="my-3 xl:text-start">
              Nous vous proposons des challenges écologiques à partager avec vos
              amis et/ou inconnus, que le meilleur gagne, avec un maximum de
              points !
            </p>
            <Button type="button-primary" name="Découvrir le concept" />
          </div>
        </div>
        <div className="green-card">
          <div className="w-11/12">
            <h3 className="subtitle text-white">Venez comme vous êtes !</h3>
            <div className="custom-underline bg-white"></div>
            <p className="green-card-subtext">
              Association, entreprises ou bien particuliers, venez donc créer un
              groupe et un challenge afin de jouer immédiatemment avec vos amis
              !
            </p>
            <div className="green-card-display">
              {greenCardLogo.map((element) => (
                <div className="green-card-box">
                  <Image
                    source={element.source}
                    description={element.description}
                    css="w-20"
                  />
                  <p className="text-center">{element.text}</p>
                </div>
              ))}
            </div>
            <div className="custom-flex-center">
              <Button
                icon={
                  <LaunchChallenge width="20px" height="20px" fill={PRIMARY} />
                }
                type="button-secondary"
                name="Lancer un challenge"
              />
            </div>
          </div>
        </div>
        <div className="challenge">
          <h3 className="subtitle">Challenges en cours</h3>
          <div className="custom-underline bg-primary text-center"></div>
          <div className="challenge-box">
            {challengesImages.map((element, index) => (
              <List
                key={index}
                source={element.source}
                description={element.description}
                text={element.text}
                title={element.title}
                />
            ))}
          </div>
          <h2 className="see-more-title">
            Voir les autres challenges en cours
            <i>
              <ArrowLinkTo width="50px" height="50px" fill={PRIMARY} />
            </i>
          </h2>
        </div>
        <div className="gray-card">
          <h3 className="subtitle">Nos partenaires</h3>
          <div className="custom-underline bg-primary"></div>
          <div className="gray-card-partners">
            {partnersLogo.map((element) => (
              <Image
                css="gray-card-logos"
                source={element.source}
                description={element.description}
              />
            ))}
          </div>
          <i className="flex justify-end">
            <Partners width="100px" height="100px" fill={PRIMARY} />
          </i>
        </div>
        <div className="versions">
          <div className="mb-4 custom-flex-center">
            <p className="versions-title">Version 100% gratuite</p>
            {versionFreeText.map((element) => (
              <VersionsLine text={element} />
            ))}
          </div>
          <div className="custom-flex-center">
            <p className="versions-title">Version Premium</p>
            <p className="versions-subtitle">
              Créée et pensée pour répondre aux besoins spécifiques des
              entreprises
            </p>
            {versionPremiumText.map((element) => (
              <VersionsLine text={element} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
