import React, { useState } from "react";
// @ts-ignore
import data from "../../data/questions.json";
import EmpruntForm from "../../components/EmpruntForm/EmpruntForm";
import Stepper from "../../components/Stepper/Stepper";
import Step from "../../components/Stepper/Step";
import { Link } from "react-router-dom";
import { Proposition, QuestionData } from "../../model/question.model";
import { imagesAssets } from "../../assets/imageAssets";

/**
 * Page de questionnaire pour l'emprunt de vehicule
 */
const EmpruntQuestionnaire = () => {
  const [step, setStep] = useState(1);
  const [selectedValues, setSelectedValues] = useState<
    Record<number, Proposition | undefined>
  >({});

  const questions = data as QuestionData[];
  const currentImgPath = imagesAssets[questions[step - 1]?.image];

  const handleClickChoice = (value: Proposition) => {
    setSelectedValues({ ...selectedValues, [step]: value });
    handleNextStep();
  };
  const handleNextStep = () => setStep((step) => step + 1);
  const handlePreviousStep = () => setStep((step) => step - 1);

  return (
    <>
      <Stepper>
        {questions.map((question, index) => {
          let stateName = "";
          if (step - 1 === index) {
            stateName = "is-active";
          } else if (selectedValues[index + 1] !== undefined) {
            stateName = "is-complete";
          }

          return (
            <Step
              key={`step_${index}`}
              indicator={(index + 1).toString()}
              title={questions[index].step}
              state={stateName}
            ></Step>
          );
        })}
      </Stepper>
      <EmpruntForm
        data={questions[step - 1]}
        handleClickChoice={handleClickChoice}
        previouslySelected={selectedValues[step]}
        imagePath={currentImgPath}
      />
      {step > questions.length && (
        <Link
          className="mb-5 px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          to={{
            pathname: "/resultat-emprunt"
          }}
          state={selectedValues}
        >
          Valider{" "}
        </Link>
      )}
      {step > 1 && (
        <button
          onClick={handlePreviousStep}
          className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Revenir en arrière
        </button>
      )}
    </>
  );
};
export default EmpruntQuestionnaire;
