//khai bao
const express = require('express');
const app = express();
const webRoutes = require('./routes/web');
require('dotenv').config();

//khai bao routes
app.use('/', webRoutes);

//khai bao bien moi truong
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;


//khai bao view engine
const viewEngine = require('./config/viewEngine');
viewEngine(app);



//listen server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

