import React from 'react';
import { Tabs } from '@zeit-ui/react'
import { Activity, Meh, Heart } from '@zeit-ui/react-icons'
import DetailTable from './DetailTable'

const Detailed = ({ country = null }) => {
    
    return (
        <div>
            <Tabs initialValue="1">
                <Tabs.Item label={<><Activity/> </>} value="1">
                    <DetailTable country={country}/>
                </Tabs.Item>
           
            </Tabs>
        </div>
    );
}

export default Detailed;
