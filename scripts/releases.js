const { Octokit } = require('@octokit/rest')

if (!process.env.GITHUB_TOKEN) {
  console.log('GITHUB_TOKEN recommended to be set in ENV')
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})
const owner = 'jmartin4563'
const repo = 'conventional-commit-poc'
const SUPPORT_STATEMENT = `
### Support statement

* New Relic recommends that you upgrade the agent regularly to ensure that you're getting the latest features and performance benefits. Additionally, older releases will no longer be supported when they reach [end-of-life](https://docs.newrelic.com/docs/using-new-relic/cross-product-functions/install-configure/notification-changes-new-relic-saas-features-distributed-software).`

async function updateRelease () {
  const response = await octokit.repos.getLatestRelease({ owner, repo })
  console.log(response)
  const { id, body } = response.data

  console.log(`Appending disclaimer and updating release #${id}`)

  await octokit.repos.updateRelease({ owner, repo, release_id: id, body: `${body}\n${SUPPORT_STATEMENT}` })
}

updateRelease()
