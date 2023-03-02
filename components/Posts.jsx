import styles from "@/styles/Posts.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Posts({ posts }) {
    const router = useRouter();
    return (
        <section>
            <div>
                <ul className={styles.Posts}>
                    {posts.map((post) =>
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>{post.title}{router.route == "/posts" ? ` (${post.abr})` : ""}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </section>
    )
}