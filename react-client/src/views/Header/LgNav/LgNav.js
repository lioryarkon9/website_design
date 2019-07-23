import React from 'react';
import '../../../components/HoverList';
import HoverList from '../../../components/HoverList';


const LgNav = props => {
    return (
        <div id='navbar-lg' className='d-flex'>
            <HoverList/>
            <HoverList/>
        </div>
    );
}

export default LgNav;