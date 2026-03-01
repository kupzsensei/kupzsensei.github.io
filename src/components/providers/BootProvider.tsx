'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BootContextType {
  isBooted: boolean;
  setBooted: () => void;
}

const BootContext = createContext<BootContextType>({
  isBooted: false,
  setBooted: () => {},
});

export const useBoot = () => useContext(BootContext);

export default function BootProvider({ children }: { children: ReactNode }) {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('booted')) {
      setIsBooted(true);
    }
  }, []);

  const setBooted = () => {
    setIsBooted(true);
    sessionStorage.setItem('booted', 'true');
  };

  return (
    <BootContext.Provider value={{ isBooted, setBooted }}>
      {children}
    </BootContext.Provider>
  );
}
