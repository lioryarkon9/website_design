import React from 'react';
import './Dropdown.scss';
import OuterClickHandler from '../../AppLogic/OuterClickHandler';


class Dropdown extends OuterClickHandler {
    constructor (props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    handleClickOutside (event) {
        //method to override
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({isOpen: false});
        }
    }
    render () {
        return (
            <div ref={this.setWrapperRef}>
                <div 
                    className='app-dropdown'
                    style={{cursor: 'pointer'}}
                >
                    <div 
                        style={{backgroundColor: this.state.isOpen ? '#fff' : 'inherit', fontSize: 1.1 + 'em'}}
                        className='header' 
                        onClick={e => this.setState({isOpen: !this.state.isOpen})}
                    >
                        {this.props.header}
                    </div>
                    {this.state.isOpen ?
                        <div className='list-container'
                            style={{paddingLeft: 8 + 'px'}}
                            
                        >
                            <div 
                                className='item' 
                                style={{fontSize: 0.8 + 'em', fontWeight: 'bold'}}
                            >
                                {this.props.title}
                            </div>
                            {this.props.options.map(item => (
                                <div
                                    style={{fontSize: 0.8 + 'em'}}
                                    key={item.value}
                                    className='item'
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    : null}
                </div>
            </div>
        );
    }
}

Dropdown.defaultProps = {
    header: 'defaultHeader',
    title: 'defaultTitle',
    options: [
        {value: 'val1', title: 'title1'}, 
        {value: 'val2', title: 'title2'}
    ]
}

export default Dropdown;