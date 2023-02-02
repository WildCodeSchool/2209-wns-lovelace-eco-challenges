import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Page from "../Shared/Page";

const App = () => {
  return (
    <div className="app-container">
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Page>
    </div>
  );
};

export default App;
