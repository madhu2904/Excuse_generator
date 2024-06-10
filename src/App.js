import "./styles.css";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function App() {
  const [excuseName, setExcuse] = useState("");
  const excuse_function = (excuse) => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/" + excuse).then(
      (result) => {
        setExcuse(result.data[0].excuse);
      }
    );
  };
  return (
    <div className="App">
      <div className="headings">
        <h1>Instant Getaways: The Introvert's Escape Plan!</h1>
        <h2>Click the button to get cool excuses !</h2>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            excuse_function("party");
          }}
        >
          PARTY
        </button>

        <button
          onClick={() => {
            excuse_function("office");
          }}
        >
          OFFICE
        </button>

        <button
          onClick={() => {
            excuse_function("family");
          }}
        >
          FAMILY
        </button>
        <button
          onClick={() => {
            excuse_function("gaming");
          }}
        >
          GAMING
        </button>
        <h1 className="display">{excuseName}</h1>
        {console.log(excuseName)}
      </div>
    </div>
  );
}
