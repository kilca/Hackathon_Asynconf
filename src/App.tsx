// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Accueil from "./pages/Accueil/Accueil";
import EmpruntQuestionnaire from "./pages/EmpruntQuestionnaire/EmpruntQuestionnaire";
import EmpruntResultat from "./pages/EmpruntResultat/EmpruntResultat";

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" Component={Accueil} />
          <Route path="/calcul-emprunt" Component={EmpruntQuestionnaire} />
          <Route path="/resultat-emprunt" Component={EmpruntResultat} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
