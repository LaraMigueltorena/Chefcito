const mysql = require('mysql2');

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',       // Dirección del servidor
    user: 'root',            // Usuario de MySQL
    password: 'Lara2004', // Contraseña de MySQL
    database: 'chefcito' // Nombre de la base de datos
});

// Intentar conectarse a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a MySQL:', err.message);
        return;
    }
    console.log('Conexión a MySQL exitosa.');
});

// Configuración del servidor
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Inicio</title></head>
            <body>
                <h1>¡Servidor funcionando correctamente!</h1>
            </body>
        </html>
    `);
});


// Cierra la conexión al detener el servidor
process.on('SIGINT', () => {
    connection.end((err) => {
        if (err) console.error('Error al cerrar la conexión:', err.message);
        else console.log('Conexión a MySQL cerrada.');
        process.exit();
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
