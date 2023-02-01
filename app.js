
//requerimos los paquetes
const express = require('express');
//inicializamos
const app = express();

app.use(express.static('public'));


app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html')
})



//Puesto que va a escuchar nuestras peticiones.
app.listen(3000, () => {
    console.log("Aplicacion lista en puerto http://localhost:3000");
})