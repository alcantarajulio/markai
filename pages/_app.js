import "@/styles/globals.scss";
import "@/public/static/css/dracula.css";
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
        const href = window.location.href;
        if (href.startsWith("https://kenbme.github.io/markai")) {
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
            <footer>
                <section>
                    <div>
                        <p>Copyright © 2023 Kenned Barbosa</p>
                    </div>
                </section>
                <section>
                    <div>
                        <p>Existem conteúdos retirados do <a href="https://tamburetei.opendevufcg.org/">Tamburetei</a> (ver fontes do post)</p>
                    </div>
                </section>
            </footer>
            <NavBar />
        </>
    )
}
