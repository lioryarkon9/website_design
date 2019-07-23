import React from 'react';


const Section = props => {
    return (
        <div 
            style={{
                minHeight: props.minHeight + 'vh', 
                backgroundColor: props.backgroundColor, 
                padding: props.padding + '%'}
            }
        >
            {props.children}
        </div>
    );
}

Section.defaultProps = {
    minHeight: 10,
    backgroundColor: '#fff',
    padding: 0
}

export default Section;