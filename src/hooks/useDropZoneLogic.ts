import { useCallback } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone/.";

export const useDropZoneLogic = (setMovieFile: (file: File) => void) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setMovieFile(acceptedFiles[0]);
    }
  }, [setMovieFile]);

  const dropzoneOptions: DropzoneOptions = {
    onDrop,
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/svg+xml": [".svg"],
    },
  };

  return useDropzone(dropzoneOptions);
};