const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.cookies.token
    if(!token) {
        return res.redirect('/auth/login')
    }

    try {
        const decoded = jwt.verify(token, 'ThuanDzai')
        req.userId = decoded.userId
        next()
    }catch (error) {
        return res.redirect('/auth/login')
    }
    

}