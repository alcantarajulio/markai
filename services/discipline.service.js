import chalk from "chalk";
import path from "path";
import fs from "fs";
import { isValidPost } from "./post.service";
import { slugify } from "@/utils/utils";

const postsDir = path.join(process.cwd(), "posts");
const disciplinesDir = path.join(process.cwd(), "disciplines");

/**
 * @typedef Discipline
 * @property {string} slug
 * @property {string} name
 * @property {string} photo
 * @property {number} period
 */

/**
 * Pega todas as disciplinas.
 * @returns {Discipline[]} todas as disciplinas em ordem de período.
 */
export function getAllDisciplines() {
    const names = new Set();
    /** @type {Discipline[]} */
    const disciplines = [];
    fs.readdirSync(postsDir).map((postDir) => {
        const [valid, postOrErr] = isValidPost(postDir);
        if (valid) {
            const { name, photo, period } = getDiscipline(postOrErr.data.discipline);
            if (!names.has(name)) {
                names.add(name);
                const slug = slugify(name);
                disciplines.push({ slug, name, photo, period })
            }
        } else {
            console.error(chalk.red(postOrErr));
        }
    });
    disciplines.sort((a, b) => {
        return a.period <= b.period ? -1 : 1;
    });
    return disciplines;
}

/**
 * Pega dados de uma disciplina usando seu nome.
 * @param {string} name - nome da disciplina.
 * @returns {Discipline} dados da disciplina.
 */
function getDiscipline(name) {
    /** @type {{name: string, photo: string, period: number}[]} */
    const disciplines = JSON.parse(fs.readFileSync(path.join(disciplinesDir, "disciplines.json")).toString());
    let photo = "";
    let period = 0;
    disciplines.forEach((discipline) => {
        if (discipline.name == name) {
            photo = discipline.photo;
            period = discipline.period;
        }
    });
    if (photo == "" || period == 0) {
        console.error(chalk.red(`error: "${name}" is not in disciplines.json.`));
        photo = "https://simpl.info/webp/cherry.webp"
    }
    const slug = slugify(name);
    return { slug, name, photo, period };
}

/**
 * Pega todos os caminhos das disciplinas.
 * @returns caminhos das disciplinas.
 */
export function getAllDisciplinesPaths() {
    return getAllDisciplines().map(
        (discipline) => {
            return `/disciplinas/${discipline.slug}`
        }
    )
}