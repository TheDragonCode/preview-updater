import core from '@actions/core'
import { run } from '@probot/adapter-github-actions'
import previewUpdater from './main'

run(previewUpdater).catch(error => {
    core.setFailed(`💥 Preview Updater failed with error: ${ error.message }`)
})
