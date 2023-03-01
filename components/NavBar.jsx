import { faBook, faFile, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "@/styles/NavBar.module.css"
import { useRouter } from 'next/router'
import { useEffect } from "react";

export default function NavBar() {
    const router = useRouter()
    const activeColor = "#DBF228";
    useEffect(() => {
        let id = "";
        switch (router.route.split("/")[1]) {
            case "":
                id = "home";
                break;
            case "disciplinas":
                id = "disciplines";
                break;
            case "posts":
                id = "posts";
                break;
        }
        document.getElementById(id).style.color = activeColor;
    }, [])
    return (
        <footer className={styles.NavBar}>
            <Link id="home" href="/"><FontAwesomeIcon icon={faHouse} /></Link>
            <Link id="disciplines" href="/disciplinas"><FontAwesomeIcon icon={faBook} /></Link>
            <Link id="posts" href="/posts"><FontAwesomeIcon icon={faFile} /></Link>
        </footer>
    )
}