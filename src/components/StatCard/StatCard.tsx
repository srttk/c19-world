import React from 'react';
import { Card, Text } from '@zeit-ui/react'
import { Activity } from '@zeit-ui/react-icons'
const StatCard = ({title, value, icon=null, ...rest}) => {
    return (
      
        <Card shadow {...rest}>
             <Text h2>
                 <Activity/>
                 {title}</Text>
            <Text h3>{value}</Text>
        </Card>
    );
}

export default StatCard;
