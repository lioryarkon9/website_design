import React from 'react';
import './Join.scss';
import {Container, Row, Col} from 'react-bootstrap';
import HowItWorksItem from '../../components/HowItWorksItem';

const Join = props => {
    return (
        <div id='join'>
            <div className='header'>How do I join?</div>
            <Container>
                <Row>
                    <Col 
                        xs={6} 
                        sm={3}
                        className='d-flex justify-content-center how-it-works-item-container'
                    >
                        <HowItWorksItem
                            step='1'
                            iconSrc='https://www.duplitrade.com/img/step-how-it-works-register.b997c0d.png'
                        />
                    </Col>
                    <Col 
                        xs={6} 
                        sm={3} 
                        className='d-flex justify-content-center how-it-works-item-container'
                    >
                        <HowItWorksItem
                            step='2'
                            iconSrc='https://www.duplitrade.com/img/step-how-it-works-link.2789a54.png'
                        />
                    </Col>
                    <Col 
                        xs={6} 
                        sm={3} 
                        className='d-flex justify-content-center how-it-works-item-container'
                    >
                        <HowItWorksItem
                            step='3'
                            iconSrc='https://www.duplitrade.com/img/step-how-it-works-setup.d5ebcc9.png'
                        />
                    </Col>
                    <Col 
                        xs={6} 
                        sm={3} 
                        className='d-flex justify-content-center how-it-works-item-container'
                    >
                        <HowItWorksItem
                            step='4'
                            iconSrc='https://www.duplitrade.com/img/step-how-it-works-track.60866d8.png'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Join;