const core = require('@actions/core')
const { run } = require('@probot/adapter-github-actions')
const previewUpdater = require('./index')

run(previewUpdater).catch(error => {
    core.setFailed(`💥 Preview Updater failed with error: ${ error.message }`)
})
