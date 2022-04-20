import React, { useState } from "react";
import { Badge, FlexRow, Text } from "@epam/promo";

import classNames from "classnames";

import style from "./Example.module.css";

// We need to update state of steps via parameters

// Each step has 3 states

// It should be extendible i.e. - we should
// have as many steps as we want. And we need
// to be able to handle each state for each step

// Each step has unique identifier and name;
// We can access the state of step via its own identifier;

const Step = ({ caption, label, separator, isActive }) => {
  return (
    <>
      <Badge
        cx={classNames(style.button, style.button_is_active)}
        caption={caption}
        fill="semitransparent"
        size="36"
        color={isActive ? "blue" : "gray30"}
      />
      <Text cx={classNames(style.text)}>{label}</Text>
      {separator && <hr height="2px" width="50px" />}
    </>
  );
};

const Stepper = ({ steps, activeStep, activateSeparator }) => {
  return (
    <FlexRow alignItems="center">
      {steps.map((item, key, arr) =>
        arr.length - 1 === key ? (
          <Step
            key={key}
            caption={item.step}
            label={item.label}
            separator={false}
            isActive={key + 1 === activeStep}
          />
        ) : (
          <Step
            key={key}
            caption={item.step}
            label={item.label}
            separator={activateSeparator}
            isActive={key + 1 === activeStep}
          />
        )
      )}
    </FlexRow>
  );
};

export default function BasicExample() {
  return (
    <Stepper
      steps={[
        { step: 1, label: "Fill" },
        { step: 2, label: "Verify" },
        { step: 3, label: "Finish" }
      ]}
      activeStep={1}
      activateSeparator
    />
  );
}
