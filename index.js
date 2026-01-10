const { runnerIsActions } = require('./lib/detectors')

module.exports = (app, { getRouter }) => {
    if (! runnerIsActions() && typeof getRouter === 'function') {
        getRouter().get('healthz', (request, response) => {
            response.status(200).json({ status: 'pass' })
        })
    }
}
