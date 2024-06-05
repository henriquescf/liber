import { coursesData } from "../../../database/coursesData"
import { CourseCard } from "./CourseCard/CourseCard"

export const CoursesSection = () => {
    return (
        <section className="flex flex-col items-center pb-[1.25rem] mt-[3.125rem] mb-[6.25rem] bg-[url('/assets/coursespage/bg-waves.png')] bg-repeat-round">
            <div className="flex flex-col items-center gap-[2.875rem] text-center w-[80%] md:w-[70%]">
                <h2 className="text-[1.75rem] md:text-[3.125rem]"><span className="border-b-[0.5rem] border-b-[rgba(246,_136,_42,_1)] pb-2">Cursos</span> Ofertados</h2>
                <p className="text-[1.0625rem] md:text-[1.625rem] leading-[2.5rem] text-center">A Líber é uma escola de idiomas online que surgiu com o desejo de oferecer às pessoas a liberdade para se comunicar em qualquer lugar que estiver.</p>

                <div className="flex flex-wrap gap-[2.1875rem] w-[95vw] justify-center">
                    {coursesData.map((item, index) => (
                        <CourseCard key={index} image={item.image} language={item.language} description={item.description}/>
                    ))}
                </div>
            </div>
        </section>
    )
}