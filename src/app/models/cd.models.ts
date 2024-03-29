export class CD {
    id!: number;
    titre!: string;
    autheur!: string;
    prix!: number;
    miniature!: string;
    dateDeSortie!: Date;
    quantite!: number;
    aVendre?: boolean;

    constructor(id: number, titre: string, autheur: string, prix: number, miniature: string, dateDeSortie: Date, quantite: number, aVendre?: boolean){
        this.id = id;
        this.titre = titre;
        this.autheur = autheur;
        this.prix = prix;
        this.miniature = miniature;
        this.dateDeSortie = dateDeSortie;
        this.quantite = quantite;
        if(aVendre !== undefined)
            this.aVendre = aVendre;
    }
}