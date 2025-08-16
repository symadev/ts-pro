import React, { createContext, useState } from "react";

interface CounterProviderProps {
  children: React.ReactNode;
}

interface CounterContextValue {
  value: number;
  setCount: (num: number) => void;
}

const CounterContext = createContext<CounterContextValue | null>(null);

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {
  const [count, setCount] = useState<number>(1);
  return (
    <CounterContext.Provider
      value={{
        value: count,
        setCount,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};
