import React from 'react';
import { Card, Text } from '@zeit-ui/react'
import { Activity } from '@zeit-ui/react-icons'
const StatCard = ({title, value, icon=null, ...rest}) => {
    return (
      
        <Card shadow {...rest} style={{width:"100%"}}>
             <Text h2>
                 <Activity/>
                 {Number(value).toLocaleString()}</Text>
            <Text h3>{title}</Text>
        </Card>
    );
}

export default StatCard;
