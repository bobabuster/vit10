import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [quote, setQuote] = useState("");

  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

  const fetchQuote = () => {
    fetch(`${BACKEND_URL}/api/quote`)
      .then((res) => res.json())
      .then((data) => setQuote(data.quote))
      .catch((err) => console.error("Error fetching quote:", err));
  };

  useEffect(() => {
    fetchQuote(); 
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Random Quote Generator</h1>

      <div className="card">
        <div className="card-body">
          <p className="card-text">{quote || "Loading..."}</p>
          <button className="btn btn-primary" onClick={fetchQuote}>
            Get New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
