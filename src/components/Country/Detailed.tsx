import React from 'react';
import { Tabs } from '@geist-ui/react'
import { Activity, Meh, Heart } from '@geist-ui/react-icons'
import DetailTable from './DetailTable'

const Detailed: React.FC<{country:string}> = ({ country = null }) => {
    
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
