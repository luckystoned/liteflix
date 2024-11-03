import React, { useContext, useRef } from "react"
import cs from "classnames"
import { MoviesContext } from "../../context"
import { ScreenKey } from "../../types/liteflixTypes"
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
  } = useContext(MoviesContext)
  const inputTitleRef = useRef<HTMLInputElement>(null)

  const handleUploadMovieClick = async () => {
    if (movieFile && movieTitle) {
      if (screen === "loaded") {
        await uploadMovie(movieFile, movieTitle)
      }

      if (screen === "uploaded") {
        resetForm()
        toggleIsOpen()
      }
      dispatch(nextScreen as ScreenKey)
    }
  }

  const resetForm = () => {
    setMovieTitle("")
    setMovieFile(new File([""], "default", { type: "image/png" }))
  }

  const handleMovieTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieTitle(event.target.value)
  }

  const renderHeader = () => {
    if (screen !== "uploaded") {
      return <S.Header>Agregar película</S.Header>
    }
  }

  const renderInputTitle = () => {
    if (screen !== "uploaded") {
      return (
        <S.InputTitle
          placeholder="TÍTULO"
          ref={inputTitleRef}
          value={movieTitle}
          onChange={handleMovieTitleChange}
        />
      )
    }
  }

  const renderUploadButton = () => {
    const buttonText = screen === "uploaded" ? "Ir al home" : screen === "loaded" ? "Subir película" : "Siguiente"
    return (
      <S.UploadButton
        className={cs({ uploaded: movieTitle && movieFile })}
        disabled={screen === "loading"}
        onClick={handleUploadMovieClick}
      >
        {buttonText}
      </S.UploadButton>
    )
  }

  return (
    <S.Overlay className={cs({ open: isOpen })}>
      <S.UploadModal>
        {renderHeader()}
        <S.CloseIcon src={closeSvg} onClick={toggleIsOpen} />
        {component}
        {renderInputTitle()}
        {renderUploadButton()}
      </S.UploadModal>
    </S.Overlay>
  )
}
