import styles from "@/styles/PostSingle.module.css"
import Link from "next/link"
import Image from 'next/image';
import { useEffect } from "react";

export default function Page({ post }) {
    let baseUrl = "";
    useEffect(() => {
        const host = window.location.host;
        if (host == "https://github.com") {
            baseUrl = "https://github.com/kenbme/markai"
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
                    <Image src={`${baseUrl}/assets/svg/github.svg`} width="32" height="32" alt="GitHub" />
                </Link>
            </div>
        </section>
    )
}