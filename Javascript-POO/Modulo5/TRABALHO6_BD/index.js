const express = require('express');
const app = express();

app.get("/", async(req,res) => {
    res.send("Teste do NODEMON")
});

app.get("/contato", async(req,res) => {
    res.send("Essa e a pasta de contato")
});

app.listen(8080, ()=> {
    console.log(`Servidor online na porta 8080: http://localhost:8080`)
});