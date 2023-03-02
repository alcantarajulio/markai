import styles from "@/styles/Disciplines.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Disciplines({ disciplines }) {
    return (
        <section>
            <div>
                <ul className={styles.Disciplines}>
                    {disciplines.map((discipline) =>
                        <li key={discipline.name}>
                            <Link href={`disciplinas/${discipline.name}`}>
                                <Image src={discipline.photo} width="300" height="300" />
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