import { Swiper, SwiperSlide } from "swiper/react"
import { metodologyData } from "../../../database/metodologyData"
import { MetodologyCard } from "./MetodologyCard/MetodologyCard"
import { Autoplay, Pagination } from "swiper/modules"

export const MetodologySection = () => {
    return(
        <section className="flex flex-col items-center gap-[2.5rem] md:gap-0 relative">
            <img src="/assets/mainpage/vector1.png" alt="vector-1" className="absolute hidden md:block right-0 top-[8%] z-[-1]"/>
            <img src="/assets/mainpage/vector2.png" alt="vector-2" className="absolute hidden md:block left-0 top-[45%] z-[-1]"/>
            <img src="/assets/mainpage/vector3.png" alt="vector-3" className="absolute hidden md:block bottom-[-15%] right-0 z-[-1]"/>

            <div className="flex flex-col items-center gap-[2.875rem] text-center w-[80%] md:w-[70%]">
                <h2 className="text-[1.75rem] md:text-[3.125rem]">Nossa <span className="border-b-[0.5rem] border-b-[rgba(157,_40,_135,_1)] pb-2">Metodologia</span></h2>
                <p className="text-[1.0625rem] md:text-[1.625rem] leading-[2.5rem] text-justify whitespace-break-spaces">A Líber é uma escola de idiomas online que surgiu com o desejo de oferecer às pessoas a liberdade para se comunicar em qualquer lugar que estiver. Considerando o modelo de vida atual, adaptamos o nosso serviço para oferecer a maior comodidade ao aluno.</p>
            </div>

            {window.innerWidth <= 768 ? 

            <Swiper className="w-[85vw] metodologySwiper"
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: true
            }}
            centeredSlides={false}
            slidesPerView={1}
            grabCursor={true}
            spaceBetween={55}
            pagination={{
                type: "bullets",
                enabled: true
            }}

            modules={[Autoplay, Pagination]}
            >
                {metodologyData.map((item, index) => (
                    <SwiperSlide className="flex flex-col gap-[0.75rem] w-[18.75rem] md:w-[24.1875rem] min-h-max md:min-h-[17.5rem] items-center py-[2.75rem] px-[2.125rem] gradient-box text-center mt-2" key={index}>
                        <h4 className="inline-block bg-clip-text text-transparent bg-[linear-gradient(266.72deg,_#9D2887_-1.01%,_#FA7E0D_104.53%)] text-[1.5rem] md:text-[2.125rem] font-semibold">{item.title}</h4>
                        <p className="text-[rgba(73,_73,_73,_1)] text-[1rem] md:text-[1.25rem] font-normal text-center">{item.description}</p>
                    </SwiperSlide>
                    ))}
            </Swiper>

            :

            <div className="flex flex-wrap justify-center w-[85%] gap-[1.75rem] mt-[4.375rem]">
                {metodologyData.map((item, index) => (
                    <MetodologyCard key={index} title={item.title} description={item.description}/>
                ))}
            </div>
            }
        </section>
    )
}