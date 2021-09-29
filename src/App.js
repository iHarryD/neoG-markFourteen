import "./App.css";
import { useState } from "react";

function App() {
  const [magnitudeMessage, setMagnitudeMessage] = useState("");
  const [percentMessage, setPercentMessage] = useState("");
  const [initialPrice, setInitialPrice] = useState("");
  const [quantity, setquantity] = useState("");
  const [currentPrice, setcurrentPrice] = useState("");
  const [resultMag, setResultMag] = useState("");
  const [resultPercent, setResultPercent] = useState("");

  function calculateResult() {
    let result =
      Number(currentPrice) * Number(quantity) -
      Number(initialPrice) * Number(quantity);
    let percent =
      (Number(result) / Number(quantity) / Number(initialPrice)) * 100;
    if (currentPrice < 0 || quantity < 0 || initialPrice < 0) {
      setMagnitudeMessage("Values cannot be negative.");
      setResultMag("");
      setPercentMessage("");
      setResultPercent("");
    } else {
      if (result < 0) {
        setMagnitudeMessage("Your loss is ₹ ");
        setPercentMessage("Decrement of ");
        Math.abs(result);
      } else {
        setMagnitudeMessage("Your profit is ₹ ");
        setPercentMessage("Increment of ");
      }
      if (isNaN(percent)) {
        percent = 0;
      } else {
        percent = Math.abs(Number(percent.toFixed(3)));
      }
      if (percent >= 50 && result < 0) {
        document.body.classList.add("in-loss");
      } else {
        document.body.classList.remove("in-loss");
      }
      setResultMag(`${result}.`);
      setResultPercent(`${percent}%.`);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Broke or Rock</h1>
      </header>
      <main>
        <form>
          <label htmlFor="initial-price">
            Price the stocks were purchased at:{" "}
          </label>
          <input
            onChange={(event) => {
              setInitialPrice(event.target.value);
            }}
            type="number"
            name="initial-price"
            id="initial-price"
          />
          <label htmlFor="quantity">Numbers of stocks purchased: </label>
          <input
            onChange={(event) => {
              setquantity(event.target.value);
            }}
            type="number"
            name="quantity"
            id="quantity"
          />
          <label htmlFor="current-price">Current price of the stock: </label>
          <input
            onChange={(event) => {
              setcurrentPrice(event.target.value);
            }}
            type="number"
            name="current-price"
            id="current-price"
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              calculateResult();
            }}
          >
            Calculate
          </button>
        </form>
        <div className="output-div">
          {magnitudeMessage}
          {resultMag} {percentMessage}
          {resultPercent}
        </div>
      </main>
      <footer>
        <ul id="social-media-tab">
          <li>
            <a className="social-media-links" href="https://github.com/iHarryD">
              GitHub
            </a>
          </li>
          <li>
            <a
              className="social-media-links"
              href="https://www.linkedin.com/in/prashant-kumar-a97251195/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p id="portfolio-link">
          Website created by{" "}
          <a href="https://iharryd.github.io/portfolio/">Harry</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
