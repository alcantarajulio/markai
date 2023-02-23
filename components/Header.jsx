import styles from "@/styles/Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.Header}>
            <Link href={"/"}>Home</Link>
            <Link href={"/disciplinas"}>Disciplinas</Link>
        </div>
    )
}