import { useState } from "react";
import images from "./data";
import "./style.css";

export default function Slider() {
  const [curIndex, setCurIndex] = useState(0);

  const clcHandler = (e) => {
    if (e.target.id === "prev") {
      if (curIndex === 0) {
        setCurIndex(images.length - 1);
      } else setCurIndex((curIndex) => curIndex - 1);
    } else {
      if (curIndex === images.length - 1) {
        setCurIndex(0);
      } else setCurIndex((curIndex) => curIndex + 1);
    }
  };

  return (
    <>
      <main id="parent">
        <div id="child">
          {images.map((img, index) => (
            <img
              src={img}
              alt=""
              className={
                index === curIndex
                  ? "active"
                  : index === curIndex - 1
                  ? "prev"
                  : "next"
              }
            />
          ))}
        </div>
      </main>
      <div id="btns">
        <button onClick={clcHandler} id="prev">
          Previous
        </button>
        <button onClick={clcHandler} id="next">
          Next
        </button>
      </div>
    </>
  );
}
