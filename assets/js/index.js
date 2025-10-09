let barang = [100, 200, 300, 400, 500];
let barangNaik = barang.map( item => item * 2);
console.log(barangNaik);

let cekHarga = document.getElementById("btn");
function changeTitle() {
    if(barangNaik.length === 0) {
        return;
    }
    document.getElementById("title").innerHTML = "Harga Naik: " + barangNaik;
}

// Challenge 1
let product = [
    {name: "Laptop", price: 1000},
    {name: "Keyboard", price: 500},
    {name: "Mouse", price: 200}
];

let discountedProduct = product.map (p => ({
    ...p,
    price: p.price * 0.8,
}));
console.log(discountedProduct);

// Challenge 2
let students = [
    {name: "Dodo", grade: 90 },
    {name: "Budi", grade: 60 },
    {name: "Ani", grade: 75 }
];

let studentWithStatus = students.map (s => ({
    ...s,
    status: s.grade >= 75 ? "Lulus" : "Remedial",
}));
console.log(studentWithStatus);

// Challenge 3
let apiUsers = [
    { first_name: "Siska", last_name: "Putri", age: 20 },
    { first_name: "Budi", last_name: "Santoso", age: 16 }
];

let formatUsers = apiUsers.map (a => ({
    full_name: `${a.first_name} ${a.last_name}`,
    age: a.age,
    isAdult: a.age >= 18
}));
console.log(formatUsers); 

// filter
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let genap = number.filter( item => item % 2 === 0);
console.log(genap);

let ganjil = number.filter( item => item % 2 !== 0);
console.log(ganjil);
let lebihDariLima = number.filter( item => item > 5);
console.log(lebihDariLima);

// Challenge filter 1
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let angkaGenap = angka.filter (a => a % 2 === 0);
console.log(angkaGenap);

// Challenge filter 2
let studentss = [
    {name : "Syfa", grade: 95},
    {name : "Budi", grade: 60},
    {name : "Ani", grade: 75},
    {name : "Dodo", grade: 50}
];

let lulus = studentss.filter (s => s.grade >= 75);
console.log(lulus);

// Challenge filter 3
let products = [
    {name: "Laptop", price: 1000},
    {name: "Keyboard", price: 500},
    {name: "Mouse", price: 200}
];

let murah = products.filter (p => p.price < 1000);
console.log(murah);

// Filter + Map Challenge
const users = [
    {name: "Sisi", active: true, email: "sisi@gmail.com"},
    {name: "Budi", active: false, email: "budi@gmail.com"},
    {name: "Ani", active: true, email: "ani@gmail.com"}
];

const activeUserEmails = users
    .filter (u => u.active)
    .map (u => `${u.name} - ${u.email}`);
console.log(activeUserEmails);

// Challenge 2 - Diskon produk mahal
const productsName = [
    {name: "Laptop", price: 1500},
    {name: "Keyboard", price: 500},
    {name: "Monitor", price: 1200},
    {name: "Mouse", price: 200}
];

const discountedExpensiveProducts = productsName
    .filter (p => p.price >= 1000)
    .map (p => ({
        ...p,
        price: p.price * 0.9
    }));
console.log(discountedExpensiveProducts);

// Challenge 3 - Filter murid lulus + ubah format tampilan
const studentsName = [
    {name: "Dodo", grade: 90},
    {name: "Budi", grade: 60},
    {name: "Ani", grade: 75},
    {name: "Salsa", grade: 50}
];

const formattedPassingStudents = studentsName
    .filter (s => s.grade >= 75)
    .map (s => `${s.name} - Lulus (Nilai: ${s.grade})`);
console.log(formattedPassingStudents);
