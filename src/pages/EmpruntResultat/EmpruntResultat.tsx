import React from "react";
// @ts-ignore
import data from "../../data/questions.json";
import { calculerTauxEmpruntAvecPassagers } from "../../utils";
import { useLocation } from "react-router-dom";
import { Proposition } from "../../model/question.model";
import RetourAccueil from "./RetourAccueil";

/**
 * Page des résultat du calcul d'emprunt
 */
const EmpruntResultat = () => {
  const location = useLocation();
  const choices = location.state as Record<number, Proposition>;

  let res = 0;
  try {
    res = calculerTauxEmpruntAvecPassagers(choices);
  } catch (error) {
    return (
      <>
        <div>
          <h2 className="text-2xl mb-4">
            Une erreur est survenue lors du calcul : {error?.message}
          </h2>
          <RetourAccueil />
        </div>
      </>
    );
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">
        Vous allez payer : <span className="font-bold">{res}%</span> de frais
        pour cet emprunt
      </h2>
      <div>
        <h2 className="text-xl font-bold mb-2">Résumé</h2>
        {Object.entries(choices).map(([key, choice]) => {
          const question = data[parseInt(key) - 1];
          return (
            <div key={key} className="mb-2">
              <span className="text-lg">
                {question.titre} : {choice.nom}
              </span>
            </div>
          );
        })}
      </div>
      <RetourAccueil />
    </div>
  );
};
export default EmpruntResultat;
