import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useIsActiveContext } from "../../../providers/CheckActiveContext";
import { ClassScheduleModal } from "../../HomePage/BannerSection/ClassScheduleModal";
import { useModalContext } from "../../../providers/ModalContext";

export const DesktopMenu = () => {

    const {setClassScheduleModal} = useModalContext() as any
    const {active} = useIsActiveContext() as any

    return(
        <>
            <ClassScheduleModal/>
            <nav className="md:flex hidden items-center gap-[2.875rem] mr-[6.25rem] text-[1.375rem]">
                <Link className={`hover:opacity-80 ${active == "mainpage" ? "active-menu" : ""}`} to="/">A Liber</Link>
                <Link className="flex items-center cursor-pointer *:hover:opacity-80" to="/modalidades">
                    <MdOutlineKeyboardArrowDown/>
                    <span className={`hover:opacity-80 ${active == "modalidadespage" ? "active-menu" : ""}`}>Modalidades</span>
                </Link>
                <Link className={`hover:opacity-80 ${active == "freecontentpage" ? "active-menu" : ""}`} to="/materiais-gratuitos">Materiais Gratuitos</Link>
                <button className="text-white rounded-[2.75rem] min-w-[11.5rem] max-h-[3.875rem] ml-3 bg-[linear-gradient(259.18deg,_#E8924A_6.97%,_#E97B19_34.07%,_#E97B19_68.27%,_#F6B049_94.23%)] px-[1.75rem] py-[0.875rem] hover:opacity-90" onClick={() => setClassScheduleModal(true)}>Aula Gratuita</button>
            </nav>
        </>
    )
}