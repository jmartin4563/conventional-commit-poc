const { Octokit } = require('@octokit/rest')

if (!process.env.GITHUB_TOKEN) {
  console.log('GITHUB_TOKEN recommended to be set in ENV')
}

const { program } = require('commander')
program.requiredOption('--uploadUrl <url>', 'upload_url value from release-please outputs ')
program.parse()
const { uploadUrl } = program.opts()

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})
const owner = 'jmartin4563'
const repo = 'jmartin4563/conventional-commit-poc'
const SUPPORT_STATEMENT = `
### Support statement:

* New Relic recommends that you upgrade the agent regularly to ensure that you're getting the latest features and performance benefits. Additionally, older releases will no longer be supported when they reach [end-of-life](https://docs.newrelic.com/docs/using-new-relic/cross-product-functions/install-configure/notification-changes-new-relic-saas-features-distributed-software).`

async function updateRelease () {
  const releaseId = uploadUrl.replace('/assets', '').split('/').pop(-1)
  console.log(`Getting release #${releaseId}`)

  const { body } = await octokit.repos.getRelease({ owner, repo, release_id: releaseId })
  console.log(body)

  console.log(`Appending disclaimer and updating release #${releaseId}`)

  await octokit.repos.updateRelease({ owner, repo, body: `${body}\n${SUPPORT_STATEMENT}` })
}

module.exports = {
  updateRelease
}
