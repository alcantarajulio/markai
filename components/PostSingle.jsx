import styles from "@/styles/PostSingle.module.css"
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
        <section>
            <div className={styles.PostSingle}>
                <h1>{post.data.title}</h1>
                <h2>{post.data.discipline}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
            <div className={styles.Contribute}>
                <a href={`https://github.com/kenbme/markai/blob/main/posts/${post.id}.md`}>
                    <p>Quer contribuir com esta página?</p>
                    <AiOutlineGithub />
                </a>
            </div>
        </section>
    )
}