import React from 'react';
import {Button} from 'react-bootstrap';
import './Header.scss';
import LgNav from './LgNav';
import SmNav from './SmNav';


class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isSmMenuOpen: false
        }
    }
    render () {
        const SM_MENU_CLASS = this.state.isSmMenuOpen ? 'sm-menu-open' : '';
        const LOGIN_AREA_CLASS = this.state.isSmMenuOpen ? 'login-sm-menu-open' : '';
        return (
            <header className='d-flex flex-column justify-content-center'>
                <div id='logo-area' className='text-center'>
                    logo
                </div>
                <div id='container-a' className='d-flex justify-content-between'>
                    <LgNav/>
                    <SmNav 
                        toggleMenu={e => this.setState({isSmMenuOpen: !this.state.isSmMenuOpen})}
                        smMenuClass={SM_MENU_CLASS}
                        isSmMenuOpen={this.state.isSmMenuOpen}
                    />
                    <div id='login-area' className={LOGIN_AREA_CLASS}>
                        <Button size='sm' variant="outline-success">Login</Button>
                            <span>
                            | 
                            </span>
                        <Button size='sm' variant="success">Sign Up</Button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;