import Posts from "@/components/Posts";
import { getAllPosts } from "@/services/post.service"
import React, { useState } from "react";

/**
 * @typedef {{id: string; title: string; discipline: string; abr: string;}} Post
 */

/**
 * @param {{posts: Post[], disciplinesAbr: Set<string>}} props
 */
export default function Page({ posts, disciplinesAbr }) {
  const [postsFiltered, setPostsFiltered] = useState(posts);

  /**
   * @param {React.ChangeEvent<HTMLSelectElement>} e
   */
  function filterPostsByDiscipline(e) {
    if (e.target.value == "") {
      setPostsFiltered(posts);
      return;
    }
    const abr = e.target.value;
    /**
     * @type {Post[]}
     */
    const _postsFiltered = [];
    posts.forEach(post => {
      if (post.abr == abr) {
        _postsFiltered.push(post);
      }
    });
    setPostsFiltered(_postsFiltered);
  }

  const options = () => {
    return (
      <>
        {(() => {
          let rows = [<option key={""} value={""}></option>];
          disciplinesAbr.forEach(abr => {
            rows.push(<option key={abr} value={abr}>{abr}</option>);
          });
          return rows;
        })()}
      </>
    );
  }

  return (
    <>
      <div style={{ padding: "0px 16px", margin: 0, marginTop: "16px" }}>
        <select style={{ padding: "8px", border: "2px solid black" }} onChange={(e) => filterPostsByDiscipline(e)}>
          {options()}
        </select>
      </div>
      <Posts posts={postsFiltered} />
    </>
  )
}

export async function getStaticProps() {
  /** @type {Post[]} */
  const posts = [];
  let disciplinesAbr = new Set();
  getAllPosts().map((post) => {
    const id = post.id;
    const title = post.data.title
    const discipline = post.data.discipline;
    const abr = post.data.abr;
    posts.push({ id, title, discipline, abr });
    disciplinesAbr.add(abr);
  })
  return {
    props: { posts: posts, disciplinesAbr: Array.from(disciplinesAbr) }
  }
}