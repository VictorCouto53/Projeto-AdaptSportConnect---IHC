const express = require("express");
const eventRoutes = require("E:/ProjetoIHC/Projeto/router.js");

const app = express();
const port = 3000;
const path = require('path');
const public = path.join(__dirname, 'public');

app.use(express.static(path.join(__dirname, '/public')))

app.use(express.json());

app.get("/login", (req, res) => {
    res.sendFile(path.join(public, './src/login.html'));
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(public, './src/register.html'))
})

app.get("/menu", (req, res) => {
    res.sendFile(path.join(public, './src/menu.html'));
})

app.get("/dataEvent", (req, res) => {
    res.sendFile(path.join(public, './src/dataEvent.html'));
})

app.get("/dataEventII", (req, res) => {
    res.sendFile(path.join(public, './src/dataEventII.html'));
})

app.get("/configuracoes", (req, res) => {
    res.sendFile(path.join(public, './src/configuracoes.html'));
})

app.get("/configuracoesConfirm", (req, res) => {
    res.sendFile(path.join(public, './src/configuracoesConfirm.html'));
})

app.get("/userData", (req, res) => {
    res.sendFile(path.join(public, './src/userData.html'));
})

app.get("/calender", (req, res) => {
    res.sendFile(path.join(public, './src/calender.html'));
})

app.get("/pesquisa", (req, res) => {
    res.sendFile(path.join(public, './src/pesquisa.html'))
})

app.use("/dataEventII", eventRoutes);
app.use("/dataEvent", eventRoutes);

app.listen(port, () => { console.log('Escutando na porta: ' + port) })