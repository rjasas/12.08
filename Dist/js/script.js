// 1

let n = 20;

if (n<0) {
    console.log("skaičius yra blogas");
} else if (n>0) {
    console.log("skaičius yra geras");
} else {
    console.log("0");
}


// 2

let m = 2

if (m==1) {
    console.log ("Žalia")
} else if (m==2) {
    console.log ("Geltona (Palaukite)")
} else if (m==3) {
    console.log("Raudona")
} else {
    console.log ("error")
}

// 3

// let d = 3;
// let k = 18;
// let a = 5;

// if (a*d>k) {
//     console.log ("Knygos telpa į dėžes")
// } else {
//     console.log ("Knygos netelpa į dėžes")
// }


// 4

let z = 1221;
let ketvirtas = z % 10;
let trecias = Math.floor(z/10) % 10;
let antras = Math.floor(z/100) % 10;
let pirmas = Math.floor(z/1000);

if (pirmas == ketvirtas){
    if (antras == trecias){
        console.log("skaicius yra polindromas");
    } else {console.log("skaicius nera polindromas");}
} else {console.log ("Skaicius nera polindromas")}

// 5

let s = 22246;
let sesi = s % 10;
let penki = Math.floor(s / 10) % 10;
let keturi = Math.floor(s / 100) % 10;
let trys = Math.floor(s / 1000) % 10;
let du = Math.floor(s / 10000) % 10;
let vienas = Math.floor(s / 100000) % 10;
let sums = sesi+ penki + keturi + trys + du + vienas;

if (sums % 4 == 0) {
    console.log("Bilietas laimingas");
} else {
    console.log ("Bilietas nelaimingas")
}

// 6

let metai = 2000;

if (metai % 4 == 0 && metai % 100 != 0) {
    console.log ("Keliamieji")
} else {
    console.log ("Nekeliamieji")
} 

// 7 

let h = 12321;

let t1 = s % 10;
let t2 = Math.floor(s / 10) % 10;
let t3 = Math.floor(s / 100) % 10;
let t4 = Math.floor(s / 1000) % 10;
let t5 = Math.floor(s / 10000) % 10;

if (t1 == t5 && t2 == t4) {
    console.log("skaicius polindromas")
} else {
    console.log("skaicius nepolindromas")
}

//8

let k = 6;

if (n <=6 && n >=1) { 
    if (k % 2 == 0) {
        console.log("jaunelis");
} else {
    console.log("vyresnelis");
}
} else {
    console.log("kauliukas tik iki sesiu skaiciu")
}


// 9

let p1 = 5;
let p2 = 8;
let p3 = 10;

if (p1 > p2 && p3 < p1) {
    console.log("geriausias")
} else if (p2 > p1 && p3 < p2) {
    console.log("geriausias2")
} else {
    console.log("geriausas3")
}