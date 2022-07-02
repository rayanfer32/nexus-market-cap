import { danger, message, warn } from 'danger'

// Setup
const pr = danger.github.pr
const modified_files = danger.git.modified_files

// Ensure lockfile is up to date
const packageChanged = modified_files.includes('package.json')
const lockfileChanged = modified_files.includes('yarn.lock')

if (packageChanged && !lockfileChanged) {
  const message = 'Changes were made to package.json, but not to yarn.lock.'
  const fix = 'Run `yarn install` to update the lockfile.'
  warn(`${message} - <i>${fix}</i>`)
}

// Always ensure we assign someone.
if (pr.assignee === null) {
  message(
    'Please assign someone to merge this PR, and optionally include people who should review.'
  )
}

// If it's not a branch PR
if (pr.base.repo.full_name !== pr.head.repo.full_name) {
  message(
    'This pull request(PR) comes from a fork. This has to be manually checked and merged.'
  )
}

const modifiedMD = modified_files.join(' </li><li> ')
if (modified_files.length > 0) {
  message('Changed Files in this PR: \n - <ol><li>' + modifiedMD + '</li></ol>')
}
if (modified_files.length > 20) {
  warn(
    'This PR has a lot of changes. Please make sure you have a good reason to do this.'
  )
}
