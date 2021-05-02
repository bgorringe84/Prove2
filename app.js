const express = require('express');
const path = require('path');

const adminData = require('./routes/admin');
const displayRouts = require('./routes/display');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.set("port", process.env.PORT || 3000);

//body-parser equivalent
app.use(express.urlencoded( {extended: false} ));
app.use(express.static(path.join(__dirname, 'public')));

//end-points
app.use('/admin', adminData.routes);
app.use(displayRouts);
//404 page
app.use((req, res, next) => {
   res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(app.get("port"), () => console.log("server is listening on port " + app.get("port")));