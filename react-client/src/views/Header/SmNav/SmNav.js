import React from 'react';
import './SmNav.scss';
import Dropdown from '../../../components/Dropdown';
import CLOSE_ICON from '../../../assets/close.png';

const SmNav = props => {
    return (
        <div 
            id='navbar-sm'
            
            className={props.smMenuClass}
        >
            <div 
                style={{cursor: 'pointer', paddingTop: 6 + 'px'}}
                onClick={props.toggleMenu}
            >
                {props.isSmMenuOpen ? 
                    <img src={CLOSE_ICON} alt='close'/>
                : <span style={{color: '#fff'}}>&#9776;</span>}
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