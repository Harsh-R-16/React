import { useState, useEffect } from "react";
let id;
export default function Debounce() {
  const [inp, setInp] = useState("");
  const [out, setOut] = useState("");

  useEffect(() => {
    // clearTimeout(id); // this will also work.
    id = setTimeout(() => {
      setOut(inp);
    }, 500);

    return () => clearTimeout(id);
  }, [inp]);

  return (
    <main id="debounce">
      <h1>Debouncing in React</h1>
      <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
      <h2>Input: {inp}</h2>
      <h2>Output: {out}</h2>
    </main>
  );
}
