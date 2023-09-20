
/***********************************************************************************************************************
 * Fonction qui renvoie le minimum de deux nombres
 */
export function min(a: number, b: number): number {
    return a < b ? a : b;
}


/***********************************************************************************************************************
 * Fonction qui trie des nombres par ordre croissant
 */
export function triCroissant(L: readonly number[]): number[] {
    return [...L].sort( (a, b) => a - b );
}


/***********************************************************************************************************************
 * Fonction qui trie des nombres par ordre décroissant
 */
export function triDécroissant(L: readonly number[]): number[] {
    return [...L].sort( (a, b) => b - a );
}


/***********************************************************************************************************************
 * Fonction qui somme.
 * Lève une erreur "Impossible de sommer un tableau vide" si le tableau est vide
 */
export function Somme(L: readonly number[]): number {
    if (L.length === 0)
        throw new Error("Impossible de sommer un tableau vide");
    return L.reduce( (nb, x) => nb+ x );
}


/***********************************************************************************************************************
 * Fonction qui fait la moyenne
 * Lève une erreur "Impossible de faire la moyenne d'un tableau vide" si le tableau est vide
 */
export function Moyenne(L: readonly number[]): number {
    if (L.length === 0)
        throw new Error("Impossible de faire la moyenne d'un tableau vide");
    return Somme(L) / L.length;
}


/***********************************************************************************************************************
 * Fonction qui renvoie les nombres strictement supérieurs à un certain seuil
 * et triés par ordre croissant
 */
export function NombresSupérieursA(min: number, notes: readonly number[]): number[] {
    return triCroissant( notes.filter( x => x >= min ) );
}


/***********************************************************************************************************************
 * Fonction qui renvoie les nombres compris entre une valeur minimale et une valeur maximale
 * (valeurs non inclues) et triés par ordre croissant
 */
export function NombresComprisEntre(min: number, max: number, notes: readonly number[]): number[] {
    return triCroissant( notes.filter( x => x > min && x < max ) );
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
    const Vmin = LL.length === 0 ? [] : LL.reduce( (vmin, v) => vmin.length <= v.length ? vmin : v );
    const res = Vmin.map( (_, i) => LL.map( v => v[i]) as R );
    console.log(res);
    return res;
}

/***********************************************************************************************************************
 * Produit scalaire entre deux vecteurs
 * Lève une erreur "Les vecteurs doivent être non vides" si l'un des deux vecteurs est vide
 * Lève une erreur "Les vecteurs doivent être de même taille" si les deux vecteurs n'ont pas la même taille
 */
export function ProduitScalaire(V1: readonly number[], V2: readonly number[]): number {
    if (V1.length === 0 || V2.length === 0) {
        throw new Error("Les vecteurs doivent être non vides");
    }
    if (V1.length !== V2.length) {
        throw new Error("Les vecteurs doivent être de même taille");
    }
    return V1.reduce( (p, x, i) => p + x * V2[i], 0 );
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
// Revoie vrai ssi tous les vecteurs ont la même taille
function wellFormedMatrix(M: ScalarMatrix): boolean {
    return M.length === 0 || M.every( v => v.length === M[0].length );
}
export function AjoutMatrices(M1: ScalarMatrix, M2: ScalarMatrix): AjoutResult {
    if (!wellFormedMatrix(M1)) return {success: false, error: "M1 n'est pas bien formée"};
    if (!wellFormedMatrix(M2)) return {success: false, error: "M2 n'est pas bien formée"};
    if (M1.length === 0 || M1[0].length === 0) return {success: false, error: "M1 ne peut pas être vide"};
    if (M2.length === 0 || M2[0].length === 0) return {success: false, error: "M2 ne peut pas être vide"};
    if (M1.length !== M2.length || M1[0].length !== M2[0].length) return {success: false, error: "Les matrices doivent avoir la même taille"};
    return {
        success: true, 
        result: M1.map( (V1, i) => V1.map( (x, j) => x + M2[i][j] ) )
    };
}

/**
 * Codez une fonction qui somme une liste de matrices (au moins 2)
 * Adaptez le code de la fonction AjoutMatrices ainsi que les codes erreurs
 */



/**
 * Codez une classe immuable Matrice implémentant l'ajout et la multiplication de matrices.
 */


