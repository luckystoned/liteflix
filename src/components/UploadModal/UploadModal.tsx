import React, { useContext, useRef } from "react"
import cs from "classnames"
import { MoviesContex } from "../../context"
import * as S from "./UploadModal.styles"
import closeSvg from "../../assets/img/cerrar.svg"

export const UploadModal = () => {
  const {
    isOpen,
    movieTitle,
    movieFile,
    screen,
    component,
    nextScreen,
    uploadMovie,
    dispatch,
    setMovieTitle,
    setMovieFile,
    toggleIsOpen,
  } = useContext(MoviesContex)
  const inputTitleRef = useRef<HTMLInputElement>(null)

  const handleUploadMovieClick = async () => {
    if (movieFile && movieTitle) {
      if (screen === "loaded") uploadMovie()

      if (screen === "uploaded") {
        setMovieTitle("")
        setMovieFile(new File([""], "default", { type: "image/png" }))
        toggleIsOpen()
      }

      dispatch(nextScreen)
    }
  }

  const handleMovieTitleChange = (value: string) => {
    setMovieTitle(value)
  }

  return (
    <S.Overlay className={cs({ open: isOpen })}>
      <S.UploadModal>
        {screen !== "uploaded" && <S.Header>Agregar película</S.Header>}
        <S.CloseIcon src={closeSvg} onClick={toggleIsOpen} />

        {component}

        {screen !== "uploaded" && (
          <S.InputTitle
            placeholder="TÍTULO"
            ref={inputTitleRef}
            value={movieTitle}
            onChange={(event) => handleMovieTitleChange(event.target.value)}
          />
        )}
        <S.UploadButton
          className={cs({ uploaded: movieTitle && movieFile })}
          disabled={screen === "loading"}
          onClick={handleUploadMovieClick}
        >
          {screen === "uploaded"
            ? "Ir al home"
            : screen === "loaded"
            ? "Subir película"
            : "Siguiente"}
        </S.UploadButton>
      </S.UploadModal>
    </S.Overlay>
  )
}
