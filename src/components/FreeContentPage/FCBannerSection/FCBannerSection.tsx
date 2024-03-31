export const FCBannerSection = () => {
    return(
        <section className="bg-[#FFF9F3] flex flex-col md:flex-row min-h-[42.625rem] items-center justify-around px-[5%] gap-[3.75rem]">
            <div className="w-full md:w-1/2 flex flex-col gap-7 mt-10">
                <h2 className="leading-[2.6875rem] md:leading-[3.75rem] text-[2.25rem] md:text-[3.125rem] text-center md:text-left">Tenha acesso aos nossos materiais <span className="inline-block bg-clip-text text-transparent bg-[linear-gradient(266.11deg,_#9D2887_32.06%,_#FA7E0D_63.03%)] leading-[2.6875rem] md:leading-[3.75rem] text-[2.25rem] md:text-[3.125rem] text-center md:text-left">exclusivos</span>!</h2>
                <p className="text-[1.125rem] leading-[2rem] md:text-[1.625rem] md:leading-[2.5rem] text-[rgba(67,_67,_67,_1)] md:text-left text-justify">Basta inserir seu e-mail principal que estaremos liberando o acesso ao nosso e-book exclusivo com dicas incríveis sobre como estudar idiomas e alcançar a fluência de forma acelerada!</p>
                <form className="border-[rgba(179,_188,_200,_1)] border-[0.0625rem] shadow-[3px_3px_0px_0px_rgba(0,_0,_0,_0.19)] bg-white rounded-[0.875rem] mt-[0.625rem] max-w-[20rem] max-h-[3.6875rem] md:max-w-[35.4375rem] md:max-h-[4.1875rem] flex justify-between items-center px-[0.3125rem] py-2 md:mb-10 self-center md:self-auto">
                    <input className="outline-none md:px-6 md:py-5 px-4 py-2 w-[70%] rounded-[0.875rem] text-[rgba(84,_84,_84,_1)] placeholder-[rgba(84,_84,_84,_1)]" placeholder="seuemail@gmail.com"/>
                    <button className="text-white rounded-[0.625rem] w-[5.1875rem] h-[3.1875rem] md:w-[9.1875rem] md:h-[3.5625rem] ml-3 bg-[linear-gradient(259.18deg,_#E8924A_6.97%,_#E97B19_34.07%,_#E97B19_68.27%,_#F6B049_94.23%)] hover:opacity-90">Liberar</button>
                </form>
            </div>
            <img src="/src/assets/img/freecontentpage/materiais-gratuitos-banner.png" alt="mg-banner" className="h-[15.9375rem] max-w-[14.6875rem] w-[100%] md:max-w-[24.75rem] md:h-[30.375rem] flex mb-[6.25rem] md:mb-0"/>
        </section>
    )
}