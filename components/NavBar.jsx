import Link from "next/link";
import styles from "@/styles/NavBar.module.css"
import { useRouter } from 'next/router'
import { useEffect } from "react";
import {
    AiOutlineHome, AiOutlineBook, AiOutlineFileText,
} from "react-icons/ai";
import React from "react";

// AiFillHome, AiFillBook, AiFillFileText

export default function NavBar() {
    const router = useRouter()
    const activeColor = "#DBF228";
    useEffect(() => {
        document.getElementById("home").style.color = "";
        document.getElementById("disciplines").style.color = "";
        document.getElementById("posts").style.color = "";
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
        if (id != "") {
            document.getElementById(id).style.color = activeColor;
        }
    }, [router.route])
    return (
        <nav className={styles.NavBar}>
            <Link id="home" href="/"><AiOutlineHome /></Link>
            <Link id="disciplines" href="/disciplinas"><AiOutlineBook /></Link>
            <Link id="posts" href="/posts"><AiOutlineFileText /></Link>
        </nav>
    )
}