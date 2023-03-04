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
 * Verifica se postDir é válido.
 * @param {string} postDir 
 * @returns {boolean}
 */
function isValidPostDir(postDir) {
  const splited = postDir.split(".");
  return splited[splited.length - 1] == "md";
}


/**
 * Verifica se o header do post é válido.
 * @param {{ title?: string; discipline?: string; fixed?: boolean; }} postData
 * @returns {boolean}
 */
function isValidPostData(postData) {
  let result = true;
  if (postData.title == null) {
    result = false;
  }
  if (postData.discipline == null) {
    result = false;
  }
  if (postData.fixed == null) {
    postData.fixed = false;
  }
  if (!(postData.fixed == true || postData.fixed == false)) {
    result = false;
  }
  return result;
}

/**
 * Verifica se post é válido.
 * @param {string} postDir 
 * @return {[boolean, Post]}
 */
function isValidPost(postDir) {
  try {
    if (!isValidPostDir(postDir)) {
      console.error(chalk.red(`error: invalid archive (${postDir}).`));
      throw new Error("");
    }
    const id = getPostId(postDir);
    if (id != slugify(id)) {
      console.error(chalk.red(`error: post is not a slug (${postDir}).`));
      throw new Error();
    }
    const post = readPostMarkdownFile(postDir);
    const data = post.data;
    if (!isValidPostData(post.data)) {
      console.error(chalk.red(`error: post header invalid (${postDir}).`));
      throw new Error();
    }
    data.abr = abbreviation(post.data.discipline);
    const content = marked.parse(post.content).trim();
    if (content == "") {
      console.error(chalk.red(`error: post content is empty (${postDir}).`));
      throw new Error();
    }
    // @ts-ignore
    return [true, { id, data, content }];
  }
  catch {
    return [false, null];
  }
}

/**
 * Pega todos os posts do diretório "posts".
 * @returns {Post[]} todos os posts em ordem alfabética.
 */
export function getAllPosts() {
  /** @type {Post[]} */
  const posts = []
  fs.readdirSync(postsDir).map((postDir) => {
    const [isValid, post] = isValidPost(postDir);
    if (isValid) {
      const id = post.id;
      const data = post.data;
      const content = post.content;
      // @ts-ignore
      posts.push({ id, data, content })
    }
  })
  posts.sort((a, b) => {
    const title1 = slugify(a.data.title);
    const title2 = slugify(b.data.title);
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
