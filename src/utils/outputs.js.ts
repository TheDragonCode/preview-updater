import { setOutput } from '@actions/core'

/**
 * @param {string} branchName
 * @param {number} pullRequestNumber
 * @param {string} pullRequestUrl
 */
const set = (branchName: string, pullRequestNumber: number, pullRequestUrl: string) => {
    setOutput('branchName', branchName)
    setOutput('pullRequestNumber', pullRequestNumber)
    setOutput('pullRequestUrl', pullRequestUrl)
}

module.exports = {
    set
}
