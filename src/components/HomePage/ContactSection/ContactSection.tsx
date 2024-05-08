import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { RiErrorWarningFill } from "react-icons/ri";
import { toast } from "react-toastify"
import { contactUsSheet } from "../../../services/contactUsSheet";


export const ContactSection = () => {

    const contactSchema = z.object({
        name: z.string().min(1, "Por favor, preencha o campo."),
        email: z.string().email("Por favor, insira um endereço de email válido"),
        message: z.string().min(1, "Por favor, preencha o campo.")
    })

    const {register, reset, handleSubmit, formState: {errors}}: any = useForm({resolver: zodResolver(contactSchema)})

    const contactSubmit = (data: any) => {
        contactUsSheet(data)
        reset()
        toast.success("Seu contato foi enviado com sucesso! Em breve entraremos em contato.")
    }

    return (
        <section className="flex flex-col gap-[5.8125rem] items-center mb-[3.125rem] md:mb-[0rem]">
            <h2 className="text-center text-[1.75rem] md:text-[3.125rem]">Entre em <span className="border-b-[0.5rem] border-b-[rgba(246,_136,_42,_1)] pb-2">Contato</span></h2>
            <div className="flex justify-center gap-[2.8125rem] flex-wrap">
            {/* Left Side */}
                <div className="flex flex-col gap-[2.5rem] bg-[url('/src/assets/img/mainpage/contact-bg.png')] h-[40vh] w-[90vw] md:h-[43.75rem] md:w-[31.25rem] bg-no-repeat rounded-[1.875rem] text-white pt-[1.75rem] pl-[2.125rem] md:pt-[3rem] md:pl-[3.375rem]">
                    <span className="mb-[0.625rem] text-[1.875rem] md:text-[45px]">Nossas Redes</span>
                    <div className="flex gap-[1.25rem] items-center flex-wrap">
                        <img src="/src/assets/img/footer/icons/whatsapp_icon.svg" alt="whatsapp-icon" className="w-[1.25rem] md:w-[2.5rem]"/>
                        <span className="text-[1rem] md:text-[1.5625rem]">(81) 99635-0832</span>
                    </div>
                    <div className="flex gap-[1.25rem] items-center flex-wrap">
                        <img src="/src/assets/img/footer/icons/email_icon.svg" alt="email-icon" className="w-[1.25rem] md:w-[2.5rem]"/>
                        <span className="text-[1rem] md:text-[1.5625rem]">contato@liberidiomas.com</span>
                    </div>
                    <div className="flex gap-[1.25rem] items-center flex-wrap">
                        <img src="/src/assets/img/footer/icons/instagram_icon.svg" alt="instagram-icon" className="w-[1.25rem] md:w-[2.5rem]"/>
                        <span className="text-[1rem] md:text-[1.5625rem]">@liberidiomas</span>
                    </div>
                </div>

                {/* Right Side */}
                <form className="flex flex-col w-[90vw] md:w-[50vw] gap-[2.4375rem] justify-center items-center md:items-stretch" onSubmit={handleSubmit(contactSubmit)} id="contactForm">
                    <div className="relative">
                        <input type="text" id="name_input" className="px-3.5 pb-2.5 pt-6 w-[90vw] md:w-full text-xl text-[rgba(73,_73,_73,_1)] bg-transparent rounded-lg border-[0.125rem] border-[rgba(208,_214,_221,_1)] appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " {...register("name")}/>

                        <label htmlFor="name_input" className="absolute text-sm text-[rgba(158,_158,_158,_1)] duration-300 transform -translate-y-4 scale-75 top-2 z-10 left-3 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-100 start-1 text-[1.875rem] peer-focus:cursor-default cursor-text">Nome</label>
                    </div>
                    {errors.name &&
                    <div className="mt-[-1.25rem] flex gap-2 items-center">
                        <RiErrorWarningFill size={24} color="#e97b19"/>
                        <span className="text-[rgba(67,_67,_67,_1)]">{errors.name.message}</span>
                    </div>
                    }

                    <div className="relative">
                        <input type="text" id="email_input" className="px-3.5 pb-2.5 pt-6 w-[90vw] md:w-full text-xl text-[rgba(73,_73,_73,_1)] bg-transparent rounded-lg border-[0.125rem] border-[rgba(208,_214,_221,_1)] appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " {...register("email")}/>

                        <label htmlFor="email_input" className="absolute text-sm text-[rgba(158,_158,_158,_1)] duration-300 transform -translate-y-4 scale-75 top-2 z-10 left-3 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-100 start-1 text-[1.875rem] peer-focus:cursor-default cursor-text">E-mail</label>
                    </div>
                    {errors.email &&
                    <div className="mt-[-1.25rem] flex gap-2 items-center">
                        <RiErrorWarningFill size={24} color="#e97b19"/>
                        <span className="text-[rgba(67,_67,_67,_1)]">{errors.email.message}</span>
                    </div>
                    }

                    <div className="relative">
                        <textarea rows={window.innerWidth <= 768 ? 4 : 10} id="message_input" className="px-3.5 pb-2.5 pt-6 w-[90vw] md:w-full text-xl text-[rgba(73,_73,_73,_1)] bg-transparent rounded-lg border-[0.125rem] border-[rgba(208,_214,_221,_1)] appearance-none focus:outline-none focus:ring-0 peer resize-none" placeholder=" " {...register("message")}/>

                        <label htmlFor="message_input" className="absolute text-sm text-[rgba(158,_158,_158,_1)] duration-300 transform -translate-y-4 scale-75 top-2 z-10 left-3 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-10 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-100 start-1 text-[1.875rem] peer-focus:cursor-default cursor-text">Mensagem</label>
                    </div>
                    {errors.message &&
                    <div className="mt-[-1.25rem] flex gap-2 items-center">
                        <RiErrorWarningFill size={24} color="#e97b19"/>
                        <span className="text-[rgba(67,_67,_67,_1)]">{errors.message.message}</span>
                    </div>
                    }

                    <button className="flex justify-center items-center rounded-[0.625rem] bg-[linear-gradient(259.18deg,_#E8924A_6.97%,_#E97B19_34.07%,_#E97B19_68.27%,_#F6B049_94.23%)] hover:opacity-90 cursor-pointer gap-4 py-[0.75rem] mt-[-1.25rem] md:py-[1.875rem] text-white text-[1.25rem] md:text-[2.1875rem] w-[90vw] md:w-auto">Enviar mensagem</button>
                </form>
            </div>
        </section>
    )
}