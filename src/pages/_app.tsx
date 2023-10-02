import React from "react";
import type { AppProps } from "next/app";
import { AppLayout } from "@/layout/AppLayout";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";

import favicon from "@/assets/favicon.png";
import image from "@/assets/demo.jpg";
import { Provider } from "react-redux";
import store from "@/redux/store";

const theme = extendTheme({
    breakpoints: {
        sm: "300px",
        md: "800px"
    },
    styles: {
        global: {
            html: {
                fontSize: "14px",
                backgroundColor: "#d9d9d9",
                display: "flex",
                justifyContent: "center",
                minHeight: "100vh"
            },
            body: {
                margin: "0",
                padding: "0"
            }
        }
    }
});

const APP = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <AppLayout>
                    <Head>
                        <title>MindCraft</title>
                        <meta
                            name="description"
                            content="MindCraft is a web application that allows you to create test and share them with your friends!"
                        />
                        <meta
                            property="og:description"
                            content="MindCraft is a web application that allows you to create test and share them with your friends!"
                        />

                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                        />
                        <meta name="theme-color" content="#80A9A3" />
                        <meta property="og:type" content="wap" />
                        <link rel="icon" href={`${favicon.src}`} />
                        <meta property="og:image" content={image.src} />

                        <link rel="manifest" href="/manifest.json" />
                    </Head>
                    <Component {...pageProps} />
                </AppLayout>
            </Provider>
        </ChakraProvider>
    );
};

export default APP;
