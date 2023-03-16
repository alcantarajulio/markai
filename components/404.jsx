import React from "react";
import styles from "@/styles/404.module.scss";

export default function _404() {
    return (
        <div className={styles._404}>
            <section>
                <h1>404</h1>
                <p>Página não encontrada.</p>
                <img src="https://media.tenor.com/oMtGf2HXOcAAAAAC/sad-anime.gif" alt="Sad anime" />
            </section>
        </div>
    )
}