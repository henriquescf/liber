import { MobileHamburgerMenu } from "./MobileHamburgerMenu/MobileHamburgerMenu";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { Link } from "react-router-dom";

export const MainHeader = () => {
    return(
        <>
        <header className={`main-header flex justify-between items-center mr-0 :mr-auto w-[72%] md-w-[100%] mx-auto min-h-[6.875rem] h-auto md:w-[90%] blur-except`}>
            <Link to="/" className="ml-[-86px] md:ml-0"><img src="/src/assets/img/header/header-logo.png" alt="header-logo" className="header-logo w-[60%] min-w-[60%] md:w-[12.5rem] md:min-w-[12.5rem]"/></Link>
            <MobileHamburgerMenu/>
            <DesktopMenu/>
        </header>
        <div className="backdrop"></div>
        </>
    )
}