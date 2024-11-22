    const express = require ('express');

    const app = express();

    app.get('/', (req, res) => {

        res.status (404).send ('Holaaaa ');

    });

    app.listen (3000, () => {

        console.log ("servidor corriendo en el puerto 3000");

    });