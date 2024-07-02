import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

export default function FavoriteButton() {
  // this should be a state variable
  // const isFavorite = false;

  const [isFavorite, setFavorite] = useState(false);

  function handleClick() {
    setFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={handleClick}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
