import React from "react";

export default function Toggle() {
  const toggler = (...nums) => {
    let index = 0;
    console.log("start");
    return () => {
      console.log(nums[index]);
      index++;
      if (index === nums.length) index = 0;
    };
  };
  const toggle1 = toggler(1, 2, 3, 4, 5);
  toggle1();
  toggle1();
  toggle1();
  toggle1();
  toggle1();
  toggle1();
  toggle1();
  const toggle2 = toggler(1, 2, 3);
  toggle2();
  toggle2();
  toggle2();
  toggle2();
  toggle2();
  toggle2();
  return <div>Toggle</div>;
}
