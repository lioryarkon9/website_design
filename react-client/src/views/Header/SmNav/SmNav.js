import React from 'react';
import './SmNav.scss';
import Dropdown from '../../../components/Dropdown';

const SmNav = props => {
    return (
        <div 
            id='navbar-sm'
            
            className={props.smMenuClass}
        >
            <div 
                style={{cursor: 'pointer'}}
                onClick={props.toggleMenu}
            >
                ICON
            </div>

            {props.isSmMenuOpen ?
                <div id='sm-menu-container'>
                    <Dropdown/>
                    <Dropdown/>
                    <Dropdown/>
                </div>
            : null}
            
        </div>
    );
}

SmNav.defaultProps = {
    toggleMenu: e => console.info('default toggleMenu fired'),
    smMenuClass: ''
}

export default SmNav;