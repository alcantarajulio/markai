import styles from "@/styles/Disciplines.module.css";
import Link from "next/link";

export default function Disciplines({ disciplines }) {
    return (
        <section>
            <div>
                <ul className={styles.Disciplines}>
                    {disciplines.map((discipline) =>
                        <li key={discipline.name}>
                            <Link href={`disciplinas/${discipline.name}`}>
                                <img src={discipline.photo} alt="Imagem da disciplina" />
                                <div>
                                    {discipline.name}
                                </div>
                            </Link>
                        </li>)}
                </ul>
            </div>
        </section>
    )
}
