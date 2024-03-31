import { createContext, useContext, useState } from "react";

const IsActiveContext = createContext ({})

export const useIsActiveContext = () => {
    return useContext(IsActiveContext)
}

export const IsActiveProvider = ({children}: any) => {
    const [active, setActive] = useState(null)

    return(
        <IsActiveContext.Provider value={{active, setActive}}>
            {children}
        </IsActiveContext.Provider>
    )
}