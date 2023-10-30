import React from "react";
import { QuestionData, Proposition } from "../../model/question.model";

interface EmpruntFormProps {
  data: QuestionData; // données du formulaire
  previouslySelected?: Proposition; // données séléctionnées précédemment
  handleClickChoice: (value: Proposition) => void; // event du click
  imagePath?: string; // image de référence
}

/**
 *  Permet l'affichage des questions du formulaire d'emprunt
 */
const EmpruntForm = ({
  data,
  previouslySelected,
  handleClickChoice,
  imagePath
}: EmpruntFormProps) => {
  return (
    <div className="">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
        {data?.titre}
        {imagePath && <img src={imagePath} className="inline-block ml-4" />}
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        {data?.propositions.map((proposition, index) => (
          <button
            key={index}
            onClick={() => {
              handleClickChoice({
                ...proposition,
                type: data.type
              });
            }}
            className={`m-2 px-4 py-2 text-white font-semibold rounded 
            ${
              previouslySelected?.nom === proposition.nom
                ? "hover:bg-green-600 bg-green-500"
                : "hover:bg-blue-600 bg-blue-500"
            }`}
          >
            {proposition.nom}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmpruntForm;
