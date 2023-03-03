import styles from "@/styles/Disciplines.module.css";
import Link from "next/link";
import React from "react";

/**
 * @param {{disciplines: import("../services/discipline.service").Discipline[]}} props
 */
export default function Disciplines({ disciplines }) {
    return (
        <main>
            <div>
                <section>
                    <ul className={styles.Disciplines}>
                        {disciplines.map((discipline) =>
                            <li key={discipline.name}>
                                <Link href={`disciplinas/${discipline.name}`}>
                                    <img src={discipline.photo} alt="Imagem da disciplina" />
                                    <div className={styles.DisciplineBody}>
                                        <p>{discipline.name}</p>
                                        <p className={styles.DisciplinePeriod}>{discipline.period}</p>
                                    </div>
                                </Link>
                            </li>)}
                    </ul>
                </section>
            </div>
        </main>
    )
}
