import styles from "@/styles/Disciplines.module.css";
import Link from "next/link";

export default function Disciplines({ disciplines }) {
    return (
        <ul className={styles.Disciplines}>
            {disciplines.map((discipline) =>
                <li key={discipline}>
                    <Link href={`disciplinas/${discipline}`}>
                        <img src="https://simpl.info/webp/cherry.webp"></img>
                        <div>
                            {discipline}
                        </div>
                    </Link>
                </li>)}
        </ul>
    )
}