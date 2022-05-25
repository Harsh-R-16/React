import { useState, useEffect } from "react";
import url from "./data";
import "./style.css";
let running;

export default function Scroll() {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([[], [], []]);

  useEffect(() => {
    fetch(`${url}?per_page=30&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setImages((images) => [
          [...images[0], ...res.slice(0, 10)],
          [...images[1], ...res.slice(10, 20)],
          [...images[2], ...res.slice(20)],
        ]);
      });
  }, [page]);

  window.addEventListener("scroll", () => {
    if (running) return;
    let obj = {
      screenHeight: window.innerHeight,
      scrollY: window.scrollY,
      total: document.body.offsetHeight,
    };
    if (obj.total - obj.scrollY < 2000) {
      running = true;
      console.log("Ok Ok");
      setPage((page) => page + 1);
      setTimeout(() => {
        running = false;
      }, 2000);
    }
  });

  return (
    <main id="scroll">
      <h1>Unsplash Api Infinite Scroll</h1>
      <section>
        <div>
          {images[0].map((i, index) => (
            <img src={i.urls.regular} alt="" key={index} />
          ))}
        </div>
        <div>
          {images[1].map((i, index) => (
            <img src={i.urls.regular} alt="" key={index} />
          ))}
        </div>
        <div>
          {images[2].map((i, index) => (
            <img src={i.urls.regular} alt="" key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
