import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { DesignTokensProvider, GlobalStyles, Icon } from "@mgmresorts/mgm-ui";
// import Home from "./pages/Home";
import OfferLetterPage from "./pages/OfferLetterPage";
import BackgroundCheck from "./pages/BackgroundCheck";

import GraphQLProvider from "./data/GraphQLProvider";
import routes from "./routes";
 
const App = () => {
  return (
    <GraphQLProvider>
      <Router>
      {/* <GlobalStyles />
        <DesignTokensProvider> */}
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.OFFER_LETTER} element={<OfferLetterPage />} />
          <Route path={routes.BACKGROUND_CHECK} element={<BackgroundCheck />} />
          
        </Routes>
        {/* </DesignTokensProvider> */}
      </Router>
    </GraphQLProvider>
  );
};
 
export default App;