import { useState } from "react";
import { questionsData } from "../../../../database/questionsData";
import { AccordionItem } from "./AccordionItem/AccordionItem";
import '/src/assets/styles/accordion.scss'

export const QuestionsAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index: any) => {
     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
   
    return (
     <div className='accordion-container'>
        {questionsData.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} isOpen={activeIndex === index} onClick={() => handleItemClick(index)}/>
      ))}
     </div>
    )
}