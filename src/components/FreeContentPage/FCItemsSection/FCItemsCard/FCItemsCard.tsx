import { MdFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

export const FCItemsCard = (props: any) => {
    return(
        // FullCard
        <div className="flex md:flex-row flex-col-reverse gap-[2.75rem]">
            {/* Card Left Side */}
            <div className="flex flex-col gap-4 items-center md:items-left">
                <img src={props.img} className="w-[11.3125rem] h-[15.4375rem] md:w-[15rem] md:h-[20.375rem]" alt="card"/>
                <Link className="cursor-pointer w-[11.3125rem] h-[2.8125rem] md:w-[15rem] md:h-[3.75rem] bg-[rgba(121,_121,_121,_1)] text-white flex gap-[0.3125rem] items-center justify-center hover:opacity-90" to={props.download} target="_blank" download>
                    <MdFileDownload size={22} className="mt-1"/>
                    <span className="text-[1.375rem]">Baixar</span>
                </Link>
            </div>

            {/* Card Right Side */}
            <div className="flex flex-col gap-[1.375rem] md:gap-[1.1875rem] items-center md:items-start">
                <h3 className="font-semibold text-center text-[1.75rem] md:text-[2.125rem] md:text-left leading-[2.0625rem] md:leading-[2.5rem]">{props.title}</h3>
                <span className="w-[5.0625rem] h-[1.875rem] md:w-[5.9375rem] md:h-[2.1875rem] text-[0.875rem] md:text-[1.0625rem] font-medium bg-[rgba(250,_126,_13,_0.54)] rounded-[0.3125rem] md:px-5 py-[0.375rem] text-center">{props.tag}</span>
                <p className="text-[rgba(60,_60,_60,_1)] text-[1.0625rem] leading-[1.9375rem] md:text-[1.375rem] md:leading-[2.3125rem] font-medium text-center md:text-left">Descrição: <span className="font-bold">{props.description}</span></p>
            </div>
        </div>
    )
}