import { aboutData } from "../../../database/aboutData"
import { AboutCard } from "./AboutCard/AboutCard"

export const AboutSection = () => {
    return(
        <section className="flex flex-col items-center mt-[0] md:mt-[-6.25rem] pb-[1.25rem]">
            <img src="/src/assets/img/mainpage/mainpage-arrow.png" className="hidden md:block md:max-w-[15.125rem] md:max-h-[15.125rem] mt-[9.375rem] mr-[45.625rem]" alt="down-arrow"/>
            <div className="flex flex-col items-center gap-[2.875rem] text-center w-[80%] md:w-[70%]">
                <h2 className="text-[1.75rem] md:text-[3.125rem]">Sobre o <span className="border-b-[0.5rem] border-b-[rgba(246,_136,_42,_1)] pb-2"> Liber</span></h2>
                <p className="text-[1.0625rem] md:text-[1.625rem] leading-[2.5rem] text-justify whitespace-break-spaces">A Líber é uma escola de idiomas online que surgiu com o desejo de oferecer às pessoas a liberdade para se comunicar em qualquer lugar que estiver. Considerando o modelo de vida atual, adaptamos o nosso serviço para oferecer a maior comodidade ao aluno com relação ao tempo, dinheiro, motivação, organização e personalização.</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-[3.125rem] w-[80%] mt-[2rem] md:mt-[6rem]">
                {aboutData.map((item, index) => (
                    <AboutCard key={index} title={item.title} img={item.img} description={item.description}/>
                ))}
            </div>

        </section>
    )
}