require('dotenv').config();
const path = require('path')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./router');
const handlebars = require('express-handlebars');
const db = require('./config/db');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');


// Connect DB
db.connect();

//Cấu hình phương thức GET, POST, PUT, PATCH
app.use(methodOverride('_method'))

//Cấu hình handlebars
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        formatMoney: (str) => {
            if (str) {
                return str.split('').reverse().reduce((prev, next, index) => {
                    return ((index % 3) ? next : (next + ',')) + prev
                })
            }
        },
        prettifyDate:  function(timestamp) {
            function addZero(i) {
                if (i < 10) {
                  i = "0" + i;
                }
                return i;
            }

            var curr_date = timestamp.getDate();
            var curr_month = timestamp.getMonth();
            curr_month++;
            var curr_year = timestamp.getFullYear();

            var curr_hour = timestamp.getHours();
            var curr_minutes = timestamp.getMinutes();
            var curr_seconds = timestamp.getSeconds();

            result = addZero(curr_date)+ "/" + addZero(curr_month) + "/" + addZero(curr_year)+ '   ' +addZero(curr_hour)+':'+addZero(curr_minutes)+':'+addZero(curr_seconds);
            return result;
        }
    },
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Xử lý khi đường dẫn là file tĩnh thì sẽ lao vào public
app.use(express.static(path.join(__dirname, 'public')));

//Lấy dữ liệu từ POST
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());

//Lấy dữ liệu từ Cookie
app.use(cookieParser())

//Router init
router(app);





//Localhost 3000
app.listen(PORT, console.log(`Localhost: ${PORT}`));