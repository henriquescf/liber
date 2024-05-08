import { AboutSection } from "./AboutSection/AboutSection"
import { BannerSection } from "./BannerSection/BannerSection"
import { ContactSection } from "./ContactSection/ContactSection"
import { MetodologySection } from "./MetodologySection/MetodologySection"
import { PricingSection } from "./PricingSection/PricingSection"
import { QuestionsSection } from "./QuestionsSection/QuestionsSection"
import { TeamSection } from "./TeamSection/TeamSection"
import { TestimonialSection } from "./TestimonialSection/TestimonialSection"

export const HomeMain = () => {
    return (
        <main className="flex flex-col gap-[3.125rem] md:gap-[6.25rem] mb-[8.75rem]">
            <div className="bg-[linear-gradient(100deg,_hsla(300,_28%,_90%,_1)_0%,_hsla(0,_0%,_100%,_1)_13%,_hsla(0,_0%,_100%,_1)_79%,_hsla(29,_78%,_89%,_1)_100%)]">
                <BannerSection/>
                <AboutSection/>
            </div>

            <MetodologySection/>
            <PricingSection/>
            <TeamSection/>
            <TestimonialSection/>
            <ContactSection/>
            <QuestionsSection/>
        </main>
    )
}