export const CourseCard = (props: any) => {
    return (
        <div className="flex md:flex-row flex-col w-[37.125rem] min-h-[21.875rem] h-fit items-center bg-white border-[0.0625rem] border-[rgba(211,_211,_211,_1)] rounded-[0.5625rem] py-[1.125rem] pl-[1.25rem] pr-[1.875rem] gap-[1.625rem]">
            <img src={props.image} className="w-[16.8125rem] h-[16.3125rem]"/>

            <div className="flex flex-col gap-[0.75rem]">
                <h4 className="font-medium md:text-[1.5rem] text-left">{props.language}</h4>
                <p className="text-[rgba(73,_73,_73,_1)] whitespace-break-spaces text-justify">{props.description}</p>
            </div>
        </div>
    )
}