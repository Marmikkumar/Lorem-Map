import React, { useState } from "react";
import "./styles.css";
import text from "./Data";
export default function App() {
  const [key, setkey] = useState(0);
  const [Text, setText] = useState([]);

  function getVal(event) {
    const val = document.querySelector("input").value;
    if (val <= 1) {
      setkey(1);
    } else if (val >= 8) {
      setkey(8);
    } else {
      setkey(val);
    }
  }

  function handleclick(event) {
    return event.preventDefault(), setText(text.slice(0, key));
  }

  return (
    <div className="App">
      <div>
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
      </div>
      <form className="inp" onSubmit={handleclick}>
        <label>Paragraph: </label>
        <input onChange={getVal} type="number" placeholder="0" id="paragraph" />
        <button type="submit">Generate</button>
      </form>

      <article>
        {Text.map((item) => (
          <p>{item}</p>
        ))}
      </article>
    </div>
  );
}
