import React from 'react';
import './HoverList.scss';

class HoverList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    render () {
        return (
            <div 
                className='hover-list'
                onMouseEnter={e => this.setState({isOpen: true})}
                onMouseLeave={e => this.setState({isOpen: false})}
            >
                <div className='header'>
                    {this.props.header}
                </div>
                {(this.props.isActive && this.state.isOpen) ? 
                    <div className='hover-container'>
                        <div className='title'>
                            {this.props.title}
                        </div>
                        {this.props.options.map(item => (
                            <div 
                                key={item.value}
                                className='item'
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                : null}
            </div>
        );
    }
}

HoverList.defaultProps = {
    isActive: true,
    header: 'defaultHeader',
    title: 'defaultTitle',
    options: [
        {value: 'val1', title: 'title1'}, 
        {value: 'val2', title: 'title2'}
    ]
}

export default HoverList;