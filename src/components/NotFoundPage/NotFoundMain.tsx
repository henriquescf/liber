import { Link } from "react-router-dom"

export const NotFoundMain = () => {
    return (
        <main className="relative">
            <img src="/assets/notfoundpage/notfound1.png" alt="vector-1" className="absolute hidden md:block md:h-[12.875rem] md:w-[13.125rem] md:right-0"/>
            <img src="/assets/notfoundpage/notfound2.png" alt="vector-2" className=" absolute hidden md:block md:h-[20rem] md:w-[12.5rem] md:left-0 md:top-[30%]"/>
            <img src="/assets/notfoundpage/notfound3.png" alt="vector-3" className="absolute bottom-0 right-8 h-[4.5rem] w-[8.75rem] md:h-[10rem] md:w-[18.75rem] md:right-[8.75rem]"/>
            <img src="/assets/notfoundpage/notfound4.png" alt="vector-4" className="absolute block top-0 left-0 h-[6rem] md:hidden"/>

            <div className="flex flex-col mx-auto w-[100%] md:w-[45%] mt-[6.625rem] md:mt-[4.625rem] items-center gap-[2.875rem] md:gap-[5.25rem] relative mb-[7.5rem]">
                <h1 className="text-[1.75rem] md:text-[3.3125rem] leading-[2rem] md:leading-[4rem] text-center font-semibold">Que triste! Não conseguimos encontrar esta página!</h1>
                <img src="/assets/notfoundpage/error404.png" className="h-[117px] w-[207px] min-h-[117px] min-w-[207px] md:w-auto md:h-auto"/>
                <p className="text-[1.375rem] md:text-[2rem] leading-[1.625rem] md:leading-[2.375rem] text-center font-medium">Mas você sempre pode voltar para a nossa página inicial</p>
                <Link to="/" className="text-white rounded-[0.75rem] bg-[linear-gradient(260.52deg,_#9890E9_-7.99%,_#6E38CC_45.71%,_#9C57CC_103.43%)] px-[3.1875rem] py-[1.1875rem] text-[1.25rem] font-medium md:mt-[-2.5rem] hover:opacity-90 text-center">Página Inicial</Link>
            </div>
        </main>
    )
}
