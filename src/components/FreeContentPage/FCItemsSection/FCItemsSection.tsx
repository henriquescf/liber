import { fcItemsData } from "../../../database/fcItemsData"
import { FCItemsCard } from "./FCItemsCard/FCItemsCard"

export const FCItemsSection = () => {
    return(
        <section className="px-10 md:px-[6.875rem] pb-[6.875rem] flex flex-col gap-[4.6875rem]">
            {fcItemsData.map((item, index) => (
                <FCItemsCard key={index} img={item.img} title={item.title} tag={item.tag} description={item.description}/>
            ))}
        </section>
    )
}