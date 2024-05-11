import { createContext, useContext, useReducer } from "react";

const counterContext = createContext();
const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      state;
  }
};

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <counterContext.Provider value={{ state, dispatch }}>
      {children}
    </counterContext.Provider>
  );
};

export default CounterContextProvider;

export const useCounterContext = () => useContext(counterContext);
