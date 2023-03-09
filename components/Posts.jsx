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
                            <p>{post.title}{router.route == "/posts" ? ` (${post.abr})` : ""}</p>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    )
}