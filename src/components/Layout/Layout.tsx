import React from 'react';
import Head from 'next/head'
import { Page, Text, Grid} from '@zeit-ui/react';
import { HeartFill , Zap } from '@zeit-ui/react-icons'

const Layout = ({ children }) => {
    return (
        <Page style={{overflow:"hidden"}}>
            <Head>
                <title>Covid 19 Coronavirus outbreak stats</title>
            </Head>
            <Page.Header>
           <Text h2>Covid-19 Outbreak </Text>
            </Page.Header>
            <Page.Content>
                {children}
            </Page.Content>
            <Page.Footer>
                <Grid.Container gap={4}>
                    <Grid xs={24} md={12}>
                        <Text type="secondary" size={12} >
                            Build with <HeartFill size={14} color="#f56"/> and Force <Zap size={14} color="#ff5"/> by <a href="https://github.com/saratonite" target="_blank">Sarath</a>
                        </Text>
                    </Grid>
                    <Grid xs={24} md={12}>
                        <Text type="secondary" size={12} style={{marginRight:"auto"}}>Data source: <a href="https://covid19.mathdro.id/" target="_blank">https://covid19.mathdro.id/</a></Text>
                    </Grid>
                </Grid.Container>
            </Page.Footer>
        </Page>
    );
}

export default Layout;
