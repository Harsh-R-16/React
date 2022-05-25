import React from "react";
import "./style.css";

export default function Matrix1() {
  const mat = [];
  let obj = {};
  for (let i = 0; i < 5; i++) {
    let arr = [];
    for (let j = 0; j < 5; j++) arr.push(0);
    mat.push(arr);
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let num = Math.floor(Math.random() * 99) + 1;
      while (obj[num] || !isSafe(num, i, j)) {
        num = Math.floor(Math.random() * 99) + 1;
      }
      obj[num] = 1;
      mat[i][j] = num;
    }
  }

  function isSafe(num, i, j) {
    if (num + mat[i][j - 1] > 100) return false;
    if (i - 1 >= 0 && num + mat[i - 1][j] >= 100) return false;
    return true;
  }

  return (
    <div id="mat">
      <h1>Matrix 1</h1>
      <section>{mat.map((i) => i.map((j) => <p>{j}</p>))}</section>
    </div>
  );
}
