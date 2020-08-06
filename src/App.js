import React, { useState, useEffect } from "react";
import { render } from "react-dom";


import Header from "./components/Header";
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')
  // const api_url = "https://www.breakingbadapi.com/api/characters";

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div>
      <Header />
      <Search 
        getQuery={(q) => setQuery(q)}
      />
      <CharacterGrid 
        isLoading={isLoading}
        items={items}
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
