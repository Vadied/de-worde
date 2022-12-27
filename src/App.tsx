import React from "react";

import "./App.css";

import Card from "./components/card";

import useCards from "./hooks/useCards";

const App = () => {
  const { cards } = useCards();
  return (
    <div className="App">
      {cards.map((c, i) => (
        <Card key={i} card={c} />
      ))}
    </div>
  );
};

export default App;
