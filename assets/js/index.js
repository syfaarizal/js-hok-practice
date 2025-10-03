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
    status: s.grade >= 70 ? "Lulus" : " Remedial",
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