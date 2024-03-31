import { createContext, useContext, useState } from "react";

const ModalContext = createContext ({})

export const useModalContext = () => {
    return useContext(ModalContext)
}

export const ModalProvider = ({children}: any) => {

    const [classScheduleModal, setClassScheduleModal] = useState(false)

    return(
        <ModalContext.Provider value={{classScheduleModal, setClassScheduleModal}}>
            {children}
        </ModalContext.Provider>
    )
}