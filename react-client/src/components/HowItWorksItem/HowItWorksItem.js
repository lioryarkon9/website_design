import React from 'react';
import './HowItWorksItem.scss';

const HowItWorksItem = props => {
    return (
        <div className='how-it-works-item'>
            <div className='step-container d-flex justify-content-center'>
                <div className='step-number-cropper'>
                    <div className='step d-flex justify-content-center align-items-center'>
                        {props.step}
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center img-container'>
                <img src={props.iconSrc} alt='icon'/>
            </div>
            <div className='text-center txt'>
                {props.txt}
            </div>
        </div>
    );
}

HowItWorksItem.defaultProps = {
    step: '1',
    iconSrc: null,
    txt: 'default txt'
}

export default HowItWorksItem;