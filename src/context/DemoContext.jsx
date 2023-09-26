import { createContext, useContext } from 'react';

const DemoContext = createContext();

export default function DemoAppContext({ children }) {
  return (
    <DemoContext.Provider>
      {children}
    </DemoContext.Provider>
  );
}
export const useDemoAppContext = () => useContext(DemoContext);
