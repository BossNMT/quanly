const authDB = require('../models/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
class loginController {
    // [GET] /auth/login
    login(req, res, next) {
        res.render('auth/login')
    }

    // [GET] /auth/dangky
    dangky(req, res, next) {
        res.render('auth/dangky')
    }

    // [POST] /auth/logout
    logout(req, res, next) {
        res.redirect('/auth/login')
    }



    // [POST] /auth/api/dangky
    async dangkySubmit(req, res, next) {
        try {
            const auth = await authDB.create(req.body);
            const token = jwt.sign({ userId: auth._id }, process.env.APP_SECRET_TOKEN)
            res.status(200).json({
                status: 'Dang Ky Thanh Cong',
                data: {
                    token: token,
                    auth: auth,
                },
            })
        } catch (error) {
            res.json(error)
        }
    }

    // [POST] /auth/api/login
    async loginSubmit(req, res, next) {
        try {
            const auth = await authDB.findOne({ user: req.body.user });
            if (!auth) {
                return res.redirect('back')
            }
            if (bcrypt.compareSync(req.body.password, auth.password)) {
                const token = jwt.sign({ userId: auth._id }, process.env.APP_SECRET_TOKEN, {
                    expiresIn: "2d",
                })
                res.render('home', {
                    token: token
                })

            } else {
                return res.redirect('back')
            }
        } catch (error) {
            res.json(error)
        }
    }

}

module.exports = new loginController;