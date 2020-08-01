import React from 'react';
import { Card, Text } from '@zeit-ui/react'
const OverallCount = ({ item=null, title='Confirmed', cardType="warning", Icon }) => {
    return (
        <Card>
           <Text h3={true} type={cardType}>  { Icon && <Icon/>} { title }</Text>
            <Text h4 type="secondary">{item.value}</Text>     
        </Card>
    );
}

export default OverallCount;
