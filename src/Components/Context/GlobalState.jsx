import React, {createContext} from "react"
import MenuList from "../Menu.json"
export const GlobalContext = createContext()

export const GlobalProvider = ({children})=>{


    return(
        <GlobalContext.Provider value = {{MenuList}}>
         {children}
        </GlobalContext.Provider>
    )
}
