import styles from "@/styles/PostSingle.module.css"

export default function Page({ post }) {
    return (
        <>
            <section style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "10px 10px",
                marginBottom: "44px"
            }}>
                <div className={styles.PostSingle}>
                    <h1>{post.data.title}</h1>
                    <h2>{post.data.discipline}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>
            </section>
        </>
    )
}