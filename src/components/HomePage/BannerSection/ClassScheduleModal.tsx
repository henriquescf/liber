import { useEffect } from "react"
import { useModalContext } from "../../../providers/ModalContext"
import './../../../assets/styles/classScheduleModal.scss';


export const ClassScheduleModal = () => {
    const { classScheduleModal, setClassScheduleModal } = useModalContext() as any

    const handleCloseModal = (e: any) => {
        e.preventDefault()
        setClassScheduleModal(false)
    }

    useEffect(() => {
        function handleEscapeKey(e: any) {
            if (e.code === "Escape") {
                setClassScheduleModal(false)
            }
        }

        document.addEventListener("keydown", handleEscapeKey)
        return () => document.removeEventListener("keydown", handleEscapeKey)
    }, [])

    useEffect(() => {
        const html = (document.querySelector("html") as HTMLElement)
        const headerBlur = (document.querySelector(".main-header"))
        const mobileMenuBlur = (document.querySelector(".mobile-menu"))
        if(classScheduleModal){
            headerBlur?.classList.remove("blur-except")
            mobileMenuBlur?.classList.remove("blur-except")
            html.style.overflow = "hidden"
        } else{
            headerBlur?.classList.add("blur-except")
            mobileMenuBlur?.classList.add("blur-except")
            html.style.overflow = "auto"
        }
    })

    return (
        classScheduleModal &&
        <div role="dialog" className="classScheduleModalOverlay backdrop-blur" onClick={() => setClassScheduleModal(false)}>
            <div className="classScheduleModalBox overflow-auto" id="modal" onClick={e => e.stopPropagation()}>
                <img onClick={handleCloseModal} src="/src/assets/img/mainpage/icons/closeX.svg" alt="closeIcon" className="absolute top-[2rem] right-[1.625rem] cursor-pointer hover:opacity-[.8] h-[1.125rem] w-[1.125rem] md:h-[1.5rem] md:w-[1.5rem]" />

                <div className="flex flex-col gap-[0.3125rem] border-b-solid border-b-[rgba(181,_181,_181,_1)] border-b-[0.0625rem] pb-[1.25rem] md:pb-[2.125rem]">
                    <p className="text-[1.5rem] md:text-[2.125rem] font-semibold"><span className="inline-block bg-clip-text text-transparent bg-[linear-gradient(266.11deg,_#9D2887_32.06%,_#FA7E0D_63.03%)]">Olá</span>, que tal uma aula experimental 100% gratuita?</p>
                    <p className="md:text-[1.25rem] leading-[1.5rem] text-[rgba(39,_39,_39,_1)] text-justify whitespace-break-spaces">Só mais algumas informações e dentro de 48 horas entraremos em contato com você para agendarmos sua aula experimental completamente gratuita. Mal podemos esperar para lhe conhecer melhor!</p>
                </div>

                <form className="flex flex-wrap gap-[1.75rem]">
                    <div className="flex flex-col gap-[0.6875rem]">
                        <label htmlFor="name-modal" className="md:text-[1.25rem]">Qual o seu nome completo?</label>
                        <input type="text" id="name-modal" className="w-[80vw] md:w-[29.125rem] h-[3.4375rem] text-[rgba(97,_97,_97,_1)] bg-transparent rounded-[0.3125rem] border-[0.125rem] border-[rgba(168,_176,_189,_1)] px-[1.375rem] py-[0.875rem]" placeholder="Nome" />
                    </div>

                    <div className="flex flex-col gap-[0.6875rem]">
                        <label htmlFor="email-modal" className="md:text-[1.25rem]">E seu endereço de e-mail?</label>
                        <input type="text" id="email-modal" className="w-[80vw] md:w-[29.125rem] h-[3.4375rem] text-[rgba(97,_97,_97,_1)] bg-transparent rounded-[0.3125rem] border-[0.125rem] border-[rgba(168,_176,_189,_1)] px-[1.375rem] py-[0.875rem]" placeholder="E-mail" />
                    </div>

                    <div className="flex flex-col gap-[0.6875rem]">
                        <label htmlFor="idioma-modal" className="md:text-[1.25rem]">Qual idioma tem interesse em aprender?</label>
                        <select id="idioma-modal" className="w-[80vw] md:w-[29.125rem] h-[3.4375rem] text-black bg-transparent rounded-[0.3125rem] border-[0.125rem] border-[rgba(168,_176,_189,_1)] px-[1.375rem] py-[0.875rem] bg-white">
                            <option value={"ingles"}>Inglês</option>
                            <option value={"espanhol"}>Espanhol</option>
                            <option value={"chines"}>Chinês</option>
                            <option value={"frances"}>Francês</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-[0.6875rem]">
                        <label htmlFor="modadelidade-modal" className="md:text-[1.25rem]">Que modalidade de aula você prefere?</label>
                        <select id="modalidade-modal" className="w-[80vw] md:w-[29.125rem] h-[3.4375rem] text-black bg-transparent rounded-[0.3125rem] border-[0.125rem] border-[rgba(168,_176,_189,_1)] px-[1.375rem] py-[0.875rem] bg-white">
                            <option value={"individual"}>Individual</option>
                            <option value={"turma"}>Turma</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-[0.6875rem]">
                        <label htmlFor="phone-modal" className="md:text-[1.25rem]">Qual o seu número do WhatsApp?</label>
                        <input type="text" id="phone-modal" className="w-[80vw] md:w-[29.125rem] h-[3.4375rem] text-[rgba(97,_97,_97,_1)] bg-transparent rounded-[0.3125rem] border-[0.125rem] border-[rgba(168,_176,_189,_1)] px-[1.375rem] py-[0.875rem]" placeholder="Telefone com DDD" />
                    </div>

                    <div className="flex flex-col gap-[0.6875rem]">
                        <label htmlFor="source-modal" className="md:text-[1.25rem]">E como você chegou até a Liber?</label>
                        <select id="source-modal" className="w-[80vw] md:w-[29.125rem] h-[3.4375rem] text-black bg-transparent rounded-[0.3125rem] border-[0.125rem] border-[rgba(168,_176,_189,_1)] px-[1.375rem] py-[0.875rem] bg-white">
                            <option value={"google"}>Google</option>
                            <option value={"instagram"}>Instagram</option>
                            <option value={"outros"}>Outros</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-[0.9375rem] min-w-full cursor-default">
                        <p className="md:text-[1.25rem]">Como você prefere ser contatado?</p>
                        <div className="flex gap-[0.375rem]">
                            <input type="radio" id="contactChoice1" name="contact" value="email" className="cursor-pointer"/>
                            <label htmlFor="contactChoice1" className="text-[1rem] cursor-pointer">E-mail</label>

                            <input type="radio" id="contactChoice2" name="contact" value="whatsapp" className="ml-[0.625rem] cursor-pointer md:ml-[1.125rem]"/>
                            <label htmlFor="contactChoice2" className="text-[1rem] cursor-pointer">WhatsApp</label>

                            <input type="radio" id="contactChoice3" name="contact" value="phone" className="ml-[0.625rem] cursor-pointer md:ml-[1.125rem]"/>
                            <label htmlFor="contactChoice3" className="text-[1rem] cursor-pointer">Ligação</label>
                        </div>
                    </div>
                </form>

                <button className="bg-[linear-gradient(260.52deg,_#9890E9_-7.99%,_#6E38CC_45.71%,_#9C57CC_103.43%)] px-[2.5rem] py-[1rem] md:px-[5.625rem] md:py-[1.25rem] md:text-[1.25rem] font-semibold text-white rounded-[0.75rem] hover:opacity-90 w-fit md:mt-0 mt-[-0.875rem]">Agendar Aula</button>
            </div>
        </div>
    )
}
