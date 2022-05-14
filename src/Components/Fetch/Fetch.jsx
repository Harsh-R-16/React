import { useState, useEffect } from "react";

export default function Fetch() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cur, setCur] = useState("all");
  useEffect(() => {
    setProducts([]);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (cur === "all") {
          setProducts(res);
        } else {
          console.log(cur);
          setProducts(res.filter((i) => i.category === cur));
        }

        let temp = res.reduce(
          (acc, cur) => {
            if (!acc.includes(cur.category)) acc.push(cur.category);
            return acc;
          },
          ["all"]
        );

        setCategories(temp);
      });
  }, [cur]);
  return (
    <main id="fetch">
      <h1>Fake Store Api ({cur.toUpperCase()})</h1>
      <div id="btns">
        {categories.map((category) => (
          <button key={category.id} onClick={() => setCur(category)}>
            {category}
          </button>
        ))}
      </div>
      <section>
        {products.length ? (
          products.map((i, index) => (
            <div key={index}>
              <img src={i.image} alt="" />
              <h1>Title: {i.title}</h1>
              <h2>Price: {i.price}</h2>
              <p>Description: {i.description}</p>
              <p>
                Rating: {i.rating.rate} ({i.rating.count})
              </p>
            </div>
          ))
        ) : (
          <h1 style={{ textAlign: "center", margin: "100px" }}>Loading...</h1>
        )}
      </section>
    </main>
  );
}
