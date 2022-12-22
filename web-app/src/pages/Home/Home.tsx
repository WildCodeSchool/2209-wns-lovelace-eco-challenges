import { gql, useQuery } from "@apollo/client";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { MyProfileQuery } from "../../gql/graphql";

import CreateWilder from "../../pages/CreateWilder/CreateWilder";
import {
  CREATE_WILDER_PATH,
  HOME_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from "../../pages/paths";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import Button from '../../Shared/Buttons/Button';

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
      <h2 className="title">Défiez vos groupes d'amis dans des challenges écolo !</h2>
      <p className="subtitle" >Sensibilisez, mobilisez et jouez avec vos amis avec Eco Playground, testez le tout de suite dans sa version gratuite</p>
      <div className="buttons">
        <Button name="S'inscrire" />
        <Button name="Se connecter" />
      </div>
      <div className="images">
        <img className="image" src="https://via.placeholder.com/150" alt="image1" />
        <img className="image" src="https://via.placeholder.com/150" alt="image2" />
      </div>
      <div className="card">
        <div>
          <div>
            <img alt="logo planète" />
          </div>
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Home;

{/*
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

*/}