import "@/styles/globals.scss";
import "@/public/css/dracula.css";
import "@fontsource/roboto";
import React, { useEffect } from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-H1PTTLC229";
ReactGA.initialize(TRACKING_ID);

// @ts-ignore
export default function App({ Component, pageProps }) {
    useEffect(() => {
        const pathname = window.location.pathname;
        if (pathname.startsWith("/markai")) {
            ReactGA.send({ hitType: "pageview", page: pathname, title: pathname });
        }
    })
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
            <main>
                <Component {...pageProps} />
            </main>
            <NavBar />
        </>
    )
}
