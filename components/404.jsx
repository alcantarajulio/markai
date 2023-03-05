import React from "react";
import styles from "@/styles/404.module.css";

export default function _404() {
    return (
        <main>
            <div className={styles._404}>
                <h1>404</h1>
                <p>Página não encontrada.</p>
                <img src="https://media.tenor.com/oMtGf2HXOcAAAAAC/sad-anime.gif" alt="Sad anime" />
            </div>
        </main>
    )
}