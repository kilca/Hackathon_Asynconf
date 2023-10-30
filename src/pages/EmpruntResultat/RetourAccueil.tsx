import React from "react";
import { Link } from "react-router-dom";

const RetourAccueil = () => {
  return (
    <Link
      className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      to={{
        pathname: "/"
      }}
    >
      Retour à l'accueil
    </Link>
  );
};
export default RetourAccueil;
