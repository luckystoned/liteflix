import { componentScreen } from "../components/UploadModal/componentScreen";

interface UploadScreenState {
  screen: string;
  component: JSX.Element;
  nextScreen: string;
}

// Enumeración de posibles pantallas (opcional, si tienes un conjunto finito de pantallas)
type ScreenKey = keyof typeof componentScreen;

export const uploadFileReducer = (state: UploadScreenState, screen: ScreenKey): UploadScreenState => {
  const dispatchedScreen = componentScreen[screen];

  return {
    screen,
    component: dispatchedScreen.component,
    nextScreen: dispatchedScreen.nextScreen,
  };
};