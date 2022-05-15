import React from "react";

export default function Toggle() {
  const toggler = () => {
    let num = 1;
    return () => {
      console.log(num++);
      if (num === 5) num = 1;
    };
  };
  const toggle = toggler();
  toggle();
  toggle();
  toggle();
  toggle();
  toggle();
  toggle();
  toggle();
  toggle();
  return <div>Toggle</div>;
}
