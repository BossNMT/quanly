const hoadonDB = require('../models/hoadon');
const { listDb } = require('../../util/mongoose');

class homeController {
    home(req, res) {
        const year = new Date().getFullYear()
        const thang = new Date().getMonth() + 1
        const ngay = new Date().getDate() 
        const homnayBD = new Date(`${thang}-${ngay}-${year} 00:00:00.000Z`)
        const homnayKT = new Date(`${thang}-${ngay}-${year} 23:59:59.000Z`)
        const thang1BD = new Date(`01-01-${year} 00:00:00.000Z`)
        const thang1KT = new Date(`01-31-${year} 23:59:59.000Z`)
        const thang2BD = new Date(`02-01-${year} 00:00:00.000Z`)
        const thang2KT = new Date(`02-28-${year} 23:59:59.000Z`)
        const thang3BD = new Date(`03-01-${year} 00:00:00.000Z`)
        const thang3KT = new Date(`03-31-${year} 23:59:59.000Z`)
        const thang4BD = new Date(`04-01-${year} 00:00:00.000Z`)
        const thang4KT = new Date(`04-30-${year} 23:59:59.000Z`)
        const thang5BD = new Date(`05-01-${year} 00:00:00.000Z`)
        const thang5KT = new Date(`05-31-${year} 23:59:59.000Z`)
        const thang6BD = new Date(`06-01-${year} 00:00:00.000Z`)
        const thang6KT = new Date(`06-30-${year} 23:59:59.000Z`)
        const thang7BD = new Date(`07-01-${year} 00:00:00.000Z`)
        const thang7KT = new Date(`07-31-${year} 23:59:59.000Z`)
        const thang8BD = new Date(`08-01-${year} 00:00:00.000Z`)
        const thang8KT = new Date(`08-31-${year} 23:59:59.000Z`)
        const thang9BD = new Date(`09-01-${year} 00:00:00.000Z`)
        const thang9KT = new Date(`09-30-${year} 23:59:59.000Z`)
        const thang10BD = new Date(`10-01-${year} 00:00:00.000Z`)
        const thang10KT = new Date(`10-31-${year} 23:59:59.000Z`)
        const thang11BD = new Date(`11-01-${year} 00:00:00.000Z`)
        const thang11KT = new Date(`11-30-${year} 23:59:59.000Z`)
        const thang12BD = new Date(`12-01-${year} 00:00:00.000Z`)
        const thang12KT = new Date(`12-31-${year} 23:59:59.000Z`)

        Promise.all([
            hoadonDB.count({ createdAt: {$gte: homnayBD, $lt: homnayKT} }),
            hoadonDB.find({ createdAt: {$gte: homnayBD, $lt: homnayKT} }),

            hoadonDB.count({ createdAt: {$gte: thang1BD, $lt: thang1KT} }),
            hoadonDB.find({ createdAt: {$gte: thang1BD, $lt: thang1KT} }),
            
            hoadonDB.count({ createdAt: {$gte: thang2BD, $lt: thang2KT} }),
            hoadonDB.find({ createdAt: {$gte: thang2BD, $lt: thang2KT} }),
            
            hoadonDB.count({ createdAt: {$gte: thang3BD, $lt: thang3KT} }),
            hoadonDB.find({ createdAt: {$gte: thang3BD, $lt: thang3KT} }),
            
            hoadonDB.count({ createdAt: {$gte: thang4BD, $lt: thang4KT} }),
            hoadonDB.find({ createdAt: {$gte: thang4BD, $lt: thang4KT} }),
            
            hoadonDB.count({ createdAt: {$gte: thang5BD, $lt: thang5KT} }),
            hoadonDB.find({ createdAt: {$gte: thang5BD, $lt: thang5KT} }),
            
            hoadonDB.count({ createdAt: {$gte: thang6BD, $lt: thang6KT} }),
            hoadonDB.find({ createdAt: {$gte: thang6BD, $lt: thang6KT} }),
            
            hoadonDB.count({ createdAt: {$gte: thang7BD, $lt: thang7KT} }),
            hoadonDB.find({ createdAt: {$gte: thang7BD, $lt: thang7KT} }),
            
            hoadonDB.count({ createdAt: {$gte: thang8BD, $lt: thang8KT} }),
            hoadonDB.find({ createdAt: {$gte: thang8BD, $lt: thang8KT} }),
            
            hoadonDB.count({ createdAt: {$gte: thang9BD, $lt: thang9KT} }),
            hoadonDB.find({ createdAt: {$gte: thang9BD, $lt: thang9KT} }),
            
            hoadonDB.count({ createdAt: {$gte: thang10BD, $lt: thang10KT} }),
            hoadonDB.find({ createdAt: {$gte: thang10BD, $lt: thang10KT} }),
            
            hoadonDB.count({ createdAt: {$gte: thang11BD, $lt: thang11KT} }),
            hoadonDB.find({ createdAt: {$gte: thang11BD, $lt: thang11KT} }),
            
            hoadonDB.count({ createdAt: {$gte: thang12BD, $lt: thang12KT} }),
            hoadonDB.find({ createdAt: {$gte: thang12BD, $lt: thang12KT} }),
        ])
            .then(([
                countHomNay, moneyHomNay,
                countT1, moneyT1,
                countT2, moneyT2,
                countT3, moneyT3,
                countT4, moneyT4,
                countT5, moneyT5,
                countT6, moneyT6,
                countT7, moneyT7,
                countT8, moneyT8,
                countT9, moneyT9,
                countT10, moneyT10,
                countT11, moneyT11,
                countT12, moneyT12
            ]) => res.render('home', {
                countHomNay, moneyHomNay: listDb(moneyHomNay),
                countT1, moneyT1: listDb(moneyT1),
                countT2, moneyT2: listDb(moneyT2),
                countT3, moneyT3: listDb(moneyT3),
                countT4, moneyT4: listDb(moneyT4),
                countT5, moneyT5: listDb(moneyT5),
                countT6, moneyT6: listDb(moneyT6),
                countT7, moneyT7: listDb(moneyT7),
                countT8, moneyT8: listDb(moneyT8),
                countT9, moneyT9: listDb(moneyT9),
                countT10, moneyT10: listDb(moneyT10),
                countT11, moneyT11: listDb(moneyT11),
                countT12, moneyT12: listDb(moneyT12),
            }))

            .catch(error => console.log(error))
    }
}

module.exports = new homeController;
    