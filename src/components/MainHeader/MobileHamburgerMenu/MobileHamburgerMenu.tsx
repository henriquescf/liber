import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { SiStyleshare } from "react-icons/si";
import { MdPlayLesson } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import '/src/assets/styles/menu-hamburger.scss'
import { useIsActiveContext } from "../../../providers/CheckActiveContext";

export const MobileHamburgerMenu = () => {

    const {active} = useIsActiveContext() as any

    const [isOpen, setOpen] = useState(false)
    const ref = useRef(null);
    useClickAway(ref, () => setOpen(false));

    useEffect(() => {
        const backdrop = document.querySelector(".backdrop")
        const header_logo = document.querySelector(".header-logo")
        const html = (document.querySelector("html") as HTMLElement)
        if(isOpen){
            html.style.overflow = "hidden"
            backdrop?.classList.add("backdrop-blur")
            header_logo?.classList.add("invisible")
        } else{
            html.style.overflow = "auto"
            backdrop?.classList.remove("backdrop-blur")
            header_logo?.classList.remove("invisible")
        }
    })


    return(
        <div className="md:hidden blur-except flex items-center w-[100%] px-7">
            {isOpen && (
                <div className="flex items-center gap-[0.4375rem]">
                    <img src="/src/assets/img/header/logo-mobile.png" className="w-[2.5rem] h-[2.5rem]" alt="logo"/>
                    <div className="text-[1.375rem] font-semibold">Liber Cursos</div>
                </div>
            )}

            <Hamburger toggled={isOpen} toggle={setOpen} color="#DD710F" size={32}/>

            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="shadow-4xl right-0 top-[4rem] bg-white w-[72%] min-h-full absolute px-4">
                        <nav className="flex flex-col *:pl-[0.625rem] *:text-[1.375rem] *:flex *:items-center pt-4 gap-4">
                            <motion.li initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 70, delay: 0.1}} className="w-auto p-[0.08rem] rounded-xl ml-2 gap-3">
                                <FaHome color="#DD710F"/>
                                <Link onClick={() => setOpen((prev: any) => !prev)} to="/" className={active == "mainpage" ? "active-menu" : ""}>A Liber</Link>
                            </motion.li>

                            <motion.li initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 70, delay: 0.2}} className="w-auto p-[0.08rem] rounded-xl ml-2 flex items-center gap-3">
                                <SiStyleshare color="#DD710F"/>
                                <Link onClick={() => setOpen((prev: any) => !prev)} to="/aa" className={`text-black ${active == "modalidadespage" ? "active-menu" : ""}`}>Modalidades</Link>
                                <MdOutlineKeyboardArrowDown/>
                            </motion.li>

                            <motion.li initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 70, delay: 0.3}} className="w-auto p-[0.08rem] rounded-xl ml-2 gap-3">
                                <FaBook color="#DD710F"/>
                                <Link onClick={() => setOpen((prev: any) => !prev)} to="/materiais-gratuitos" className={`text-black ${active == "freecontentpage" ? "active-menu" : ""}`}>Materiais Gratuitos</Link>
                            </motion.li>

                            <motion.li initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 70, delay: 0.4}} className="w-auto p-[0.08rem] rounded-xl ml-2 bg-[linear-gradient(90deg,_hsla(29,_87%,_46%,_1)_5%,_hsla(0,_0%,_100%,_1)_100%)] gap-3">
                                <MdPlayLesson color="white"/>
                                <Link onClick={() => setOpen((prev: any) => !prev)} to="/teste" className={`text-white ${active == "aulagratuitapage" ? "active-menu" : ""}`}>Aula Gratuita</Link>
                            </motion.li>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}