import { useCallback } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone/.";

/**
 * Custom hook to manage drop zone logic for uploading movie files.
 *
 * @param setMovieFile - Function to set the uploaded movie file.
 * @returns Dropzone properties and methods.
 */
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