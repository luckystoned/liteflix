import React, { FC } from "react";
import { MenuContextProvider, MoviesContextProvider } from "./context";
import { Menu, NavBar } from "./components";
import { HomePage } from "./pages";


const App: FC = () => {

  return (
    <MoviesContextProvider>
      <MenuContextProvider>
        <NavBar />
        <Menu />
      </MenuContextProvider>
      <HomePage />
    </MoviesContextProvider>
  );
};

export default App;