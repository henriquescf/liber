import { useEffect } from "react"
import { FreeContentMain } from "../components/FreeContentPage/FreeContentMain"
import { useIsActiveContext } from "../providers/CheckActiveContext"

export const FreeContentPage = () => {

    const {setActive} = useIsActiveContext() as any
    useEffect(() => {
        setActive("freecontentpage")
    }, [])

    return(
        <>
            <FreeContentMain/>
        </>
    )
}