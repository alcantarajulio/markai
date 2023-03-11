import styles from "@/styles/Posts.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

/**
 * @typedef {{id: string; title: string; abr: ?string;}} Post
 */

/**
 * @param {{posts: Post[]}} props
 */
export default function Posts({ posts }) {
    const router = useRouter();
    return (
        <div>
            <ul className={styles.Posts}>
                {posts.map((post) =>
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            {router.route == "/posts" ?
                                <p>
                                    <span className={styles.DisciplineAbbreviation}>{post.abr}</span>
                                    <span className={styles.PostTitle}>{post.title}</span>
                                </p>
                                : <p>
                                    <span className={styles.PostTitle} style={{ padding: "12px 4px" }}>{post.title}</span>
                                </p>}
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    )
}