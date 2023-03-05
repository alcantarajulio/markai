import "@/styles/globals.css";
import "@/public/css/dracula.css";
import "@fontsource/roboto";
import React from "react";
import Head from "next/head";

// @ts-ignore
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Markai</title>
                <meta charSet="utf-8" />
                <meta name="author" content="kenbme" />
                <meta name="description" content="Site para estudantes de Computação na UFCG" />
                <meta name="keywords" content="Computação, UFCG, Blog"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index,follow" />
                <link rel="shortcut icon" href="https://kenbme.github.io/markai/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
