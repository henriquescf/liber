import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonyData } from "../../../database/testimonyData";
import '/src/assets/styles/testimonial.scss'

export const TestimonialSection = () => {
  return (
    <>
      <section className="testimonial__section">
        <h2 className="text-[1.75rem] md:text-[3.125rem] text-center"><span className="border-b-[0.5rem] border-b-[rgba(157,_40,_135,_1)] pb-1 md:pb-2">Depoimentos</span> dos Estudantes</h2>
            <Swiper className="testimonial__container" 
            loop={true}
            autoplay={{
                delay: 4000,
                pauseOnMouseEnter: true,
                disableOnInteraction: true
            }}
            centeredSlides={false}
            slidesPerView={1}
            grabCursor={true}
            spaceBetween={55}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
            
            }}
            modules={[Pagination, Autoplay]}
            >
              {testimonyData.map(({ id, image, title, description }) => (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} className="testimonial_image"/>
                        <img src="/src/assets/img/mainpage/icons/testimony-quote.svg" className="testimonial_quote relative w-[25%] md:w-auto right-[1.25rem] md:right-0"/>
                        <h3 className="testimonial__name text-[1.25rem] md:text-[1.75rem]">{title}</h3>
                        <img src="/src/assets/img/mainpage/icons/5-stars.svg" className="testimonial__stars w-[8rem] md:w-[10rem]"/>
                        <p className="testimonial__description text-[0.875rem] md:text-[1.0625rem] text-justify whitespace-break-spaces">{description}</p>
                    </SwiperSlide>
                  ))}
            </Swiper>
      </section>
    </>
  );
};