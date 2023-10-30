import "./Stepper.css";
import React from "react";
import { PropsWithChildren } from "react";
// Code repris de : https://codepen.io/ritesh14887/pen/QWwBQOq

// Overlay
interface StepperProps {
  isVertical?: boolean;
  isInline?: boolean;
}
const Stepper = (props: PropsWithChildren<StepperProps>) => (
  <div
    className={`Stepper ${props.isVertical ? "Stepper--vertical" : ""} ${
      props.isInline ? "Stepper--inline" : ""
    }`}
  >
    {props.children}
  </div>
);

export default Stepper;
