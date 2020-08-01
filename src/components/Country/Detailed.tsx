import React from 'react';
import { Tabs } from '@zeit-ui/react'
import { Activity, Meh, Heart } from '@zeit-ui/react-icons'
import DetailTable from './DetailTable'

const Detailed = ({ country = null }) => {
    
    return (
        <div>
            <Tabs initialValue="1">
                <Tabs.Item label={<><Activity/> Confiremd</>} value="1">
                    <DetailTable country={country}/>
                </Tabs.Item>
                <Tabs.Item label={<><Meh/> Deaths</>} value="2">
                    <DetailTable country={country} fetchSection="deaths"/>
                </Tabs.Item>
                <Tabs.Item label={<><Heart/> Recoverd</>} value="3">
                    <DetailTable country={country} fetchSection="recovered"/>
                </Tabs.Item>
            </Tabs>
        </div>
    );
}

export default Detailed;
