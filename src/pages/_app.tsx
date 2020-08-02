import { CssBaseline, ZeitProvider } from '@zeit-ui/react'
import { AppContext, AppProvider } from '../components/Providers/AppProvider'


export default function MyApp({ Component, pageProps}) {

    return (
        <AppProvider>
            <AppContext.Consumer>{(value) =>  { 
                console.log('Value ', value.state.theme)
                return (
                <ZeitProvider theme={{type:value.state.theme}} >
                    <CssBaseline/>
                    <Component {...pageProps}/>
                </ZeitProvider>
            )}}</AppContext.Consumer>
        </AppProvider>
    )
} 