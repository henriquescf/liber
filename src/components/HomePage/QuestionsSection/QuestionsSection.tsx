import { QuestionsAccordion } from "./QuestionsAccordion/QuestionsAccordion"

export const QuestionsSection = () => {
    return (
        <section className="flex flex-col items-center gap-[50px] md:gap-[6.25rem] text-center">
            <h2 className="text-[1.75rem] md:text-[3.125rem]"><span className="border-b-[0.5rem] border-b-[rgba(157,_40,_135,_1)] pb-2">Perguntas</span> Frequentes</h2>
            <QuestionsAccordion/>
        </section>
    )
}