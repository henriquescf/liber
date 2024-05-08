import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { NotFoundPage } from "../pages/NotFoundPage"
import { FreeContentPage } from "../pages/FreeContentPage"
import { CoursesPage } from "../pages/CoursesPage"

export const MainRoutes = () => {
    
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/materiais-gratuitos" element={<FreeContentPage/>}/>
            <Route path="/cursos" element={<CoursesPage/>} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}