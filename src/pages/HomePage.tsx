import { useEffect } from "react"
import { HomeMain } from "../components/HomePage/HomeMain"
import { useIsActiveContext } from "../providers/CheckActiveContext"

export const HomePage = () => {

    const {setActive} = useIsActiveContext() as any
    useEffect(() => {
        setActive("mainpage")
    }, [])

    return(
        <>
            <HomeMain />
        </>
    )
}