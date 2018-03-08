const express = require('express');
const app = express();

app.use('/scripts', express.static(__dirname + '/node_modules/chart.js/dist/'));
app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/', (req, res) => {
	res.render('index');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port: ', port));