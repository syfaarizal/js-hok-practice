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

// Reduce
let nilai = [10, 20, 30, 40, 50];
let totalNilai = nilai.reduce( (accumulator, currentValue) => accumulator + currentValue);
console.log(totalNilai);

const nameProducts = [
  {name: "Laptop", price: 1500},
  {name: "Keyboard", price: 500},
  {name: "LMouse", price: 200}
];

const totalPrice = nameProducts.reduce((acc, u) => acc + u.price, 0);
console.log(totalPrice);

const angkaNih = [10, 20, 30];

const totalAngka = angkaNih.reduce((ac, a) => ac + a);
console.log(totalAngka);

const userss = ["Sylus", "Zayne", "Xavier"];

const sentence = userss.reduce((acc, u) => acc + u + ", ", "");
console.log(sentence);

// Challenge reduce Level 1
const numbers = [10, 20, 30, 40];
const totalNumbers = numbers.reduce((acc, val) => acc + val, 0);
console.log(totalNumbers);

const productss = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 500 },
  { name: "Mouse", price: 200 }
];
const totalPricee = productss.reduce((acc, val) => acc + val.price, 0);
console.log(`Total Price: ${totalPricee}`);

const names = ["Syfa", "Budi", "Ani"];
const totalHuruf = names.reduce((acc, val) => acc + val.length, 0);
console.log(totalHuruf);

const angkaIni = [1, 2, 3];
const double = angkaIni.reduce((acc, val) => {
  acc.push(val * 2)
  return acc;
}, []);
console.log(double);

// Challenge reduce Level 2
const cart = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 300 },
  { name: "Mouse", price: 150 },
];
const totalHarga = cart.reduce((acc, val) => acc + val.price * 1.1, 0);
console.log(`Total (termasuk pajak): ${totalHarga}`)

const usersName = [
  { id: 1, name: "Syfa", age: 20 },
  { id: 2, name: "Budi", age: 25 },
  { id: 3, name: "Ani", age: 22 }
];
const userMap = usersName.reduce((acc, val) => {
  acc[val.id] = val;
  return acc;
}, {});
console.log(userMap);

const items = [
  {name: "Pulpen", category: "Alat Tulis" },
  {name: "Buku", category: "Alat Tulis" },
  {name: "Laptop", category: "Elektronik" },
  {name: "Headphone", category: "Elektronik" }
];
const groupedItems = items.reduce((acc, val) => {
  if(!acc[val.category]) acc[val.category] = [];
  acc[val.category].push(val.name);
  return acc;
}, {});
console.log(groupedItems);

// Challenge reduce Level 3
const transactions = [
  { id: 1, type: "deposit", amount: 1000 },
  { id: 2, type: "withdrawal", amount: 500 },
  { id: 3, type: "deposit", amount: 200 },
  { id: 4, type: "withdrawal", amount: 300 },
  { id: 5, type: "deposit", amount: 400 }
];
const balance = transactions.reduce((acc, val) => {
  if(val.type === "deposit") {
    acc += val.amount;
  } else {
    acc -= val.amount;
  }
  return acc;
}, 0);
console.log(balance);

// Ganjil Genap Kelipatan 10 forEach

const numbersForEach = [10, 15, 20, 25, 30, 35, 40];
numbersForEach.forEach(num => {
  if(num % 2 === 0) {
    console.log(`${num} adalah bilangan genap`);
  } else {
    console.log(`${num} adalah bilangan ganjil`);
  }
});

const kelipatan10 = [];
numbersForEach.forEach(num => {
  if(num % 10 === 0) {
    kelipatan10.push(num);
  }
});
console.log(kelipatan10);

const hitungKategori = (arr) => {
  let summary = {ganjil: 0, genap: 0, kelipatan10: 0};

  arr.forEach(num => {
    if (num % 10 === 0) summary.kelipatan10 ++;
    else if (num % 2 === 0) summary.genap ++;
    else summary.ganjil ++;
  })

  return summary;
}

console.log(hitungKategori([5, 10, 15, 20, 25, 30, 33])); 

// forEach Challenge Level 1
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));

const numberss = [1, 2, 3, 4, 5];
numberss.forEach(num => console.log(num));

const transactionss = [
  { id: 1, type: "deposit", amount: 1000 },
  { id: 2, type: "withdrawal", amount: 500 },
  { id: 3, type: "deposit", amount: 200 },
  { id: 4, type: "withdrawal", amount: 300 },
  { id: 5, type: "deposit", amount: 400 }
];
transactionss.forEach(transaction => {
  if(transaction.type === "deposit") {
    console.log(`Deposit ${transaction.amount}`);
  } else {
    console.log(`Withdrawal ${transaction.amount}`);
  }
});

// forEach Challenge Level 2
const studentsss = [
  { name: "Dodo", grade: 90 },
  { name: "Budi", grade: 60 },
  { name: "Ani", grade: 75 },
  { name: "Siska", grade: 85 }
];
studentsss.forEach(student => {
  if(student.grade >= 75) {
    console.log(`${student.name} Lulus (Nilai: ${student.grade})`);
  } else {
    console.log(`${student.name} Tidak Lulus (Nilai: ${student.grade})`);
  }
});

const productssss = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 500 },
  { name: "Mouse", price: 200 }
];
productssss.forEach(product => {
  console.log(`Harga ${product.name}: ${product.price}`);
});

// add logic to display full name and age
const apiUserss = [
  { first_name: "Siska", last_name: "Putri", age: 20 },
  { first_name: "Budi", last_name: "Santoso", age: 16 }
];
apiUserss.forEach(user => {
  console.log(`Nama: ${user.first_name} ${user.last_name}, Umur: ${user.age}`);
});

// Mix Method Challenge
const employees = [
  { name: "Syfa", salary: 3000, active: true },
  { name: "Budi", salary: 5000, active: false },
  { name: "Ani", salary: 4000, active: true }
];

const activeEmployees = employees.filter (e => e.active);
const totalSalary = activeEmployees.reduce((acc, e) => acc + e.salary, 0);
console.log(totalSalary); 
const employeeNames = employees.map (e => e.name);
console.log(employeeNames);

// Mix Method Challenge 2
const orders = [
  { id: 1, amount: 250, status: "completed" },
  { id: 2, amount: 400, status: "pending" },
  { id: 3, amount: 300, status: "completed" },
  { id: 4, amount: 550, status: "pending" },
  { id: 5, amount: 200, status: "completed" }
];

const completedOrders = orders.filter (o => o.status === "completed");
const totalAmount = completedOrders.reduce((acc, o) => acc + o.amount, 0);
const averageAmount = totalAmount / completedOrders.length;
console.log(averageAmount); // add logic to calculate average amount of completed orders

const orderIds = orders.map (o => o.id);
console.log(orderIds);