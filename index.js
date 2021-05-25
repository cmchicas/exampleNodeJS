const express = require('express');
const morgan = require('morgan')
const app = express();


function logger(req, res, next){
    console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(express.json());
app.use(morgan('dev'));
/*
app.all('/user', (req, res, next) => {
    console.log('CARGANDO ALL');
    next();
})
*/
app.get('/user', (req, res) => {
    res.json({
        username: 'cchicas',
        email: 'cchicas@gmail.com'
    });
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params)
    res.send('About me POST ');
});

app.put('/user/:id', (req, res) => {
    console.log(req.body)
    res.send(`User ${req.params.id} updated`);
});

app.delete('/user/:id', (req, res) => {
    res.send(`User ${req.params.id} deleted`);
});

app.listen(3000, () => {
    console.log('server on port 3000');
});




