import { createContext, useContext } from 'react';
import { useApp } from '../hooks/useApp';

const GlobalContext = createContext();

export default function AppContext({ children }) {
  return (
    <GlobalContext.Provider value={useApp()}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useAppContext = () => useContext(GlobalContext);
