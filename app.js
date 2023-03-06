const path = require('path');
const cors = require('cors')
// const ejs = require('ejs')

const express = require('express');
const bodyParser = require('body-parser');

const User = require('./models/user')

const errorController = require('./controllers/error');
const adminController = require('./controllers/admin');
const sequelize = require('./util/database')
const app = express();

const adminRoutes = require('./routes/admin');

app.use(cors())

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.delete('/delete-user/:id',adminController.deleteUser)

app.use(errorController.get404);

sequelize
    .sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => console.log(err))


