const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//heroku
const port = process.env.PORT || 3000;

//middleware
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
//Parciales son blockes de html que se puden reutilizar.
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Emilio'
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});
/*
app.get('/', (req, res) => {
    //res.send('Hola mundo');
    let salida = {
        name: 'Fernando',
        edad: 34,
        uirl: req.url
    }

    res.send(salida);
});
*/

//use in local env 
/*app.listen(3000, () => {
    console.log('escuchando puerto 3000')
});*/
app.listen(port, () => {
    console.log(`escuchando puerto ${port}`)
})