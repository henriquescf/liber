import { MdOutlineArrowRightAlt } from "react-icons/md";
import { ClassScheduleModal } from "./ClassScheduleModal";
import { useModalContext } from "../../../providers/ModalContext";

export const BannerSection = () => {
    const { setClassScheduleModal } = useModalContext() as any

    return (
        <>
            <ClassScheduleModal/>
            <section className=" min-h-[33.75rem] flex flex-col md:flex-row items-center justify-around md:px-[5%] gap-[3.75rem]">
                <div className="w-full md:w-1/2 flex flex-col gap-5 mt-10">
                    <span className="md:h-[2.25rem] md:w-11.5625rem md:text-[1.125rem] bg-white border-solid border-[0.0625rem] rounded-[0.3125rem] text-[rgba(74,_74,_74,_1)] w-fit px-4 py-1 text-center self-center md:self-auto">Bem-vindo à Liber</span>
                    <h2 className="leading-[2.6875rem] md:leading-[3.75rem] text-[2.25rem] md:text-[3.125rem] text-center md:text-left"><span className="inline-block bg-clip-text text-transparent bg-[linear-gradient(266.11deg,_#9D2887_32.06%,_#FA7E0D_63.03%)] leading-[2.6875rem] md:leading-[3.75rem] text-[2.25rem] md:text-[3.125rem] text-center md:text-left">Liber</span>dade para entender e ser entendido!</h2>

                    <p className="text-[1.125rem] leading-[2rem] md:text-[1.625rem] md:leading-[2.5rem] text-[rgba(67,_67,_67,_1)] text-center md:text-left">Alcance a fluência através de nossa metodologia focada em conversação e estruturada através de conteúdos personalizados baseados em suas próprias vivências!</p>

                    <button className="flex justify-center items-center max-w-[21.625rem] max-h-[3.875rem] rounded-[0.625rem] bg-[linear-gradient(259.18deg,_#E8924A_6.97%,_#E97B19_34.07%,_#E97B19_68.27%,_#F6B049_94.23%)] py-[14px] hover:opacity-90 cursor-pointer gap-4 pl-[2rem] pr-[2.375rem] m-auto md:m-0" onClick={() => setClassScheduleModal(true)}>
                        <span className="text-white">Agende uma aula gratuita</span>
                        <MdOutlineArrowRightAlt color="white" size={32}/>
                    </button>
                </div>
                <img src="/src/assets/img/mainpage/mainpage-banner.png" alt="main-banner" className="w-[100%] md:max-w-[31.25rem] md:h-[30.375rem] flex mb-[6.25rem] md:mb-0"/>
            </section>
        </>
    )
}