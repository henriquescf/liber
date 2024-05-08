export const TeamCard = (props: any) => {

    return (
        <div className={`flex md:flex-row flex-col gap-[1.375rem] items-center md:w-[80vw] w-[90vw] ${props.index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            <img src={props.image} alt="profile-image"/>
            <div className={`flex flex-col gap-[0.625rem] ${props.index % 2 === 1 ? "text-right" : ""}`}>
                <h4 className="md:text-[1.875rem] font-semibold">{props.name}</h4>
                <p className="md:text-[1.4375rem] text-[rgba(73,_73,_73,_1)] text-justify whitespace-break-spaces w-[90vw] md:w-[40vw]">{props.description}</p>
            </div>
        </div>
    )
}