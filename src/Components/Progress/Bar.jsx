import { useState } from "react";

const Bar = ({ bgcolor, progress }) => {
  const [percent, setPercent] = useState(progress);
  const Parentdiv = {
    height: "30px",
    width: "100%",
    backgroundColor: "rgb(225, 225, 225)",
    borderRadius: 40,
    margin: "35px 0",
  };

  const Childdiv = {
    height: "100%",
    width: `${percent}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    transition: ".7s ease-in-out",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  const percentHandler = (e) => {
    console.log(e.clientX);
    setPercent(Math.ceil(100 * (e.clientX / window.innerWidth)));
  };

  return (
    <div style={Parentdiv} onClick={percentHandler} className="div">
      <div style={Childdiv}>
        <span style={progresstext}>{`${percent}%`}</span>
      </div>
    </div>
  );
};

export default Bar;
