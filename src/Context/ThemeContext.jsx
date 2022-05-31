import { createContext, useState } from "react";

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
    const [theme, setTheme]=useState("light")
    const themeToggle=()=>{
        if(theme==="light"){
            setTheme("dark")
            console.log("Theme changed to dark")
        }
        else{
            setTheme("light")
            console.log("Theme changes to light");
        }
    }
    return(
        <ThemeContext.Provider value={{theme, isLight: theme==="light", themeToggle}}>{children}</ThemeContext.Provider>
    )
}