import { gql, useQuery } from "@apollo/client";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

/* import { MyProfileQuery } from "../../gql/graphql"; */

import CreateWilder from "../../pages/CreateWilder/CreateWilder";
import {
  CREATE_WILDER_PATH,
  HOME_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from "../../pages/paths";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import Button from "../../Shared/Buttons/Button";
import MakeDifference from "../../assets/MakeDifference";
import GoodForPlanet from "../../assets/GoodForPlanet";
import Solidarity from "../../assets/Solidarity";
import WithFriends from "../../assets/WithFriends";
import Company from "../../assets/Company";
import LaunchChallenge from "../../assets/LaunchChallenge";
import ArrowLinkTo from "../../assets/ArrowLinkTo";
import Partners from "../../assets/Partners";
import Check from "../../assets/Check";

const MY_PROFILE = gql`
  query MyProfile {
    myProfile {
      emailAddress
    }
  }
`;

const Home = () => {
  /* const { data, refetch } = useQuery<MyProfileQuery>(MY_PROFILE); */
  return (
    <div className="home">
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
      <div className="images">
        <img
          className="image"
          src="https://via.placeholder.com/150"
          alt="image1"
        />
        <img
          className="image"
          src="https://via.placeholder.com/150"
          alt="image2"
        />
      </div>
      <div className="card">
        <div className="text">
          <i className="svg">
            <MakeDifference width="50px" height="50px" />
          </i>
          <p>Faire la différence</p>
        </div>
        <div className="text">
          <i className="svg">
            <GoodForPlanet width="50px" height="50px" />
          </i>
          <p>Bon pour la planète</p>
        </div>
        <div className="text">
          <i className="svg">
            <Solidarity width="50px" height="50px" />
          </i>
          <p>Solidarité</p>
        </div>
        <div className="subcard">
          <p className="subtext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industuy
          </p>
          <Button type="button-primary" name="Découvrir les challenges" />
        </div>
      </div>
      <div className="green-card">
        <div className="green-card-display">
          <div className="white-card">
            <div>
              <i>
                <Company width="80px" height="80px" />
              </i>
              <p className="text-center">Entreprise</p>
            </div>
          </div>
          <div className="white-card">
            <div>
              <i>
                <WithFriends width="80px" height="80px" />
              </i>
              <p className="text-center">Entre amis</p>
            </div>
          </div>
        </div>
        <div className="button">
          <Button
            icon={<LaunchChallenge width="20px" height="20px" />}
            type="button-secondary"
            name="Lancer un challenge"
          />
        </div>
      </div>
      <div className="challenges">
        <h2 className="title">
          Voir les challenges en cours
          <i>
            <ArrowLinkTo width="50px" height="50px" />
          </i>
        </h2>
        <div className="gray-card">
          <h3 className="subtitle">Nos partenaires</h3>
          <i><Partners width="100px" height="100px" /></i>
        </div>
      </div>
      <div className="versions">
        <p className="versions-title">Version 100% gratuite</p>
        <p className="versions-line"><i className="mr-5"><Check width="30px" height="30px" /></i>Coucou les copains</p>
        <p className="versions-line"><i className="mr-5"><Check width="30px" height="30px" /></i>Coucou les copains</p>
        <p className="versions-line"><i className="mr-5"><Check width="30px" height="30px" /></i>Coucou les copains</p>
        <p className="versions-title">Version Premium</p>
        <p className="versions-subtitle">Créée et pensée pour répondre aux besoins spécifiques des entreprises</p>
        <p className="versions-line"><i className="mr-5"><Check width="30px" height="30px" /></i>Coucou les copains</p>
        <p className="versions-line"><i className="mr-5"><Check width="30px" height="30px" /></i>Coucou les copains</p>
        <p className="versions-line"><i className="mr-5"><Check width="30px" height="30px" /></i>Coucou les copains</p>
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
<<<<<<< HEAD
          </PageTitle>
          {data?.myProfile ? (
=======
          </PageTitle> */}
          {/* {data?.myProfile ? (
>>>>>>> 5b400de (before rebase)
            <i>{data?.myProfile.emailAddress}</i>
          ) : (
            <nav>
              <Link to={SIGN_UP_PATH}>Inscription</Link>
              {" | "}
              <Link to={SIGN_IN_PATH}>Connexion</Link>
            </nav>
<<<<<<< HEAD
          )}
        </Container>
=======
          )} */}
          <SignUp/>
        {/* 
          <main>
              <Routes>
              <Route path={HOME_PATH} element={<Home />} />
              <Route path={CREATE_WILDER_PATH} element={<CreateWilder />} />
              <Route path={SIGN_UP_PATH} element={<SignUp />} />
              <Route path={SIGN_IN_PATH} element={<SignIn onSuccess={refetch} />} />
            </Routes>
          </main>
         */}
        {/* </Container>
>>>>>>> 5b400de (before rebase)
      </Header>
      <MainContainer>
        
      </MainContainer>
      <Footer>
        <Container>
          <p>&copy; 2022 Wild Code School</p>
        </Container>
      </Footer>
      <ToastContainer />

*/
}
