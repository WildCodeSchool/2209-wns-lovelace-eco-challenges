import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import CreateWilder from "../pages/CreateWilder/CreateWilder";
import Home from "../pages/Home/Home";
import {
  CREATE_WILDER_PATH,
  HOME_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from "../pages/paths";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import {
  Container,
  Footer,
  Header,
  MainContainer,
  PageTitle,
  PageTitleLink,
} from "./App.styled";

function App() {
  return (
    <>
      <Header>
        <Container>
          <PageTitle>
            <PageTitleLink to={HOME_PATH}>Wilders Book</PageTitleLink>
          </PageTitle>
          <nav>
            <Link to={SIGN_UP_PATH}>Inscription</Link>
            {" | "}
            <Link to={SIGN_IN_PATH}>Connexion</Link>
          </nav>
        </Container>
      </Header>
      <MainContainer>
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={CREATE_WILDER_PATH} element={<CreateWilder />} />
          <Route path={SIGN_UP_PATH} element={<SignUp />} />
          <Route path={SIGN_IN_PATH} element={<SignIn />} />
        </Routes>
      </MainContainer>
      <Footer>
        <Container>
          <p>&copy; 2022 Wild Code School</p>
        </Container>
      </Footer>
      <ToastContainer />
    </>
  );
}

export default App;
