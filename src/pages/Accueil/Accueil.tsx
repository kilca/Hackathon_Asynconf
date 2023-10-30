import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Page d'accueil
 */
const Accueil = () => {
  const navigate = useNavigate();
  const handleNextStep = () => navigate("/calcul-emprunt");

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Outil de calcul d'emprunt d'achat by Green Bank
      </h1>
      <div className="flex items-center">
        <button
          onClick={handleNextStep}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Commencer
        </button>
      </div>
    </>
  );
};
export default Accueil;
