import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Page from "../Shared/Page";
import Challenges from "../pages/Challenges/Challenges";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Challenge from "../pages/Challenge/Challenge";

const App = () => {
  return (
    <div className="app-container">
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/challenge/:id" element={<Challenge />} />
        </Routes>
      </Page>
    </div>
  );
};

export default App;
