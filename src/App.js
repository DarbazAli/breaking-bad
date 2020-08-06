import React, { useState, useEffect } from "react";
import { render } from "react-dom";


import Header from "./components/Header";
const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const api_url = "https://www.breakingbadapi.com/api/characters";

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  });

  return (
    <div>
      <Header />
    </div>
  );
};

render(<App />, document.getElementById("root"));
