import styles from "@/styles/Posts.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

// @ts-ignore
export default function Posts({ posts }) {
    /** @type {{id: string, title: string, abr: string}[]}*/
    const _posts = posts;
    const router = useRouter();
    return (
        <section>
            <div>
                <ul className={styles.Posts}>
                    {_posts.map((post) =>
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}><p>{post.title}{router.route == "/posts" ? ` (${post.abr})` : ""}</p></Link>
                        </li>)
                    }
                </ul>
            </div>
        </section>
    )
}