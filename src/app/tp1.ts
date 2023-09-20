
/***********************************************************************************************************************
 * Fonction qui renvoie le minimum de deux nombres
 */
export function min(a: number, b: number): number {
    return NaN;
}


/***********************************************************************************************************************
 * Fonction qui trie des nombres par ordre croissant
 */
export function triCroissant(L: readonly number[]): readonly number[] {
    return [];
}


/***********************************************************************************************************************
 * Fonction qui trie des nombres par ordre décroissant
 */
export function triDécroissant(L: Readonly<number[]>): number[] {
    console.log(L);
    return [];
}


/***********************************************************************************************************************
 * Fonction qui somme
 */
export function Somme(L: Readonly<number[]>): number {
    console.log(L);
    return NaN;
}


/***********************************************************************************************************************
 * Fonction qui fait la moyenne
 */
export function Moyenne(L: Readonly<number[]>): number {
    console.log(L);
    return NaN;
}


/***********************************************************************************************************************
 * Fonction qui renvoie les nombres strictement supérieurs à un certain seuil
 * et triés par ordre croissant
 */
export function NombresSupérieursA(min: number, notes: Readonly<number[]>): number[] {
    console.log(min, notes);
    return [];
}


/***********************************************************************************************************************
 * Fonction qui renvoie les nombres strictement compris entre une valeur minimale et une valeur maximale
 * et triés par ordre croissant
 */
export function NombresComprisEntre(min: number, max: number, notes: Readonly<number[]>): number[] {
    console.log(min, max, notes);
    return [];
}


/***********************************************************************************************************************
 * Coder la méthode zip
 * Voir https://en.wikipedia.org/wiki/Zipping_(computer_science)#Definition
 */

type ZipArgs<R extends unknown[]> = {
    [P in keyof R]: readonly R[P][];
}
type ZipResult<R extends unknown[]> = readonly R[];

export function Zip<R extends unknown[]>(...LL: ZipArgs<R>): ZipResult<R> {
    return [];
}


/***********************************************************************************************************************
 * Produit scalaire entre deux vecteurs
 */
export function ProduitScalaire(V1: Readonly<number[]>, V2: Readonly<number[]>): number {
    return 0;
}


/***********************************************************************************************************************
 * Addition de matrices
 *   - définir le type ScalarMatrix comme un tableau immuable de tableaux immuables de nombres
 *   - Ajouter les deux matrices M1 et M2 si c'est possible et renvoyer le résultat {success: true, result: ScalarMatrix}
 *   - sinon renvoyer le résultat {success: false, error: XXX}, où vous définissez le type XXX le plus précisément possible, 
 *     avec les erreur à renvoyer dans cette ordre de priorité :
 *      - "M1 n'est pas bien formée"  -> dans le cas où M1 n'est pas rectangulaire
 *      - "M2 n'est pas bien formée"  -> dans le cas où M2 n'est pas rectangulaire
 *      - "M1 ne peut pas être vide"  -> La matrice M1 est vide (0 ligne u 0 colonne)
 *      - "M2 ne peut pas être vide"  -> La matrice M2 est vide (0 ligne u 0 colonne)
 *      - "Les matrices doivent avoir la même taille"  -> La matrice est vide (0 lignes u 0 colonnes)
 */
type ScalarMatrix = readonly (readonly number[])[]; // à redéfinir
type AjoutResult = {
    success: true,
    result: ScalarMatrix
} | {
    success: false,
    error: AjoutError
}; // à redéfinir

type AjoutMatrix = `M${1|2}`;
type AjoutError = `${AjoutMatrix} n'est pas bien formée` 
                | `${AjoutMatrix} ne peut pas être vide`
                | `Les matrices doivent avoir la même taille`;
export function AjoutMatrices(M1: ScalarMatrix, M2: ScalarMatrix): AjoutResult {
    return {success: false, error: "M1 n'est pas bien formée"};
}

/**
 * Codez une fonction qui somme une liste de matrices (au moins 2)
 * Adaptez le code de la fonction AjoutMatrices ainsi que les codes erreurs
 */



/***********************************************************************************************************************
 * Codez une classe immuable Matrice implémentant l'ajout et la multiplication de matrices.
 */


