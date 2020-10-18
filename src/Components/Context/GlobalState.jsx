import React, {createContext,useState} from "react"
import MenuList from "../Menu.json"
export const GlobalContext = createContext()

export const GlobalProvider = ({children})=>{
const [isAdCreator,setIsAdCreator] = useState(false)

    return(
        <GlobalContext.Provider value = {{MenuList,isAdCreator,setIsAdCreator}}>
         {children}
        </GlobalContext.Provider>
    )
}
