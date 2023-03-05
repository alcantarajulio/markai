import React from "react";
import styles from "@/styles/home.module.css"

export default function Home() {
    return (
        <main>
            <div className={styles.Home}>
                <section className={styles.Notices}>
                    <h1>Markai v1</h1>
                </section>
                <section className={styles.Maintainers}>
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/99031023?v=4" />
                        <h3>Kenned Barbosa <a href="https://github.com/kenbme">@kenbme</a></h3>
                        <p>Desenvolvedor Principal e Idealizador</p>
                    </div>
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/97049617?v=4" />
                        <h3>Eduarda Farias <a href="https://github.com/EduardaFarias">@EduardaFarias</a></h3>
                        <p>Curadoria de Conteúdo</p>
                    </div>
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/110859172?v=4" />
                        <h3>Rayane Bezerra <a href="https://github.com/rayaneBSilva">@rayaneBSilva</a></h3>
                        <p>Curadoria de Conteúdo</p>
                    </div>
                    <div>
                        <h3>Agradeço também a todos que deram seu feedback durante o desenvolvimento deste projeto!</h3>
                    </div>
                </section>
            </div>
        </main>
    )
}