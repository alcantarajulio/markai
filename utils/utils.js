/**
 * Abrevia nome de uma disciplina.
 * @param {string} disciplineName - representa o nome de uma disciplina.
 * @returns {string} nome da disciplina abreviado.
 */
export function abbreviation(disciplineName) {
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

/**
 * Transforma uma string qualquer numa string slug.
 * @param {string} str - uma string qualquer.
 * @returns {string} str com letras minúsculas, sem acentos e sem espaços.
 */
export function slugify(str) {
    str = str.toLowerCase()
    const map = {
        '-': ' ',
        'a': 'á|à|ã|â|ä|Ä|À|Á|Ã|Â',
        'e': 'é|è|ê|ë|Ë|É|È|Ê',
        'i': 'í|ì|î|ï|Ï|Í|Ì|Î',
        'o': 'ó|ò|ô|õ|ö|Ö|Ó|Ò|Ô|Õ',
        'u': 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c': 'ç|Ç',
        'n': 'ñ|Ñ'
    };
    for (const pattern in map) {
        // @ts-ignore
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };
    return str;
};