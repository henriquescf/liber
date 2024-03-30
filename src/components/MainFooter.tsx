import { Link } from "react-router-dom"

export const MainFooter = () => {
    return(
        <footer className="min-h-[33.875rem] bg-[#090028]">
            <div className="w-[90%] md:w-[80%] flex flex-col mx-auto *:text-white gap-[3.75rem]">
                <div className="flex justify-between flex-col md:flex-row items-center mt-[3.75rem] gap-[3.125rem]">
                    <div className="flex items-center gap-4 md:flex-wrap md:gap-1">
                        <img src="/src/assets/img/Footer/footer-logo.png" alt="footer-logo" className="w-[3.375rem] h-[3.375rem] md:w-auto md:h-auto"/>
                        <span className="text-[2.125rem] md:text-[2.75rem] font-semibold">Liber Cursos</span>
                    </div>

                    <div className="flex gap-[2.125rem] *:cursor-pointer items-center flex-wrap">
                        <a><img src="/src/assets/img/footer/icons/whatsapp_icon.svg" alt="whatsapp-icon" className="hover:opacity-80 max-w-6 md:min-w-8"/></a>
                        <a><img src="/src/assets/img/footer/icons/email_icon.svg" alt="email-icon" className="hover:opacity-80 max-w-6 md:min-w-8"/></a>
                        <a><img src="/src/assets/img/footer/icons/instagram_icon.svg" alt="instagram-icon" className="hover:opacity-80 max-w-6 md:min-w-8"/></a>
                        <a><img src="/src/assets/img/footer/icons/facebook_icon.svg" alt="facebook-icon" className="hover:opacity-80 max-w-[0.875rem] md:min-w-4"/></a>
                        <a><img src="/src/assets/img/footer/icons/linkedin_icon.svg" alt="linkedin-icon" className="hover:opacity-80 max-w-6 md:min-w-8"/></a>
                    </div>
                </div>

                <div className="flex gap-[4.375rem] flex-col md:flex-row items-center md:items-start *:text-center *:md:text-left">
                    <nav className="flex flex-col">
                        <span className="text-[1.6875rem] font-semibold mb-3">Módulos</span>
                        <Link to="/" className="text-[1.25rem] hover:opacity-80">Aulas Individuais</Link>
                        <Link to="/" className="text-[1.25rem] hover:opacity-80">Aulas em Turma</Link>
                        <Link to="/" className="text-[1.25rem] hover:opacity-80">Plano para Empresas</Link>
                        <Link to="/" className="text-[1.25rem] hover:opacity-80">Inglês para Negócios</Link>
                        <Link to="/" className="text-[1.25rem] hover:opacity-80">Proficiência e Certificações</Link>
                        <Link to="/" className="text-[1.25rem] hover:opacity-80">Viagens e Intercâmbio</Link>
                    </nav>

                    <nav className="flex flex-col">
                    <span className="text-[1.6875rem] font-semibold mb-3">Sobre a Liber</span>
                        <Link to="/" className="text-[1.25rem] hover:opacity-80">Aula Experimental</Link>
                        <Link to="/" className="text-[1.25rem] hover:opacity-80">Materiais Gratuitos</Link>
                        <Link to="/" className="text-[1.25rem] hover:opacity-80">Política de Privacidade</Link>
                        <Link to="/" className="text-[1.25rem] hover:opacity-80">Termos de Uso</Link>
                    </nav>
                </div>

                <p className="text-[1.125rem] text-center pb-5">© 2024 Grupo Liber Cursos. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}