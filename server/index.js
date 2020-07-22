require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.static(path.join(__dirname, "../src/dist/public/")));


// ROUTES
// app.get('/bridge', require('./controllers/getBridge'));

// app.get('/rooms/:id', require('./controllers/getRoom'));
// app.get('/rooms', require('./controllers/getRooms'));

// app.get('/light/:id', require('./controllers/getLight'));
// app.get('/lights', require('./controllers/getLights'));

// app.get('/scenes/:id', require('./controllers/getScene'));
// app.get('/scenes', require('./controllers/getScenes'));

// app.get('/user', require('./controllers/getUser'));

// app.get('/route', require('./controllers/get'));
// app.get('/route', require('./controllers/get'));

// app.post('/', require('./controllers/post'));
// app.post('/', require('./controllers/post'));
// app.post('/', require('./controllers/post'));
// app.post('/', require('./controllers/post'));
// app.post('/', require('./controllers/post'));
// app.post('/', require('./controllers/post'));

// app.patch('/', require('./controllers/patch'));
// app.patch('/', require('./controllers/patch'));
// app.patch('/', require('./controllers/patch'));
// app.patch('/', require('./controllers/patch'));
// app.patch('/', require('./controllers/patch'));

// app.delete('/', require('./controllers/delete'));
// app.delete('/', require('./controllers/delete'));
// app.delete('/', require('./controllers/delete'));
// app.delete('/', require('./controllers/delete'));
// app.delete('/', require('./controllers/delete'));




// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
})