import styles from "@/styles/PostSingle.module.css"
import React, { useEffect } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import hljs from "highlight.js";
import Link from "next/link";

/**
 * @typedef Props
 * @property {import("../services/post.service").Post} post
 */

/**
 * @param {Props} props
 */
export default function Page({ post }) {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <main>
            <div>
                <section className={styles.PostSingle}>
                    <h1>{post.data.title}</h1>
                    <h2><Link href={`../disciplinas/${post.data.disciplineSlug}`}>{post.data.discipline}</Link></h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </section>
                <section className={styles.Contribute}>
                    <a target="_blank" rel="noopener noreferrer" href={`https://github.com/kenbme/markai/blob/main/posts/${post.id}.md`}>
                        <p>Quer contribuir com esta página?</p>
                        <AiOutlineGithub />
                    </a>
                </section>
            </div>
            <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
        </main>
    )
}