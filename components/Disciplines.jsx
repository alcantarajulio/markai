import styles from "@/styles/Disciplines.module.css";
import Link from "next/link";

/**
 * @typedef Props
 * @property {import("../services/discipline.service").Discipline[]} disciplines
 */

/**
 * @param {Props} props
 */
export default function Disciplines({ disciplines }) {
    return (
        <section>
            <div>
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
            </div>
        </section>
    )
}
