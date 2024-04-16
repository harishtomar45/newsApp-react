import WeatherReducer from "./WeatherReducer";

import { createContext, useReducer } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const initialState = {
    weather: [],
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
