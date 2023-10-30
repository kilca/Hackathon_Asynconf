// @ts-ignore
import bData from "./data/bank.json";
import { Proposition } from "./model/question.model";

function arrondirA2Decimale(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

/**
 * Calcule le score d'emprunt
 */
function calculerScoreEmprunt(
  caracteristiques: Record<number, Proposition> | undefined
) {
  if (!caracteristiques) {
    throw new Error("Caractéristiques non reçues");
  }

  let scoreSum = 0;
  let bonusMalusSum = 0;
  for (const [, value] of Object.entries(caracteristiques)) {
    if (value.type === "score") {
      scoreSum += value.note;
    } else if (value.type === "bonus") {
      bonusMalusSum += value.note;
    }
  }
  return { scoreSum, bonusMalusSum };
}

/**
 * Calcule le taux d'emprunt à partir du score
 */
function calculerTauxEmpruntDuScore(score: number) {
  for (const svt of bData.scores_vers_taux) {
    if (svt.max >= score && svt.min <= score) {
      return svt.taux;
    }
  }
  throw new Error("Taux introuvable : " + score);
}

export function calculerTauxEmpruntAvecPassagers(
  caracteristiques: Record<number, Proposition> | undefined
) {
  const { scoreSum, bonusMalusSum } = calculerScoreEmprunt(caracteristiques);
  const txEmpruntSansBonus = calculerTauxEmpruntDuScore(scoreSum);
  return arrondirA2Decimale(txEmpruntSansBonus + bonusMalusSum);
}
