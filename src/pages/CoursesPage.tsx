import { useEffect } from "react"
import { useIsActiveContext } from "../providers/CheckActiveContext"
import { CoursesMain } from "../components/CoursesPage/CoursesMain"

export const CoursesPage = () => {

    const {setActive} = useIsActiveContext() as any

    useEffect(() => {
        setActive("coursespage")
    }, [])

    return(
        <>
            <CoursesMain/>
        </>
    )
}