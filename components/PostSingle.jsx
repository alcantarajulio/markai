import styles from "@/styles/PostSingle.module.css"

export default function Page({ post }) {
    return (
        <section>
            <div className={styles.PostSingle}>
                <h1>{post.data.title}</h1>
                <h2>{post.data.discipline}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
        </section>
    )
}