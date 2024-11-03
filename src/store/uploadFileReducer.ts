import { componentScreen } from "../components/UploadModal/componentScreen";
import { UploadScreensState } from "../types/liteflixTypes";

//TODO PASAR A ARCHIVO DE TIPOS
export type ScreenKey = "loading" | "dropzone" | "loaded" | "uploaded" | "error";

export const uploadFileReducer = (_state: UploadScreensState, screen: ScreenKey): UploadScreensState => {
  const dispatchedScreen = componentScreen[screen];

  return {
    screen,
    component: dispatchedScreen.component,
    nextScreen: dispatchedScreen.nextScreen,
  };
};