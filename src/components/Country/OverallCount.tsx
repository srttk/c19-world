import React from 'react';
import { Card, Text } from '@zeit-ui/react'



type OverallCountProps = {
    item:any
    title: string
    cardType: any
    Icon: any
}
const OverallCount:React.FC<OverallCountProps> = ({ item=null, title='Confirmed', cardType="warning", Icon }) => {
    return (
        <Card>
           <Text h3={true} type={cardType}>  { Icon && <Icon/>} { title }</Text>
            <Text h4 type="secondary">{Number(item.value).toLocaleString()}</Text>     
        </Card>
    );
}

export default OverallCount;
