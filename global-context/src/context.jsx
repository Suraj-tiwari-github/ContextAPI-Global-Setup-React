import { createContext, useContext, useState } from "react";


const GlobalContext=createContext();

//let's create our custom hook and export it and we can use it in App.jsx for displaying name.
export const useGlobalContext=()=> useContext(GlobalContext)

const AppContext=({children})=>{
    const [name, setName]=useState('ram');
    return (
        <GlobalContext.Provider value={{name,setName}}>
            {/* {props.children} As we defined props in the parameter, we can also destructure them directly on the parameter, so we can ommit props, and we can access directly children */}
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;