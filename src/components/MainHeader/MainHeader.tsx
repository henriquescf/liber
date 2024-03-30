import { MobileHamburgerMenu } from "./MobileHamburgerMenu/MobileHamburgerMenu";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { Link } from "react-router-dom";

export const MainHeader = () => {

    return(
        <>
        <header className="flex justify-between items-center mr-0 :mr-auto w-[72%] md-w-[100%] mx-auto blur-except min-h-[4.0625rem] h-auto md:w-[90%]">
            <Link to="/" onClick={() => (document.querySelector('.nav1') as HTMLElement).focus()} className="ml-[-86px] md:ml-0"><img src="/src/assets/img/header/header-logo.png" alt="header-logo" className="h-[2.875rem] w-[2.875rem] md:min-w-24 md:min-h-24 header-logo"/></Link>
            <MobileHamburgerMenu/>
            <DesktopMenu/>
        </header>
        <div className="backdrop"></div>
        </>
    )
}