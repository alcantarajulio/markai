import styles from "@/styles/Disciplines.module.css";
import Link from "next/link";
import React from "react";

// @ts-ignore
export default function Disciplines({ disciplines }) {
    /** @type {import("../services/discipline.service").Discipline[]} */
    const _disciplines = disciplines;
    return (
        <section>
            <div>
                <ul className={styles.Disciplines}>
                    {_disciplines.map((discipline) =>
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
            </div>
        </section>
    )
}
