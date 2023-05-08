const express = require('express');

const path = require('path'); 

const app = express();

app.use(express.static('public'))
app.use(express.static('views'))

app.listen(1001, () => {
    console.log('Servidor corriendo en el puerto 1001')
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
});
