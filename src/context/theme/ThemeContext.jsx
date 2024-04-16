import { createContext, useReducer } from "react";

const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {


    const initialState = {
        darkMode : true ,
    }

    const ThemeRducer = (state, action) => {
      
        switch (action.type) {
            case "LIGHT_MODE":
                return {
                    ...state,
                    darkMode : false
                }
                case "DARK_MODE":
                    return {
                        ...state,
                        darkMode : true
                    }
                    
            
                
        }

       

    }

    const [state, dispatch] = useReducer(ThemeRducer, initialState);
  
  return (
    
    <ThemeContext.Provider 
    value={{
        ...state,
        dispatch
    }}>
        {children}
    </ThemeContext.Provider>

  )

}



export default ThemeContext ; 