import { createContext, useContext } from 'react';
import { View } from 'react-native';
import { useApp } from '../hooks/useApp';
import useFonts from '../hooks/useFonts';

const GlobalContext = createContext();

export default function AppContext({ children }) {
  const { handleLayout, isLoaded } = useFonts();
  if (!isLoaded) return null;

  return (
    <GlobalContext.Provider value={useApp()}>
      <View onLayout={handleLayout} />
      {children}
    </GlobalContext.Provider>
  );
}
export const useAppContext = () => useContext(GlobalContext);
