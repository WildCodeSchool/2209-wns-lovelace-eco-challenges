import { gql, useQuery } from "@apollo/client";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { MyProfileQuery } from "../gql/graphql";

import CreateWilder from "../pages/CreateWilder/CreateWilder";
import {
  CREATE_WILDER_PATH,
  HOME_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from "../pages/paths";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Home from '../pages/Home/Home';
import Page from '../Shared/Page';


const MY_PROFILE = gql`
  query MyProfile {
    myProfile {
      emailAddress
    }
  }
`;

const App = () => {
  const { data, refetch } = useQuery<MyProfileQuery>(MY_PROFILE);

  return (
    <div className="app-container">
      <Page>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/sign-up" element={ <SignUp/> }/>
          <Route path="/sign-in" element={ <SignIn/> }/>
        </Routes>
      </Page>
    </div>
  );
}

export default App;
