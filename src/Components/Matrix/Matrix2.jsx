import React from "react";
import "./style.css";

export default function Matrix1() {
  const mat = [];
  let obj = {};
  let sum100 = {};
  for (let i = 0; i < 5; i++) {
    let arr = [];
    for (let j = 0; j < 5; j++) arr.push(0);
    mat.push(arr);
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let num = Math.floor(Math.random() * 99) + 1;
      while (obj[num]) {
        num = Math.floor(Math.random() * 99) + 1;
      }
      is100(num, i, j);
      obj[num] = 1;
      mat[i][j] = num;
    }
  }
  //   console.log(sum100);

  function is100(num, i, j) {
    if (num + mat[i][j - 1] > 100) {
      sum100[`${i}${j}`] = 1;
      sum100[`${i}${j - 1}`] = 1;
    }
    if (i - 1 >= 0 && num + mat[i - 1][j] >= 100) {
      sum100[`${i}${j}`] = 1;
      sum100[`${i - 1}${j}`] = 1;
    }
  }

  return (
    <div id="mat">
      <h1>Matrix 2</h1>
      <section>
        {mat.map((i, x) =>
          i.map((j, y) => (
            <p
              style={{
                color: `${sum100[`${x}${y}`] || j % 5 === 0 ? "red" : ""}`,
              }}
            >
              {j}
            </p>
          ))
        )}
      </section>
    </div>
  );
}
