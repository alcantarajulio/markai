import styles from "@/styles/PostSingle.module.css"
import Link from "next/link"
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Page({ post }) {
    const [url, setUrl] = useState("https://kenbme.github.io/markai/");
    useEffect(() => {
        const host = window.location.host;
        if (host == "localhost:3000") {
            setUrl("");
        }
    }, [])
    return (
        <section>
            <div className={styles.PostSingle}>
                <h1>{post.data.title}</h1>
                <h2>{post.data.discipline}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
            <div className={styles.Contribute}>
                <Link href={`https://github.com/kenbme/markai/blob/main/posts/${post.id}.md`}>
                    <p>Quer contribuir com esta página?</p>
                    <Image src={`${url}/assets/svg/github.svg`} width="32" height="32" alt="GitHub" />
                </Link>
            </div>
        </section>
    )
}