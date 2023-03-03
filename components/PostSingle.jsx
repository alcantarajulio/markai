import styles from "@/styles/PostSingle.module.css"
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

/**
 * @typedef Props
 * @property {import("../services/post.service").Post} post
 */

/**
 * @param {Props} props
 */
export default function Page({ post }) {
    return (
        <main>
            <div>
                <section className={styles.PostSingle}>
                    <h1>{post.data.title}</h1>
                    <h2>{post.data.discipline}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </section>
                <section className={styles.Contribute}>
                    <a target="_blank" rel="noopener noreferrer" href={`https://github.com/kenbme/markai/blob/main/posts/${post.id}.md`}>
                        <p>Quer contribuir com esta página?</p>
                        <AiOutlineGithub />
                    </a>
                </section>
            </div>
        </main>
    )
}