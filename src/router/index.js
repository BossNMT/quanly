const homeRouter = require('./home')
const authRouter = require('./auth')
const meRouter = require('./me');
const sendRouter = require('./send');

function router(app) {
    app.use('/send', sendRouter)
    app.use('/me', meRouter);
    app.use('/auth', authRouter);
    app.use('/', homeRouter);
}

module.exports = router