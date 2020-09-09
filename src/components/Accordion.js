import React, { useState } from 'react'; //useState Hook to use state on functional components

//Functional Component
const Accordion = ({ items }) =>{
    // activeIndex Piece of State , setActiveIndex Function to change piece of state (Setter) , useState = send as parameter the initial value for piece of state.
    const [activeIndex, setActiveIndex] = useState(null); // Array destrocturing shorcut to get access to elements inside an array

    const onTitleClick = (index) =>{
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) =>{
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={ ()=> onTitleClick(index) }>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });
    
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion;