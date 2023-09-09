import React from "react";

const a1 = "./1a.png";
const a2 = "./2a.png";
const a3 = "./3a.png";
const a4 = "./4a.png";
const Loading = () => {
  return (
    <div className="wrapper">
      {/* <svg>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          Vibra
        </text>
      </svg> */}

      <div className="newLoading ">
        <img src={a1} className="a1" alt="a1" />
        <img src={a2} className="a2" alt="a1" />
        <img src={a3} className="a3" alt="a1" />
        <img src={a4} className="a4" alt="a1" />
        <img src={a4} className="a5" alt="a1" />
      </div>
    </div>
  );
};

export default Loading;
