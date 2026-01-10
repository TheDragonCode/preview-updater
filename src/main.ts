import { cwd } from './utils/filesystem'
import { context } from '@actions/github'
import { parse } from './utils/inputs'
import { info } from '@actions/core'

const previewUpdater = async () => {
    // Inputs

    info(`Working directory: ${ cwd }`)

    const { owner, repo: repoName } = context.repo

    const {
        token,
        path,
        branchName,
        commitTitle,
        commitBody,
        commitAuthorName,
        commitAuthorEmail,
        pullRequestTitle,
        pullRequestBody,
        assignees,
        labels
    } = parse()

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
