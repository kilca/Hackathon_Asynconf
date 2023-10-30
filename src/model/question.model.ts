// Modèle de donnée des questions du formulaire d'emprunt
export interface Proposition {
  nom: string;
  note: number;
  type?: "score" | "bonus";
}
export interface QuestionData {
  titre: string;
  image: string;
  step: string;
  type: "score" | "bonus";
  propositions: Proposition[];
}
