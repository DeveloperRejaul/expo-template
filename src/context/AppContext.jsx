import { createContext, useContext } from 'react';
import { useApp } from '../hooks/useApp';
import useFonts from '../hooks/useFonts';

const GlobalContext = createContext();

export default function AppContext({ children }) {
  return (
    <GlobalContext.Provider value={{ ...useApp(), ...useFonts() }}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useAppContext = () => useContext(GlobalContext);
