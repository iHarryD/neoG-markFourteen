import "./App.css";
import { useState } from "react";

function App() {
  const [magnitudeMessage, setMagnitudeMessage] = useState("");
  const [percentMessage, setPercentMessage] = useState("");
  const [initialPrice, setInitialPrice] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [currentPrice, setcurrentPrice] = useState(0);
  const [resultMag, setResultMag] = useState(0);
  const [resultPercent, setResultPercent] = useState(0);

  function calculateResult() {
    let result = currentPrice * quantity - initialPrice * quantity;
    let percent = (result / quantity / initialPrice) * 100;
    if (result < 0) {
      setMagnitudeMessage("loss");
      setPercentMessage("Decrement");
      Math.abs(result);
    } else {
      setMagnitudeMessage("profit");
      setPercentMessage("Increment");
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
    setResultMag(result);
    setResultPercent(percent);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stocks Calculator: Broke or Rock</h1>
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
              if (event.target.value < 0) {
                alert("Quantity cannot be negative.");
              } else {
                setquantity(event.target.value);
              }
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
          Your {magnitudeMessage} is {resultMag} (₹). {percentMessage} of{" "}
          {resultPercent}%.
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
          <a href="https://iharryd.github.io/personal-portfolio/">Harry</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
