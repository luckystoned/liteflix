import { componentScreen } from "../components/UploadModal/componentScreen";
import { ScreenKey, UploadScreensState } from "../types/liteflixTypes";

export const uploadFileReducer = (_state: UploadScreensState, screen: ScreenKey): UploadScreensState => {
  const dispatchedScreen = componentScreen[screen];

  return {
    screen,
    component: dispatchedScreen.component,
    nextScreen: dispatchedScreen.nextScreen,
  };
};