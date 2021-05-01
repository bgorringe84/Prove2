const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin');
const displayRouts = require('./routes/display');

const app = express();

app.set("port", process.env.PORT || 3000);

//body-parser equivalent
app.use(express.urlencoded( {extended: false} ));

//end-points
app.use('/admin', adminRoutes);
app.use(displayRouts);
//404 page
app.use((req, res, next) => {
   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(app.get("port"), () => console.log("server is listening on port " + app.get("port")));