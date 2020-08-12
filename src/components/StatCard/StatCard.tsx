import React from 'react';
import { Card, Text,} from '@zeit-ui/react'
import { CardTypes } from '@zeit-ui/react/dist/utils/prop-types'
import { Activity } from '@zeit-ui/react-icons'
const StatCard : React.FC<{title: string, Icon?:any, value: number| string , type: CardTypes}>
 = ({title, value, Icon, type, ...rest}) => {
    return (
      
        <Card shadow type={type} {...rest} style={{width:"100%"}}>
             <Text h2>
                 {Icon && <Icon/>}
                 {Number(value).toLocaleString()}</Text>
            <Text h3>{title}</Text>
        </Card>
    );
}

export default StatCard;
