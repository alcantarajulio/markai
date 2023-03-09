import styles from "@/styles/Disciplines.module.css";
import Link from "next/link";
import React from "react";

/**
 * @param {{disciplines: import("../services/discipline.service").Discipline[]}} props
 */
export default function Disciplines({ disciplines }) {
    return (
        <div>
            <section>
                <ul className={styles.Disciplines}>
                    {disciplines.map((discipline) =>
                        <li key={discipline.slug}>
                            <Link href={`disciplinas/${discipline.slug}`}>
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
    )
}
