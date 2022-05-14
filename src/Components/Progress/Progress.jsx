import Bar from "./Bar";

export default function Progress() {
  const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const colors = ["orange", "red", "green", "blue", "yellow"];
  return (
    <main id="progress">
      <h1>Progress Bar</h1>

      {arr.map((i, index) => (
        <Bar bgcolor={colors[index % 5]} progress={arr[index]} key={index} />
      ))}
    </main>
  );
}
