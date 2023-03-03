import styles from "@/styles/PostSingle.module.css"
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";


// @ts-ignore
export default function Page({ post }) {
    /** @type import("../services/post.service").Post */
    const _post = post;
    return (
        <section>
            <div className={styles.PostSingle}>
                <h1>{_post.data.title}</h1>
                <h2>{_post.data.discipline}</h2>
                <div dangerouslySetInnerHTML={{ __html: _post.content }}></div>
            </div>
            <div className={styles.Contribute}>
                <a href={`https://github.com/kenbme/markai/blob/main/posts/${_post.id}.md`}>
                    <p>Quer contribuir com esta página?</p>
                    <AiOutlineGithub />
                </a>
            </div>
        </section>
    )
}