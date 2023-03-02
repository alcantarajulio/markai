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
                            <Link href={`/posts/${post.id}`}>{post.title} {router.route == "/posts" ? `(${abbreviation(post.discipline)})` : ""}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </section>
    )
}

function abbreviation(disciplineName) {
    let abr = "";
    disciplineName.split(" ").forEach(word => {
        const char = word[0];
        if (char == char.toUpperCase()) {
            abr += char;
        }
    });
    abr = slugify(abr).toUpperCase();
    return abr;
}

function slugify(str) {
    const map = {
        '-': ' ',
        '-': '_',
        'a': 'á|à|ã|â|ä|Ä|À|Á|Ã|Â',
        'e': 'é|è|ê|ë|Ë|É|È|Ê',
        'i': 'í|ì|î|ï|Ï|Í|Ì|Î',
        'o': 'ó|ò|ô|õ|ö|Ö|Ó|Ò|Ô|Õ',
        'u': 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c': 'ç|Ç',
        'n': 'ñ|Ñ'
    };
    for (const pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };
    return str;
};