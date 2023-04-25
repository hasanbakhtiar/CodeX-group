import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = props=>{

    const [mode,setMode] = useState(localStorage.getItem('mode'));
    return(
        <ThemeContext.Provider value={[mode,setMode]}>
            {props.children}
        </ThemeContext.Provider>
    )
}