import React from "react";
import SearchMovie from "./components/SearchMovie";

const App = () => {
  return (
    <div className="container container-fluid justify-content-center bg-dark">
      <h1 className="text-white text-center">Movie Search App</h1>
      <SearchMovie />
    </div>
  );
};

export default App;
