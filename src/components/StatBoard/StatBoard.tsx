import React from 'react';
import { Grid, Text } from '@zeit-ui/react'
import StatCard from '../StatCard'

const Stats = ({ confirmed , deaths , recovered }) => {
    return (
        <div>
        <Text h3>Global Case</Text>
        <Grid.Container  gap={2} justify="center">
            <Grid xs={24} md={8}>
                <StatCard type="warning" title="Confirmed" value={confirmed.value} />
            </Grid>
            <Grid xs={24} md={8}>
                <StatCard type="dark" title="Deaths" value={deaths.value}/>
            </Grid>
            <Grid xs={24} md={8}>
            <StatCard type="success" title="Recovered" value={recovered.value}/>
            </Grid>
        </Grid.Container>
        </div>
    );
}

export default Stats;
