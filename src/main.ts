import { cwd, readConfig } from './utils/filesystem'
import { context } from '@actions/github'
import { parse } from './utils/inputs'
import { info } from '@actions/core'
import { Config } from './types/config'

const previewUpdater = async () => {
    // Welcome
    info(`Working directory: ${ cwd }`)

    // Inputs
    const {
        token,
        configPath
    } = parse()

    // Load Config
    const config = readConfig(<Config>{
        repository: {
            owner: context.repo.owner,
            repo: context.repo.repo,
            token: token
        }
    }, configPath)

    // Authenticate
    const repo = new Repository(owner, repoName, token)
    await repo.authenticate(commitAuthorName, commitAuthorEmail)

    // Variables
    let pullRequestNumber: number = null
    let pullRequestUrl: string = null

    // Checkout branch
    const branchExists = await repo.branchExists(branchName)
    info(`Checkout ${ branchExists ? 'existing' : 'new' } branch named "${ branchName }"`)
    await repo.checkoutBranch(branchName, ! branchExists)

    // TODO: Stop at https://github.com/FantasticFiasco/action-update-license-year/blob/main/src/main.js#L76
}

export default previewUpdater
