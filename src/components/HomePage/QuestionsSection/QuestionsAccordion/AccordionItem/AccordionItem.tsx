import { useRef } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'


export const AccordionItem = (props: any) => {
    const contentHeight = useRef()

     return(
        <div className="wrapper" >
            <button className={`question-container ${props.isOpen ? 'active-accordion' : ''}`} onClick={props.onClick} >
                <p className='question-content'>{props.question}</p>
                <RiArrowDropDownLine className={`arrow ${props.isOpen ? 'active-accordion' : ''}`} /> 
            </button>

            {/* @ts-ignore */}
            <div ref={contentHeight} className="answer-container" style={ props.isOpen ? { height: contentHeight.current.scrollHeight } : { height: "0px" }}>
                <p className="answer-content">{props.answer}</p>
            </div>
        </div>
     )
   }
   