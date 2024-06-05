import { Link } from "react-router-dom"
import { useModalContext } from "../providers/ModalContext"

export const MainFooter = () => {

    const { setClassScheduleModal } = useModalContext() as any

    return(
        <footer className="min-h-[33.875rem] bg-[#090028]">
            <div className="w-[90%] md:w-[80%] flex flex-col mx-auto *:text-white gap-[3.75rem]">
                <div className="flex justify-between flex-col md:flex-row items-center mt-[3.75rem] gap-[3.125rem]">
                    <img src="/assets/footer/footer-logo.png" alt="footer-logo" className="w-[3.375rem] h-[3.375rem] md:w-auto md:h-[6.75rem]"/>
                    <div className="flex gap-[2.125rem] *:cursor-pointer items-center flex-wrap">
                        <a href="https://wa.me/5581996350832" target="_blank"><img src="/assets/footer/icons/whatsapp_icon.svg" alt="whatsapp-icon" className="hover:opacity-80 max-w-6 md:min-w-8"/></a>
                        <a href="mailto:contato@institutoliber.com"><img src="/assets/footer/icons/email_icon.svg" alt="email-icon" className="hover:opacity-80 max-w-6 md:min-w-8"/></a>
                        <a href="https://www.instagram.com/institutoliberdeperformance/" target="_blank"><img src="/assets/footer/icons/instagram_icon.svg" alt="instagram-icon" className="hover:opacity-80 max-w-6 md:min-w-8"/></a>
                        <a href="https://www.facebook.com/profile.php?id=61558696227050" target="_blank"><img src="/assets/footer/icons/facebook_icon.svg" alt="facebook-icon" className="hover:opacity-80 max-w-[0.875rem] md:min-w-4"/></a>
                        <a href="https://www.linkedin.com/company/instituto-de-performance-profissional-liber/" target="_blank"><img src="/assets/footer/icons/linkedin_icon.svg" alt="linkedin-icon" className="hover:opacity-80 max-w-6 md:min-w-8"/></a>
                    </div>
                </div>

                <div className="flex gap-[4.375rem] flex-col md:flex-row items-center md:items-start *:text-center *:md:text-left">
                    <nav className="flex flex-col">
                        <span className="text-[1.6875rem] font-semibold mb-3">Módulos</span>
                        <span className="text-[1.25rem]">Aulas Individuais</span>
                        <span className="text-[1.25rem]">Aulas em Turma</span>
                        <span className="text-[1.25rem]">Plano para Empresas</span>
                        <span className="text-[1.25rem]">Inglês para Negócios</span>
                        <span className="text-[1.25rem]">Proficiência e Certificações</span>
                        <span className="text-[1.25rem]">Viagens e Intercâmbio</span>
                    </nav>

                    <nav className="flex flex-col">
                    <span className="text-[1.6875rem] font-semibold mb-3">Sobre o Instituto Liber</span>
                        <a onClick={() => setClassScheduleModal(true)} className="text-[1.25rem] hover:opacity-80">Aula Experimental</a>
                        <Link reloadDocument to="/materiais-gratuitos" className="text-[1.25rem] hover:opacity-80">Materiais Gratuitos</Link>
                    </nav>
                </div>

                <div>
                    <p className="text-[1.125rem] text-center pb-5">Instituto de Performance Liber Ltda - CNPJ 54.403.846/0001-00</p>
                    <p className="text-[1.125rem] text-center pb-5">© Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}