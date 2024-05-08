import { teamData } from "../../../database/teamData"
import { TeamCard } from "./TeamCard/TeamCard"

export const TeamSection = () => {
    return (
        <section className="flex flex-col items-center pb-[1.25rem] gap-[2.875rem]">
            <h2 className="text-[1.75rem] md:text-[3.125rem]">Nossa <span className="border-b-[0.5rem] border-b-[rgba(246,_136,_42,_1)] pb-2">Equipe</span></h2>

            <div className="flex flex-col gap-[1rem] items-center">
                {teamData.map((item, index) => (
                    <TeamCard key={index} image={item.image} name={item.name} description={item.description} index={index}/>
                ))}
            </div>
        </section>
    )
}