import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../context/theme/ThemeContext";

const ThemeButton = () => {
  const { dispatch, darkMode } = useContext(ThemeContext);


  
  const changeTheme = () => {
    if(darkMode){
     dispatch ({
         type : "LIGHT_MODE",
         payload : false,
     })
    }else{
     dispatch ({
         type : "DARK_MODE",
         payload : true,
     })
    }
 }

  const customStyle = {
    height: "50px",
    width: "50px",
    textAlign: "center",
    borderRadius: "50%",
    position: "fixed",
    right: "30px",
    bottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  };

  return (
    <span
      className={darkMode? "bg-light text-dark shadow" : "bg-dark text-light shadow"}
      style={customStyle}
      onClick={changeTheme}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </span>
  );
};

export default ThemeButton;
