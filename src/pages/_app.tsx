import { CssBaseline, GeistProvider } from '@geist-ui/react';
import { AppContext, AppProvider } from '../components/Providers/AppProvider';


export default function MyApp({ Component, pageProps}) {

    return (
        <AppProvider>
            <AppContext.Consumer>{(value) =>  { 
                console.log('Value ', value.state.theme)
                return (
                <GeistProvider theme={{type:value.state.theme}} >
                    <CssBaseline/>
                    <Component {...pageProps}/>
                </GeistProvider>
            )}}</AppContext.Consumer>
        </AppProvider>
    )
} 