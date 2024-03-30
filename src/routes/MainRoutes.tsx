import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { NotFoundPage } from "../pages/NotFoundPage"
import { FreeContentPage } from "../pages/FreeContentPage"

export const MainRoutes = () => {
    
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/materiais-gratuitos" element={<FreeContentPage/>}/>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}