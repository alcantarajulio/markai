import styles from "@/styles/Posts.module.css";
import Link from "next/link";

export default function Disciplines({disciplines}) {
    return (
        <ul className={styles.Posts}>
            {disciplines.map((discipline) =>
                <li key={discipline}>
                    <Link href={`disciplinas/${discipline}`}>{discipline}</Link>
                </li>)}
        </ul>
    )
}