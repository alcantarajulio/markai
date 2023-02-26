import { faBook, faFile, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "@/styles/NavBar.module.css"

export default function NavBar() {
    return (
        <>
            <div className={styles.NavBar}>
                <Link href="/"><FontAwesomeIcon icon={faHouse} /></Link>
                <Link href="/disciplinas"><FontAwesomeIcon icon={faBook} /></Link>
                <Link href="/posts"><FontAwesomeIcon icon={faFile} /></Link>
            </div>
        </>
    )
}