const { registerChangelogNotes, getChangelogTypes } = require('release-please/build/src/factories/changelog-notes-factory')
const { DefaultChangelogNotes } = require('release-please/build/src/changelog-notes/default')

class NewRelicNotes extends DefaultChangelogNotes {}

registerChangelogNotes('newrelic', (options) => new NewRelicNotes(options))
console.log(getChangelogTypes())
