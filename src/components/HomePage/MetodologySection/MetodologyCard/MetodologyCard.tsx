export const MetodologyCard = (props: any) => {
    return (
        <div className="flex flex-col gap-[0.75rem] w-[18.75rem] md:w-[24.1875rem] min-h-fit md:min-h-[17.5rem] items-center py-[2.75rem] px-[2.125rem] gradient-box text-center">
            <h4 className="inline-block bg-clip-text text-transparent bg-[linear-gradient(266.72deg,_#9D2887_-1.01%,_#FA7E0D_104.53%)] text-[1.5rem] md:text-[2.125rem] font-semibold">{props.title}</h4>
            <p className="text-[rgba(73,_73,_73,_1)] text-[1rem] md:text-[1.25rem] font-normal text-center">{props.description}</p>
        </div>
    )
}
