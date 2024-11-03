import React, { useContext } from "react";
import { MoviesContext } from "../../context";
import { Text } from "../../styles";
import plusSvg from "../../assets/img/plus.svg";
import { AddMovieButtonProps } from "../../types/liteflixTypes";

export const AddMovieButton: React.FC<AddMovieButtonProps> = ({ size }) => {
  const { toggleIsOpen } = useContext(MoviesContext);

  const handleAddMovieClick = () => {
    toggleIsOpen();
  };

  return (
    <Text
      $weight="bold"
      $size={size || "18px"}
      onClick={handleAddMovieClick}
      style={{ cursor: "pointer" }}
    >
      <img src={plusSvg} alt="plus icon" style={{ marginRight: "12px" }} />
      Agregar pelicula
    </Text>
  );
};