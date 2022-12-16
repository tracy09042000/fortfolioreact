import "./intro.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const texRef = useRef();

  useEffect(() => {
    init(texRef.current, {
      showCursor: false,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Safak Kocaolu</h1>
          <h3>
            Freelance <span ref={texRef}></span>
          </h3>
        </div>
        <a href="#fortfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
