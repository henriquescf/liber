import { FCBannerSection } from "./FCBannerSection/FCBannerSection"
import { FCItemsSection } from "./FCItemsSection/FCItemsSection"

export const FreeContentMain = () => {

    return(
        <main className="flex flex-col gap-[4.6875rem]">
            <FCBannerSection/>
            <FCItemsSection/>
        </main>
    )
}