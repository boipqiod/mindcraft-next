import React from "react";
import type {AppProps} from 'next/app';
import {AppLayout} from "@/layout/AppLayout";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {TestProvider} from "@/context/TestProvider";
import {AuthProvider} from "@/context/AuthProvider";
import Head from "next/head";

const theme = extendTheme({
    breakpoints: {
        sm: "300px",
        md: "720px",
    },
    styles: {
        global: {
            html: {
                fontSize: '14px',
                backgroundColor: "#d9d9d9",
                display: "flex",
                justifyContent: "center",
                minHeight: "100vh",
            },
            body:{
                margin: "0",
                padding: "0",
            }
        },
    },
});

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <TestProvider>
                <AuthProvider>
                    <AppLayout>
                        <Head>
                            <link rel="manifest" href="/manifest.json" />
                        </Head>
                        <Component {...pageProps} />
                    </AppLayout>
                </AuthProvider>
            </TestProvider>
        </ChakraProvider>
    );
}

export default MyApp;
