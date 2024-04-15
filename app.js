const express = require('express');
const pug = require('pug');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'pug');
app.set('views', './public');

app.listen(3000, () => {
    console.log('Servidor en Funcionamiento en http://localhost:3000');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/catalogo', (req, res) => {
    res.render('catalogo');
});

app.get('/contactar', (req, res) => {
    res.render('contactar');
});

app.get('/espera', (req, res) => {
    res.render('espera');
});

app.get('/nosotros', (req, res) => {
    res.render('nosotros');
});

app.get('/servicios', (req, res) => {
    res.render('servicios');
});


app.get('/portafolio/:user/habilidades', (req, res) => {
    res.render('habilidades', { nombre: req.params.user });
});

app.get('/portafolio/:user/contactame', (req, res) => {
    res.render('contactame', { nombre: req.params.user });
});
