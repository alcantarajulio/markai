import styles from "@/styles/Posts.module.css";
import Link from "next/link";

export default function Posts({ posts }) {
    return (
        <ul className={styles.Posts}>
            {posts.map((post) =>
                <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </li>)
            }
        </ul>
    )
}
