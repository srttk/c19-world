import React from 'react';
import { Grid, Card } from '@zeit-ui/react'
import StatCard from '../StatCard'

const Stats = ({ confirmed , deaths , recovered }) => {
    return (
        <Grid.Container  gap={2} justify="center">
            <Grid xs={8} md={8}>
                <StatCard type="warning" title="Confirmed" value={confirmed.value} />
            </Grid>
            <Grid xs={8} md={8}>
                <StatCard type="dark" title="Deaths" value={deaths.value}/>
            </Grid>
            <Grid xs={8} md={8}>
            <StatCard type="success" title="Recoverd" value={recovered.value}/>
            </Grid>
        </Grid.Container>
    );
}

export default Stats;
