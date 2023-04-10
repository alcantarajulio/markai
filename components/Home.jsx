import React from "react";
import styles from "@/styles/Home.module.scss"

export default function Home() {
    return (
        <div className={styles.Home}>
            <section className={styles.Notices}>
                <h1>Markai</h1>
                <p>Site para estudantes de Computação na UFCG</p>
                <img src="https://kenbme.github.io/markai/static/img/mai-fundo-branco.png" alt="Markai Logo" />
            </section>
            <section>
                <h1>Principais contribuidores</h1>
                <div className={styles.Maintainers}>
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/99031023?v=4" alt="Foto de @kenbme" />
                        <h3>Kenned Barbosa <a href="https://github.com/kenbme">@kenbme</a></h3>
                        <p>Desenvolvedor Principal e Idealizador</p>
                    </div>
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/97049617?v=4" alt="Foto de @EduardaFarias" />
                        <h3>Eduarda Farias <a href="https://github.com/EduardaFarias">@EduardaFarias</a></h3>
                        <p>Curadoria de Conteúdo</p>
                    </div>
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/110859172?v=4" alt="Foto de @rayaneBSilva" />
                        <h3>Rayane Bezerra <a href="https://github.com/rayaneBSilva">@rayaneBSilva</a></h3>
                        <p>Curadoria de Conteúdo</p>
                    </div>
                </div>
            </section>
            <section className={styles.Why}>
                <h1>Porque existe o Markai?</h1>
                <div>
                    <div><img src="https://cdn0.iconfinder.com/data/icons/entypo/92/help-512.png" alt="Ponto de interrogação" /></div>
                    <div>
                        <ul>
                            <li>Ajudar estudantes</li>
                            <li>Descentralização do open-source</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
