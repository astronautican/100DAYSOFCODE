import "./styles.css";

import React, { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const url = "https://v2.jokeapi.dev/joke/Any?type=single";

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      console.log(json);
      setAdvice(json.joke);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div class="App">
        <div class="main">
          <div class="advice">{advice}</div>
          <div>
            <button class="joke-btn" onClick={fetchData}>
              New Joke
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
