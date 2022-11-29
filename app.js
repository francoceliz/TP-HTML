const express= require('express');
const app= express();
const port= 3030;
const path= require('path');

/* recursos estáticos */
app.use(express.static('public'))

/* rutas */
app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views', 'index.html'))),
app.get('/babage',(req,res) => res.sendFile(path.join(__dirname, 'views', 'babage.html'))),
app.get('/bernel-lee',(req,res) => res.sendFile(path.join(__dirname, 'views', 'bernel-lee.html'))),
app.get('/clarke',(req,res) => res.sendFile(path.join(__dirname, 'views', 'clarke.html'))),
app.get('/hamilton',(req,res) => res.sendFile(path.join(__dirname, 'views', 'hamilton.html'))),
app.get('/hooper',(req,res) => res.sendFile(path.join(__dirname, 'views', 'hooper.html'))),
app.get('/lovelace',(req,res) => res.sendFile(path.join(__dirname, 'views', 'lovelace.html'))),
app.get('/turing',(req,res) => res.sendFile(path.join(__dirname, 'views', 'turing.html'))),
app.get('*',(req,res) => res.sendFile(path.join(__dirname, 'views', '404.html'))),

/* servidor */
app.listen(port, () => console.log(`Servidor funcionando en http://localhost:${port}`) )