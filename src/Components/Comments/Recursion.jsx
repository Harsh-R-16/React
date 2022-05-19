import React from "react";

export default function Recursion({ data }) {
  const temp = data.map((i) => i.replies);
  const [arr, setArr] = React.useState(temp);

  return (
    <ol>
      {data.map((i, index) => (
        <li
          key={index}
          style={{
            margin: "15px 30px",
            border: "1px solid rgb(237, 237, 237)",
            padding: "5px 7px",
          }}
        >
          <p>
            {i.author} {i.points} points ({Math.floor(Math.random() * 60)}{" "}
            minutes ago)
          </p>
          <h4 style={{ margin: "6px 0" }}>{i.body}</h4>
          <p>Reply | Give Award | Share | Report | Save</p>
          {i.replies && <Recursion data={arr[index]} />}
        </li>
      ))}
    </ol>
  );
}
