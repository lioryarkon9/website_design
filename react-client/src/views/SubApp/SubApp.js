import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import MockList from '../../AppLogic/MockAppData/data.json';
import './SubApp.scss';
import {isMinTwoItems} from '../../utils';


class SubApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            list: Array.from(MockList),
        }
        this.sortListByFollowers = this.sortListByFollowers.bind(this);
    }
    getCurrencySign (currency) {
        switch (currency) {
            case 'usd':
                return '$';
            case 'eur':
                return '@';
            default:
                return '()';
        }
    }
    getNePlClass (netPL) {
        if (netPL > 0) return 'positive-val'
        else return '';
    }
    sortListByFollowers () {
        let currentList = Array.from(this.state.list), isSortAsc = true;
        if (isMinTwoItems(currentList)) {
            if (currentList[0].followers < currentList[1].followers) {
                isSortAsc = false;
            }
            currentList.sort((a, b) => {
                const FOLLOWES_A = a.followers, FOLLOWES_B = b.followers;
                if (isSortAsc) {
                    return FOLLOWES_A - FOLLOWES_B;
                } else {
                    return FOLLOWES_B - FOLLOWES_A;
                }
            })

            this.setState({list: currentList});
        }
    }
    render () {
        return (
            <Container id='sub-app'>
                <Row className='flex-nowrap sub-app-row'>
                    <Col className='text-center header-item'>
                        Strategy
                    </Col>
                    <span>|</span>
                    <Col className='text-center header-item'>
                        Net P/L %
                    </Col>
                    <span>|</span>
                    <Col className='text-center header-item'>
                        Net Profit
                    </Col>
                    <span>|</span>
                    <Col className='text-center header-item'>
                        Trades
                    </Col>
                    <span>|</span>
                    <Col className='text-center header-item'>
                        Win %
                    </Col>
                    <span>|</span>
                    <Col className='text-center header-item'>
                        Profit Factor
                    </Col>
                    <span>|</span>
                    <Col className='text-center header-item'>
                        Weeks
                    </Col>
                    <span>|</span>
                    <Col 
                        className='text-center header-item'
                        onClick={e => this.sortListByFollowers()}
                        style={{cursor: 'pointer'}}
                    >
                        Followers
                    </Col>
                    <span>|</span>
                    <Col className='text-center header-item empty'>
                        Empty
                    </Col>
                </Row>
                {this.state.list.map((item, i) => (
                    <Row key={'_row-' + i} className='flex-nowrap sub-app-row'>
                        <Col className='d-flex justify-content-center align-items-center strategy-val'>
                            {item.strategy}
                        </Col>
                        <Col className={'d-flex justify-content-end align-items-center' + ' ' + this.getNePlClass(item.netPL)}>
                            {item.netPL}
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center'>
                            {this.getCurrencySign(item.netProfit.currency)}{item.netProfit.value}
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center'>
                            {item.trades}
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center'>
                            {item.winP}
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center'>
                            {item.profitFactor}
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center'>
                            {item.weeks}
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center'>
                            {item.followers}
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center'>
                            <Button onClick={e => alert('doing nothing')}>
                                Duplicate
                            </Button>
                        </Col>
                    </Row>
                ))}
            </Container>
        );
    }
}

export default SubApp;