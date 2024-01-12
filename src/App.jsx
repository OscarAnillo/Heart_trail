import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const appEl = document.querySelector("body");
    appEl.addEventListener("mousemove", (e) => {
      const xPos = e.offsetX;
      const yPos = e.offsetY;

      const randomSize = Math.random() * 100;
      const spanEl = document.createElement("span");
      spanEl.style.left = xPos + "px";
      spanEl.style.top = yPos + "px";
      spanEl.style.height = randomSize + "px";
      spanEl.style.width = randomSize + "px";
      appEl.appendChild(spanEl);
      setTimeout(() => {
        spanEl.remove();
      }, 3000);
    });
  });

  return (
    <div>
      <img
        src="https://media.istockphoto.com/id/495759351/photo/red-wine-bottle-isolated-with-blank-label.jpg?s=612x612&w=0&k=20&c=MmBeyG_vh4XJeSuW8UkXT4_Ap2zoLfZt13oLHUmNCoI="
        alt=""
        className="wine-mobile"
      />
      <img
        src="https://www.treehugger.com/thmb/u-zYAAkcDXoJAzNRdLG5K9RSzIE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__04__variouswinebottles-40e065a02a744e6581731b117fffd4c7.jpg"
        alt=""
        className="wine-desktop"
      />
    </div>
  );
}

export default App;
