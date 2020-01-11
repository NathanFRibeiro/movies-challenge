import React, { useState, useEffect } from "react";

import Catalog from "./components/Catalog";
import Header from "./components/Header";
import "./App.css";
import api from "./services/api";
import IMovie, { IResponse } from "./IMovie";

const App: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [city, setCity] = useState<string>("São Paulo");
  const [filter, setFilter] = useState<string>("");

  const getMovies = async () => {
    const endpoint = city === "São Paulo" ? "1" : "2";

    const response = await api.get(
      `https://api-content.ingresso.com/v0/templates/highlights/${endpoint}/partnership/home`
    );

    const movieData = response.data;

    if (filter !== "") {
      const filteredMovies = movieData.filter((response: IResponse) =>
        response.event.title.toUpperCase().includes(filter.toUpperCase())
      );

      setMovies(filteredMovies);
    } else {
      setMovies(movieData);
    }
  };

  useEffect(() => {
    getMovies();
  }, [city, filter]);

  const headerProps = {
    setCity,
    setFilter
  };

  return (
    <div className="App">
      <Header {...headerProps} />
      <Catalog selectedCity={city} movies={movies} />
    </div>
  );
};

export default App;
