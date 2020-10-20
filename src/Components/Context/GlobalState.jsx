import React, {createContext,useState} from "react"
import MenuList from "../Menu.json"
export const GlobalContext = createContext()

export const GlobalProvider = ({children})=>{
const [isCategory,setIsCategory] = useState(null)

    return(
        <GlobalContext.Provider value = {{MenuList,isCategory,setIsCategory}}>
         {children}
        </GlobalContext.Provider>
    )
}
