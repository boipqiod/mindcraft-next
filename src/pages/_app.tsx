import React from "react";
import type { AppProps } from 'next/app';
import {AppLayout} from "@/layout/AppLayout";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {TestProvider} from "@/context/TestProvider";
import {AuthProvider} from "@/context/AuthProvider";

const theme = extendTheme({
    breakpoints:{
        sm: "300px",
        md: "720px",
    },
    styles: {
        global: {
            html: {
                fontSize: '14px',
                backgroundColor: "#d9d9d9",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                minHeight: "100vh",
            },
        },
    },
});

const MyApp = ({ Component, pageProps }: AppProps)  => {
    return (
            <ChakraProvider theme={theme}>
                <TestProvider>
                    <AuthProvider>
                        <AppLayout>
                            <Component {...pageProps} />
                        </AppLayout>
                    </AuthProvider>
                </TestProvider>
            </ChakraProvider>
    );
}

export default MyApp;
