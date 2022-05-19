import React from "react";
import Folder from "./Folder";
import data from "./data";

export default function Recursion() {
  return (
    <div>
      <Folder data={data} />
    </div>
  );
}
