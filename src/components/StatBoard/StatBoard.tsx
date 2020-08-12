import React from 'react';
import { Grid, Text } from '@zeit-ui/react';
import {Heart, Meh, Activity} from '@zeit-ui/react-icons';
import StatCard from '../StatCard'

type StatValue = {
    value:   number | string
}

type StatsProps = {
    confirmed: StatValue
    deaths: StatValue
    recovered: StatValue
}

const Stats: React.FC<StatsProps> = ({ confirmed , deaths , recovered }) => {
    return (
        <div>
        <Text h3>Global Case</Text>
        <Grid.Container  gap={2} justify="center">
            <Grid xs={24} md={8}>
                <StatCard type="warning" title="Confirmed" value={confirmed.value} Icon={Activity} />
            </Grid>
            <Grid xs={24} md={8}>
                <StatCard type="dark" title="Deaths" value={deaths.value} Icon={Meh}/>
            </Grid>
            <Grid xs={24} md={8}>
            <StatCard type="success" title="Recovered" value={recovered.value} Icon={Heart}/>
            </Grid>
        </Grid.Container>
        </div>
    );
}

export default Stats;
