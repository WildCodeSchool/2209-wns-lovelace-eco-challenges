import { gql, useQuery } from "@apollo/client";
import { Routes, Route, Link } from "react-router-dom";

import { MyProfileQuery } from "../../gql/graphql";

/* import { ToastContainer } from "react-toastify";
import CreateWilder from "../../pages/CreateWilder/CreateWilder";
import {
  CREATE_WILDER_PATH,
  HOME_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from "../../pages/paths";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
*/
import Button from "../../Shared/Buttons/Button";
import PngLogo from "../../Shared/Logos/PngLogo";
import VersionsLine from "../../Shared/Lines/VersionsLine";
import WithFriends from "../../assets/logos/WithFriends";
import Company from "../../assets/logos/Company";
import LaunchChallenge from "../../assets/logos/LaunchChallenge";
import ArrowLinkTo from "../../assets/logos/ArrowLinkTo";
import Partners from "../../assets/logos/Partners";
import imageHeader from "../../assets/images/imageHeader.jpg";
import {
  partnersLogo,
  versionFreeText,
  versionPremiumText,
  cardLogo,
  greenCardLogo,
} from "../../data/HomePage";

import { PRIMARY } from '../../Shared/Constants/Color';

const MY_PROFILE = gql`
  query MyProfile {
    myProfile {
      emailAddress
    }
  }
`;

const Home = () => {
  const { data, refetch } = useQuery<MyProfileQuery>(MY_PROFILE);

  return (
    <div className="home">
      <div className="header-image" >
        <div className="header-text">
          <h2 className="title">
            Défiez vos groupes d'amis dans des challenges écolo !
          </h2>
          <p className="subtitle">
            Sensibilisez, mobilisez et jouez avec vos amis avec Eco Playground,
            testez le tout de suite dans sa version gratuite
          </p>
          <div className="buttons">
            <Button type="button-primary" name="S'inscrire" />
            <Button type="button-primary" name="Se connecter" />
          </div>
        </div>
      </div>
      <div className="home-page">
      <div className="card">
        {cardLogo.map((element) => (
          <>
            <PngLogo style="card-image" source={element.source} description={element.description} />
            <div className="text">
              <p>{element.text}</p>
            </div>
          </>
        ))}
        <div className="subcard">
          <p className="subtext">
            Nous vous proposons des challenges écologiques à partager avec vos amis et/ou inconnus, que le meilleur gagne, avec un maximum de points !
          </p>
          <Button type="button-primary" name="Découvrir les challenges" />
        </div>
      </div>
      <div className="green-card">
        <div className="green-card-display">
          {greenCardLogo.map((element) => (
            <div className="green-card-box">
              <PngLogo source={element.source} description={element.description} style="w-20" />
              <p className="text-center">{element.text}</p>
          </div>
          ))}
        </div>
        <div className="button">
          <Button
            icon={<LaunchChallenge width="20px" height="20px" fill={PRIMARY} />}
            type="button-secondary"
            name="Lancer un challenge"
          />
        </div>
      </div>
      <div className="challenges">
        <h2 className="title">
          Voir les challenges en cours
          <i>
            <ArrowLinkTo width="50px" height="50px" fill={PRIMARY} />
          </i>
        </h2>
      </div>
        <div className="gray-card">
          <h3 className="subtitle">Nos partenaires</h3>
          <div className="underline"></div>
          <div className="gray-card-partners">
            {partnersLogo.map((element) => (
              <PngLogo style="gray-card-logos" source={element.source} description={element.description} />
            ))}
          </div>
          <i className="grey-card-icon">
            <Partners width="100px" height="100px" fill={PRIMARY} />
          </i>
        </div>
      <div className="versions">
        <div className="versions-free">
          <p className="versions-title">Version 100% gratuite</p>
          {versionFreeText.map((element) => (
            <VersionsLine text={element} />
          ))}
        </div>
        <div className="versions-premium">
          <p className="versions-title">Version Premium</p>
          <p className="versions-subtitle">
            Créée et pensée pour répondre aux besoins spécifiques des entreprises
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

{
  /*
 <Header>
        <Container>
          <PageTitle>
            <PageTitleLink to={HOME_PATH}>Wilders Book</PageTitleLink>
          </PageTitle>
          {data?.myProfile ? (
            <i>{data?.myProfile.emailAddress}</i>
          ) : (
            <nav>
              <Link to={SIGN_UP_PATH}>Inscription</Link>
              {" | "}
              <Link to={SIGN_IN_PATH}>Connexion</Link>
            </nav>
          )}
        </Container>
      </Header>
      <MainContainer>
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={CREATE_WILDER_PATH} element={<CreateWilder />} />
          <Route path={SIGN_UP_PATH} element={<SignUp />} />
          <Route path={SIGN_IN_PATH} element={<SignIn onSuccess={refetch} />} />
        </Routes>
      </MainContainer>
      <Footer>
        <Container>
          <p>&copy; 2022 Wild Code School</p>
        </Container>
      </Footer>
      <ToastContainer />

*/
}
