import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames, isGptEnabled } = useSelector(
    (store) => store.gpt
  );

  // Skip if GPT is disabled
  if (isGptEnabled === false) return null;

  // ✅ Fallback data
  const fallbackMovieNames = ["Action Movies", "Comedy Movies", "Tamil Movies"];
  const fallbackMovieResults = [
    [
      {
        id: 101,
        title: "Mad Max: Fury Road",
        poster_path: "/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
      },
      {
        id: 102,
        title: "John Wick",
        poster_path: "/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
      },
      {
        id: 103,
        title: "Extraction 2",
        poster_path: "/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
      },
      {
        id: 104,
        title: "The Dark Knight",
        poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
    ],
    [
      {
        id: 201,
        title: "The Mask",
        poster_path: "/kloA48Zp6H9pmGgnlgCL8ISayVK.jpg",
      },
      {
        id: 202,
        title: "Jumanji: Welcome to the Jungle",
        poster_path: "/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg",
      },
      {
        id: 203,
        title: "The Hangover",
        poster_path: "/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
      },
      {
        id: 204,
        title: "Central Intelligence",
        poster_path: "/9Bby4x2W0RXLAg3fUfa0n2fY5sW.jpg",
      },
    ],
  ];

  const finalMovieNames = movieNames?.length ? movieNames : fallbackMovieNames;
  const finalMovieResults =
    movieResults?.length === finalMovieNames.length
      ? movieResults
      : fallbackMovieResults;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {finalMovieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={finalMovieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
