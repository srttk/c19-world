import { CssBaseline, ZeitProvider } from '@zeit-ui/react'


export default function MyApp({ Component, pageProps}) {

    return (
        <ZeitProvider>
            <CssBaseline/>
            <Component {...pageProps}/>
        </ZeitProvider>
    )
} 