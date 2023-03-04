import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import { marked } from "marked";
import { slugify, abbreviation } from "@/utils/utils";
import chalk from "chalk";

const postsDir = path.join(process.cwd(), "posts");

/**
 * @typedef PostData
 * @property {string} title
 * @property {string} discipline
 * @property {boolean|undefined} fixed
 * @property {string} abr
 */

/**
 * @typedef Post
 * @property {string} id
 * @property {PostData} data
 * @property {string} content
 */

/**
 * Lê markdown de um post.
 * @param {string} postPath - caminho do post.
 * @returns dados do markdown do post.
 */
export function readPostMarkdownFile(postPath) {
    return matter(fs.readFileSync(path.join(postsDir, postPath)).toString("utf-8"));
}

/**
 * Gera o ID de um post.
 * @param {string} postPath - caminho do post.
 * @returns {string} postID.
 */
function getPostId(postPath) {
    return postPath.replace(".md", "");
}

/**
 * Pega todos os posts do diretório "posts".
 * @returns {Post[]} todos os posts em ordem alfabética.
 */
export function getAllPosts() {
    /** @type {Post[]} */
    const posts = []
    fs.readdirSync(postsDir).map((postDir) => {
        const post = readPostMarkdownFile(postDir);
        const data = post.data;
        data.abr = abbreviation(post.data.discipline);
        const content = marked.parse(post.content).trim();
        const id = getPostId(postDir);
        if (content != "") {
            // @ts-ignore
            posts.push({ id: id, data, content })
        } else {
            console.error(chalk.red(`error: post content is empty (${id})`));
        }
    })
    posts.sort((a, b) => {
        const title1 = slugify(a.data.title.toLowerCase());
        const title2 = slugify(b.data.title.toLowerCase());
        if (title1 < title2) {
            return -1;
        }
        if (title1 > title2) {
            return 1;
        }
        if (a.data.abr <= b.data.abr) {
            return -1;
        }
        return 1;
    })
    return posts;
}

/**
 * Pega todos os posts de uma disciplina.
 * @param {string} discipline - nome da disciplina. 
 * @returns {Post[]} posts da disciplina em ordem alfabética.
 */
export function getAllPostsByDiscipline(discipline) {
    /** @type {Post[]} */
    const posts = []
    getAllPosts().map(post => {
        if (post.data.discipline == discipline) {
            posts.push(post);
        }
    })
    return posts;
}

/**
 * Pega o caminho de todos os posts.
 * @returns caminhos dos posts.
 */
export function getAllPostsPaths() {
    /** @type {string[]}*/
    const paths = [];
    getAllPosts().map((post) => {
        paths.push(`/posts/${post.id}`);
    });
    return paths;
}

/**
 * Pega o post usando seu ID.
 * @param {string} id - ID do post.
 * @returns {Post} o post.
 */
export function getPost(id) {
    const post = readPostMarkdownFile(id + ".md");
    /** @type {PostData} */
    // @ts-ignore
    const data = post.data;
    const content = marked.parse(post.content).trim();
    return { id, data, content };
}
