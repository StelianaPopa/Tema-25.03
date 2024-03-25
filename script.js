
const cartProducts = [
    {
    id: 83172,
    price: 549,
    name: 'Product A',
    quantity: 2,
    category: "jewelery",
    },
    {
    id: 897032,
    price: 100,
    name: 'Product B',
    quantity: 4,
    category: "electronics",
    },
    {
    id: 3821,
    price: 90,
    name: 'Product C',
    quantity: 5,
    category: "women-clothing",
    },
    {
    id: 319,
    price: 30,
    name: 'Product D',
    quantity: 2,
    category: "women-clothing",
    },
    {
    id: 9342,
    price: 2000,
    name: 'Product E',
    quantity: 1,
    category: "jewelery",
    },
    {
    id: 8,
    price: 180,
    name: 'Product F',
    quantity: 2,
    category: "electronics",
    },
    ];
    
    
// Ex 1) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze suma totala de plata. Pretul fiecarui produs sa includa si TVA 19%

const getTotalDePlata = (products) => {
    let total = 0;
    const tva = 1.19;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity * tva;
    }
 return total;
}
console.log(getTotalDePlata(cartProducts));

// Ex 2) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze "Ai livrare gratuita daca cumperi 5 bucati din produsul C"

const aiLivrareGratuita = (products) => {
    const produsC = 3821;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === produsC && products[i].quantity >= 5) {
            return "Ai livrare gratuita";
        };
        if (products[i].id === produsC) {
            return `Ai livrare gratuita daca cumperi 5 bucati din produsul ${products[i].name}`;
        };
    }
};
console.log(aiLivrareGratuita(cartProducts));


// Ex 3) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze suma totala a produselor care au pretul mai mare decat 80.

const sumaTotalaBigger80 = (products) => {
    total = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > 80) {
            total += products[i].price * products[i].quantity
        };
    }
    return total;
};
console.log(sumaTotalaBigger80(cartProducts));


// Ex 4.1) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze numarul total de tipuri de produse din cos

// NU INTELEG LA CE TE REFERI PRIN TIPURI DE PRODUSE: POATE FI CATEGORIA DE PRODUSE (unde ar trebui sa returneze 3)
// SAU NUMARUL DE POZITII DISTINCTE IN COS (unde ar trebui sa returneze 6)
// CONSIDERAND CA TE REFERI LA VARIANTA 2, IATA REZOLVAREA 

const totalTipuriProduse = (products) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += 1;
    }
    return total;
}
console.log(totalTipuriProduse(cartProducts)); 

// Ex 4.2) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze numarul total de produse din cos

const totalProduse = (products) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].quantity;
    }
    return total;
}
console.log(totalProduse(cartProducts));

// Ex 5) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze numarul total de produse din cos care sunt din categoria 'jewelery'

const totalJewelery = (products) => {
    let total = 0;
    const categorie = "jewelery";
    for (let i = 0; i < products.length; i++) {
        if (products[i].category === categorie) {
            total += products[i].quantity;
        }
    }
    return total;
};
console.log(totalJewelery(cartProducts));


// Ex 6) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze mesajul "Ai cumparat produse din categoria de bijuterii in valoare de X lei"

const costTotalJewelery = (products) => {
    let total = 0;
    const categorie = "jewelery";
    for (let i = 0; i < products.length; i++) {
        if (products[i].category === categorie) {
            total += products[i].quantity * products[i].price;
        }
    }
    return `Ai cumparat produse din categoria de bijuterii in valoare de ${total} lei`;
};
console.log(costTotalJewelery(cartProducts));


// Ex 7) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze mesajul "Cel mai scump produs pe care l-ai selectat este X, 
// ai comandat o cantitate de Y produse si vei plati Z lei"

const returnMessage1 = (products) => {
    let celMaiScump = products[0].name;
    let celMaiMarePret = products[0].price;
    let totalProduse = 0;
    let totalDePlata = 0; 
    for (let i = 1; i < products.length; i++) {
        if (products[i].price > celMaiMarePret ) {
            celMaiMarePret = products[i].price;
            celMaiScump = products[i].name; 
        }
    };
    for (let i = 0; i < products.length; i++) {
        totalProduse += products[i].quantity;
        totalDePlata += products[i].quantity * products[i].price;
    }
    return `Cel mai scump produs pe care l-ai selectat este ${celMaiScump}, ai comandat o cantitate de ${totalProduse} produse si vei plati ${totalDePlata} lei`;
}
console.log(returnMessage1(cartProducts));


// Ex 8) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze mesajul "Cel mai ieftin produs pe care l-ai selectat are id-ul X"

const returnMessage2 = (products) => {
    let celMaiIeftin = products[0].id;
    let celMaiMicPret = products[0].price;
    for (let i = 1; i < products.length; i++) {
        if (products[i].price < celMaiMicPret) {
            celMaiMicPret = products[i].price;
            celMaiIeftin = products[i].id;
        }
    }
    return `Cel mai ieftin produs pe care l-ai selectat are id-ul ${celMaiIeftin}`;
}
console.log(returnMessage2(cartProducts));

// Ex 9) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze mesajul "Ai castigat o bratara" daca suma produselor din categoria 
// "women-clothing" depaseste 300

const returnMessage3 = (products) => {
    let total = 0;
    const categorie = "women-clothing";
    for (let i = 0; i < products.length; i++) {
        if (products[i].category === categorie) {
            total += products[i].quantity * products[i].price;
        }
    }
    if (total > 300) {
        return `Ai castigat o bratara pentru ca ai cumparat in valoare de ${total} lei din categorie Imbracaminte pentru femei`
    };
}
console.log(returnMessage3(cartProducts));



