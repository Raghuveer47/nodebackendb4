const express = require("express");

const app = express();

const PORT = 3000;

// Sample users data
const users = [
    {
        id: 1,
        name: "Ravi",
        email: "ravi@gmail.com",
        age: 22
    },
    {
        id: 2,
        name: "Priya",
        email: "priya@gmail.com",
        age: 21
    },
    {
        id: 3,
        name: "Arjun",
        email: "arjun@gmail.com",
        age: 23
    }
];

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Students API");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is an Express.js application");
});

// Get all users
app.get("/users", (req, res) => {
    res.json(users);
});

// Get single user
app.get("/users/1", (req, res) => {
    res.json(users[0]);
});

// Get products
app.get("/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 55000
        },
        {
            id: 2,
            name: "Mobile",
            price: 25000
        }
    ];

    res.json(products);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
