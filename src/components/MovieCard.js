import React from "react";
import { TMDB_IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null; // ✅ Prevent rendering broken card

  return (
    <div className="w-48 pr-4">
      <img alt="Movie card" src={TMDB_IMG_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
