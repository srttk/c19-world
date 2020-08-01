import React from 'react';
import { Row, Col, Card } from '@zeit-ui/react'
import StatCard from '../StatCard'

const Stats = ({ confirmed , deaths , recovered }) => {
    return (
        <Row justify="space-around" gap={.8}>
            <Col>
                <StatCard type="warning" title="Confirmed" value={confirmed.value} />
            </Col>
            <Col>
                <StatCard type="dark" title="Deaths" value={deaths.value}/>
            </Col>
            <Col>
            <StatCard type="success" title="Recoverd" value={recovered.value}/>
            </Col>
        </Row>
    );
}

export default Stats;
