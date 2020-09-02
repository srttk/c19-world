import React, { useContext, useEffect } from 'react';
import Head from 'next/head'
import { Page, Text, Grid, Toggle } from '@geist-ui/react';
import { HeartFill , Zap, Sun, Moon } from '@geist-ui/react-icons'
import { AppContext, ACTIONS} from '../Providers/AppProvider'
const Layout: React.FC = ({ children }) => {
    const { dispatch, state} = useContext(AppContext)

    useEffect(() => {
        const theme = localStorage.getItem('theme')

        if(theme) {
            dispatch({type: ACTIONS.THEME_SET, payload: theme})
        }
    },[])
    return (
        <Page style={{overflow:"hidden"}}>
            <Head>
                <title>Covid 19 Coronavirus outbreak stats</title>
            </Head>
            <Page.Header>
                <Grid.Container justify="space-between" alignItems="center">
                    <Grid>
                        <Text h2>Covid-19 Outbreak </Text>
                    </Grid>
                    <Grid style={{display:"flex", alignItems:"center"}}>
                        <Text type="secondary" span size={12} style={{marginRight:"5px"}}>Switch to dark mode </Text>
                        <Sun size={14}/>
                        <Toggle style={{marginRight:"5px", marginLeft:"5px"}} checked={state.theme==='dark'} size="large" onChange={() => {
                            dispatch({type: ACTIONS.THEME_TOGGLE})
                        }}/>
                        <Moon size={14}/>
                    </Grid>
                </Grid.Container>
            </Page.Header>
            <Page.Content>
                {children}
            </Page.Content>
            <Page.Footer style={{position:"relative"}}>
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
