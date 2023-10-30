import React from "react";
import { PropsWithChildren } from "react";

// Step
interface StepProps {
  indicator: string;
  passed?: boolean;
  title?: string;
  state: "" | "is-complete" | "is-active" | "is-warning" | "is-error" | string;
}
const Step = (props: PropsWithChildren<StepProps>) => (
  <div className={`Stepper__step ${props.state}`}>
    <div className="Stepper__indicator">
      <span className="Stepper__info">{props.indicator}</span>
    </div>
    <div className="Stepper__label">{props.title}</div>
    <div className="Stepper__panel">{props.children}</div>
  </div>
);
export default Step;
