import React from "react";
import data from "./data";
import Recursion from "./Recursion";

export default function Comments() {
  console.log(data);
  return (
    <main>
      <h1 style={{ margin: "20px auto", textAlign: "center" }}>
        Recursive Comments
      </h1>
      <Recursion data={data} />
    </main>
  );
}
