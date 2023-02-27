import styles from "@/styles/Disciplines.module.css";
import Link from "next/link";

export default function Disciplines({ disciplines }) {
    return (
        <section>
            <ul className={styles.Disciplines}>
                {disciplines.map((discipline) =>
                    <li key={discipline.name}>
                        <Link href={`disciplinas/${discipline.name}`}>
                            <img src={discipline.photo}></img>
                            <div>
                                {discipline.name}
                            </div>
                        </Link>
                    </li>)}
            </ul>
        </section>
    )
}