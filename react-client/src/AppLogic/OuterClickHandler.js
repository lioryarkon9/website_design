import React from 'react';

// this class should be used extended by components such dropdowns which
// require only one usage (no two dropdowns open at the same time)

class OuterClickHandler extends React.Component {
    constructor (props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown',  this.handleClickOutside, true);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, true);
    }
    setWrapperRef (node) {
        this.wrapperRef = node;
    }
    handleClickOutside (event) {
        //method to override
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            alert('You clicked outside of me!');
        }
    }
    render() {
        //apply the wrapping ref div on the used component
        return (
            <div ref={this.setWrapperRef}>
                
            </div>
        );
    }
}

export default OuterClickHandler;