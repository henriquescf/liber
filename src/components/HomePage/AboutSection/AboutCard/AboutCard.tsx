export const AboutCard = (props: any) => {
    return (
        <div className="flex flex-col gap-[1.375rem] w-[21.625rem]">
            <div className="flex gap-[1.5625rem] items-center">
                <div className="bg-[rgba(255,_217,_185,_1)] w-[2.75rem] h-[2.75rem] md:w-[3.6875rem] md:h-[3.6875rem] rounded-[0.375rem] border-[0.0625rem] border-[rgba(246,_136,_42,_1)] flex items-center justify-center">
                    <img src={props.img} alt="card-icon" className="text-[rgba(246,_136,_42,_1)]" />
                </div>
                <span className="text-[1.5rem] md:text-[2.125rem] font-medium">{props.title}</span>
            </div>

            <p className="text-[rgba(73,_73,_73,_1)] text-[1rem] md:text-[1.25rem] leading-[2rem] font-normal">{props.description}</p>
        </div>
    )
}