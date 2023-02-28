import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Page from "../Shared/Page";
import Challenges from "../pages/Challenges/Challenges";

const App = () => {
  return (
    <div className="app-container">
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
        </Routes>
      </Page>
    </div>
  );
};

export default App;
