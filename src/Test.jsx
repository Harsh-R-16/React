import React from "react";

export default function Test() {
  let [s1, setS1] = React.useState(0);
  let [s2, setS2] = React.useState(0);
  let [s3, setS3] = React.useState(0);
  let func = () => {
    setS1(s1 + 1);
    setS2(s2 + 1);
    setS3(s3 + 1);
    setS1((s1) => s1 + 1);
    console.log("---------");
  };
  console.log({ s1, s2 });
  return (
    <div>
      <h1>State 1 -- {s1}</h1>
      <h1>State 2 -- {s2}</h1>
      <h1>State 3 -- {s3}</h1>
      <button onClick={func}>Click</button>
    </div>
  );
}
