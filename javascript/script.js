
class Personne{
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    sePresenter() {
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}
//utilisation
const p1 = new Personne("Ambdallah", 23);
p1.sePresenter();

class Rectangle{
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculSurface() {
        return this.largeur * this.hauteur;
    }
    calculPerimetre() {
        return 2 * (this.largeur + this.hauteur);
    }
}
// Test
const rect = new Rectangle(10, 5);
console.log("Surface:", rect.calculSurface());
console.log("Périmètre:", rect.calculPerimetre());

class CompteBancaire {
    #solde;
    constructor(soldeInitial = 0) {
        this.#solde = soldeInitial;
    }
    deposer(montant) {
        if (montant > 0) {
            this.#solde += montant;
        }
    }
    retirer(montant) {
        if (montant > this.#solde) {
            console.log("Solde insuffisant !");
            return;
        }
        this.#solde -= montant;
    }
    get solde() {
        return this.#solde;
    }
}
const compte = new CompteBancaire(1000);
compte.retirer(200);
console.log(compte.solde);

class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    parler() {
        console.log(`${this.nom} fait un bruit.`);
    }
}
class Chat extends Animal {
    parler() {
        console.log(`${this.nom} dit Miaou`);
    }
}
const chat = new Chat("Minou");
chat.parler();

class Etudiant {
    constructor(nom, moyenne) {
        this.nom = nom;
        this.moyenne = moyenne;
    }
    estAdmis() {
        return this.moyenne >= 10;
    }
}
const etudiants = [
    new Etudiant("Ali", 12),
    new Etudiant("Sara", 8),
    new Etudiant("John", 15)
];
const admis = etudiants.filter(e => e.estAdmis());
admis.forEach(e => {
    console.log(`${e.nom} est admis`);   
});

class Produit {
    constructor(id, nom, prix, stock) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.stock = stock;
    }
    vendre(qte) {
        if (qte > this.stock) {
            console.log("Stock insuffisant !");
            return;
        }
        this.stock -= qte;
    }
    reapprovisionner(qte) {
        this.stock += qte;
    }
}
class Inventaire {
    constructor() {
        this.produits = [];
    }
    ajouterProduit(produit) {
        this.produits.push(produit);
    }
    supprimerProduit(id) {
        this.produits = this.produits.filter(p => p.id !== id);
    }
    afficherStockTotal() {
        const total = this.produits.reduce((acc, p) => acc + p.stock, 0);
        console.log("Stock total:", total);
    }
}

class Forme {
    aire() {
        throw new Error("La méthode aire() doit etre implémentée !");
    }
}
class Rectangle extends Forme {
    constructor(largeur, hauteur) {
        super();
        this.largeur = largeur;
        this.hauteur =  hauteur;
    }
    aire() {
        return this.largeur * this.hauteur;
    }
}
class Cercle extends Forme {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    aire() {
        return Math.PI * this.rayon **2;
    }
}

class Configuration {
    static instance;
    constructor() {
        if (Configuration.instance) {
            return Configuration.instance;
        }
        this.settings = {};
        Configuration.instance = this;
    }
    getConfig() {
        return this.settings;
    }
}
const config1 = new Configuration();
const config2 = new Configuration();
console.log(config1 === config2); //true

class Utilisateur {
    constructor(nom, email) {
        this.nom = nom;
        this.email = email;
    }
    afficherInfos() {
        console.log(`${this.nom} - ${this.email}`);
    }
}
class Admin extends Utilisateur {
    supprimerUtilisateur(utilisateur) {
        console.log (`Utilisateur ${utilisateur.nom} supprimé`);
    }
}
class Client extends Utilisateur {
    passerCommande() {
        console.log(`${this.nom} passe une commande`)
    }
}

class Chambre {
    constructor(numero, prix) {
        this.numero = numero;
        this.prix = prix; 
        this.disponible = true;
    }
}
class Reservation {
    constructor(client, chambre, date) {
        this.client = client;
        this.chambre = chambre;
        this.date = date;
    }
}
class Hotel {
    constructor() {
        this.chambres = [];
        this.reservations = [];
    }
    ajouterChambre(chambre) {
        this.chambre.push(chambre);
    }
    reserverChambre(client, numero, date) {
        const chambre = this.chambres.find(c => c.numero === numero && c.disponible);
        if (!chambre) {
            console.log("Chambre non disponible");
            return;
        }
        chambre.disponible = false;
        const reservation = new Reservation(client, chambre, date);
        this.reservations.push(reservation);
    }
    afficherChambresDisponibles() {
        console.log(this.chambres.filter(c => c.disponible));
    }
}

class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(cb => cb(data));
        }
    }
}

class TodoModel {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
}

class Panier {
    constructor() {
        this.produits = [];
        this.coupon = 0;
    }
    ajouterProduit(produit) {
        this.produits.push(produit);
    }
    appliquerCoupon(pourcentage) {
        this.coupon = pourcentage;
    }
    calculerTVA() {
        return this.total() * 0.18;
    }
    total() {
        let total = this.produits.reduce((acc, p) => acc + p.prix, 0);
        total -= total * (this.coupon / 100);
        return total;
    }
    genererFacture() {
        console.log("Total:", this.total());
        console.log("TVA:", this.calculerTVA());
    }
}