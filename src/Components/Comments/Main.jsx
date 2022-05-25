import React from "react";
import Comment from "./Comment";
import data from "./data.js";
import "./style.css";

export default function Main() {
  const [show, setShow] = React.useState(false);
  return (
    <main id="comments">
      <h1>Recursive Comments</h1>
      <h5 onClick={() => setShow(!show)}>Show Comments</h5>
      {show && (
        <ol>
          {data.map((item) => (
            <li>
              <Comment comment={item} />
            </li>
          ))}
        </ol>
      )}
    </main>
  );
}
