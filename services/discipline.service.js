import chalk from "chalk";
import path from "path";
import fs from "fs";
import { readPostMarkdownFile } from "./post.service";

const postsDir = path.join(process.cwd(), "posts");
const disciplinesDir = path.join(process.cwd(), "disciplines");

/**
 * @typedef Discipline
 * @property {string} name
 * @property {string} imageUrl
 * @property {number} period
 */

/**
 * Pega todas as disciplinas.
 * @returns {Discipline[]} todas as disciplinas em ordem de período.
 */
export function getAllDisciplines() {
    const names = new Set();
    const disciplines = [];
    fs.readdirSync(postsDir).map((postDir) => {
        const post = readPostMarkdownFile(postDir);
        if (post.data.discipline) {
            const { name, photo, period } = getDiscipline(post.data.discipline);
            if (!names.has(name)) {
                names.add(name);
                disciplines.push({ name, photo, period })
            }
        } else {
            console.error(chalk.red(`error: discipline not found (${postDir})`));
        }
    });
    disciplines.sort((a, b) => {
        if (a.period <= b.period) {
            return -1;
        } else {
            return 1;
        }
    });
    return disciplines;
}

/**
 * Pega dados de uma disciplina usando seu nome.
 * @param {string} name - nome da disciplina.
 * @returns {Discipline} dados da disciplina.
 */
function getDiscipline(name) {
    const disciplines = JSON.parse(fs.readFileSync(path.join(disciplinesDir, "disciplines.json")).toString());
    let photo = "";
    let period = 0;
    disciplines.forEach(discipline => {
        if (discipline.name == name) {
            photo = discipline.photo;
            period = discipline.period;
        }
    });
    if (photo == "" || period == 0) {
        console.error(chalk.red(`error: photo or period not found (${name})`));
        photo = "https://simpl.info/webp/cherry.webp"
    }
    return { name, photo, period };
}

/**
 * Pega todos os caminhos das disciplinas.
 * @returns caminhos das disciplinas.
 */
export function getAllDisciplinesPaths() {
    return getAllDisciplines().map(
        (discipline) => {
            return `/disciplinas/${discipline.name}`
        }
    )
}