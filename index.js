const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('News published')
});

const categories = require('./data/categories.json')
app.get('/categories', (req, res) => {
    res.send(categories);
})
app.listen(port, () => {
    console.log('listening on port', port);
})