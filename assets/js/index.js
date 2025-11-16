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
console.log(averageAmount); 

const orderIds = orders.map (o => o.id);
console.log(orderIds);

// Mix Method Challenge 3
const books = [
  { title: "Book A", author: "Author 1", rating: 4.5 },
  { title: "Book B", author: "Author 2", rating: 3.8 },
  { title: "Book C", author: "Author 3", rating: 4.2 },
  { title: "Book D", author: "Author 4", rating: 2.9 }
];

const topRatedBooks = books.filter (b => b.rating >= 4);
const bookTitles = topRatedBooks.map (b => b.title);
console.log(bookTitles); 

const bookAuthors = topRatedBooks.map (b => b.author);
console.log(bookAuthors);

const bookRatings = topRatedBooks.map (b => b.rating);
console.log(bookRatings);

const bookInfo = topRatedBooks.map (b => ({
  title: b.title,
  author: b.author,
  rating: b.rating
}));
console.log(bookInfo); 

const bookSummary = topRatedBooks.map (b => ({
  title: b.title,
  rating: b.rating
}));
console.log(bookSummary);

const bookDetails = topRatedBooks.map (b => ({
  title: b.title,
  author: b.author
}));
console.log(bookDetails);

//obeject methods
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName() {
        return `${this.firstName} ${this.lastName}: ${this.age} years old`; 
    }
};

console.log(person.fullName());

// method di dalam method
const calculator = {
    add(a, b) { 
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    }
};

console.log(calculator.add(2, 3));
console.log(calculator.subtract(5, 2));
console.log(calculator.multiply(4, 6));
console.log(calculator.divide(10, 2));

const user = {
    name: "Alice",
    age: 25,
    updateAge(newAge) {
        this.age = newAge; 
    }
};

console.log(`Sebelum update: ${user.age}`);
user.updateAge(30);
console.log(`Sesudah update: ${user.age}`);

const personBMI = {
    name: "Bob",
    weight: 80, 
    height: 1.8, 
    calculateBMI() {
        return this.weight / (this.height * this.height);
    }
};

console.log(`${personBMI.name}'s BMI: ${personBMI.calculateBMI()}`);

const rectangle = {
    length: 10,
    width: 5,
    area() {
        return this.length * this.width;
    }
};

console.log(`Luas persegi panjang: ${rectangle.area()}`);

const circle = {
    radius: 7,
    circumference() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(`Keliling lingkaran: ${circle.circumference()}`);

// Challenge Object Method 1
const bankAccount = {
    accountHolder: "Syfa",
    balance: 5000,
    deposit(amount) {
        this.balance += amount;
    } 
};
console.log(`Saldo sebelum deposit: ${bankAccount.balance}`);
bankAccount.deposit(2000);
console.log(`Saldo sesudah deposit: ${bankAccount.balance}`);

// Destructuring
const mahasiswa = {
    nama: "Dodo",
    umur: 21,
    jurusan: "Informatika"
};
const { nama, umur, jurusan } = mahasiswa;
console.log(nama);
console.log(umur);
console.log(jurusan);

const laptop = {
    merk: "Dell",
    model: "XPS 13",
    tahun: 2021
};
const { merk, model, tahun } = laptop;
console.log(merk);
console.log(model);
console.log(tahun);

const buku = {
    judul: "JavaScript for Beginners",
    penulis: "Jane Doe",
    tahunTerbit: 2020
};
const { judul, penulis, tahunTerbit } = buku;
console.log(judul);
console.log(penulis);
console.log(tahunTerbit);

// Challenge Destructuring 1
const mobil = {
    merk: "Toyota",
    model: "Camry",
    tahun: 2022
};
const { merk: merkMobil, model: modelMobil, tahun: tahunMobil } = mobil;
console.log(merkMobil);
console.log(modelMobil);
console.log(tahunMobil);

// hard level destructuring
const userProfile = {
    username: "syfa123",
    password: "password123",
    email: "M0T9u@example.com",
    address: {
        street: "Jl. Merdeka No. 10",
        city: "Jakarta",
        country: "Indonesia"
    }
};
const { username, password, email, address: { street, city, country } } = userProfile;
console.log(username);
console.log(password);
console.log(email);
console.log(street);
console.log(city);
console.log(country);

// hard level destructuring 2 combine with array
const data = {
    users: [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
        { username: "user3", password: "password3" }
    ]
};
const { users: [ { username: user1, password: pass1 }, { username: user2, password: pass2 }, { username: user3, password: pass3 } ] } = data;
console.log(user1);
console.log(pass1);
console.log(user2);
console.log(pass2);
console.log(user3);
console.log(pass3);

// Challenge Destructuring Level 3
const order = {
    orderId: 12345,
    customer: {
        name: "Syfa",
        address: {
            street: "Jl. Merdeka No. 10",
            city: "Jakarta",
            country: "Indonesia"
        } 
    }
};
const { orderId, customer: { name: customerName, address: { street: customerStreet, city: customerCity, country: customerCountry } } } = order;
console.log(orderId);
console.log(customerName);
console.log(customerStreet);
console.log(customerCity);
console.log(customerCountry);

// object destructuring in function parameter
function displayUserInfo({ name, age, email }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
}
const userInfo = {
    name: "Budi",
    age: 28,
    email: "3BxkT@example.com"
};
displayUserInfo(userInfo);

// Spread & Rest Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

// Rest Operator
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));

function introduce(name, age, ...hobbies) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
}
introduce("Syfa", 21, "Membaca", "Menulis", "Menggambar");

// Challenge Rest Operator
const numbersNih = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbersNih;
console.log(first);
console.log(second);
console.log(rest);

const personNih = {
    name: "Ani",
    age: 22,
    hobbies: ["Membaca", "Menulis", "Menggambar"]
};
const { name, age, ...hobbies } = personNih;
console.log(name);
console.log(age);
console.log(hobbies);

// Challenge Spread Operator
const arrA = [10, 20, 30];
const arrB = [40, 50, 60];
const mergedArr = [...arrA, ...arrB];
console.log(mergedArr);

const objA = { x: 1, y: 2 };
const objB = { z: 3, w: 4 };
const mergedObj = { ...objA, ...objB };
console.log(mergedObj);

function multiply(factor, ...nums) {
    return nums.map(num => num * factor);
}
console.log(multiply(2, 1, 2, 3, 4, 5));

// Challenge Spread & Rest Operator Level 2
const fruitsNih = ["Apple", "Banana", "Cherry"];
const moreFruits = ["Mango", "Pineapple"];
const allFruits = [...fruitsNih, ...moreFruits];
console.log(allFruits);

const settings = { theme: "dark", fontSize: 14 };
const newSettings = { ...settings, fontSize: 16, language: "en" };
console.log(newSettings);

function createUser(username, email, ...roles) {
    return { username, email, roles };
}
const userNih = createUser("syfa123", "M0T9u@example.com", "admin", "user");
console.log(userNih);

// Challenge Spread & Rest Operator Level 3
const defaultConfig = {
    host: "localhost",
    port: 3000,
    database: "my_database"
};
const customConfig = {
    ...defaultConfig,
    host: "127.0.0.1",
    port: 3306,
    database: "my_new_database"
};
console.log(customConfig);

function calculateAverage(...nums) {
    const total = nums.reduce((acc, curr) => acc + curr, 0);
    return total / nums.length;
}
console.log(calculateAverage(1, 2, 3, 4, 5));

// Manipulasi Element
document.getElementById("manipulateBtn").addEventListener("click", function() {
    document.getElementById("manipulateTitle").innerHTML = "Judul telah diubah!";
});
document.getElementById("changeColorBtn").addEventListener("click", function() {
    document.getElementById("colorBox").style.backgroundColor = "lightblue";
});
document.getElementById("addItemBtn").addEventListener("click", function() {
    const list = document.getElementById("itemList");
    const newItem = document.createElement("li");
    newItem.textContent = "Item Baru";
    list.appendChild(newItem);
});
document.getElementById("removeItemBtn").addEventListener("click", function() {
    const list = document.getElementById("itemList");
    if(list.lastChild) {
        list.removeChild(list.lastChild);
    }
});

// Form Handling
document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    alert(`Nama: ${name}\nEmail: ${email}`);
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("userForm").reset();
});

// Add more form handling features
document.getElementById("nameInput").addEventListener("input", function() {
    const name = document.getElementById("nameInput").value;
    document.getElementById("nameDisplay").innerText = `Nama Anda: ${name}`;
});

document.getElementById("emailInput").addEventListener("input", function() {
    const email = document.getElementById("emailInput").value;
    document.getElementById("emailDisplay").innerText = `Email Anda: ${email}`;
});

// Challenge Form Handling
document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault(); 
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    alert(`Username: ${username}\nPassword: ${password}`);
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("loginForm").reset();
});