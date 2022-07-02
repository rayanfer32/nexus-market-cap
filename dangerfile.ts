import { danger, message, warn } from 'danger'
import {
  checkDescription,
  checkPRSize,
  checkTitle,
} from 'danger-plugin-pull-request'

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

checkDescription(1000, message)

checkTitle(
  /^\[[A-Za-z]+-\d+\]/,
  'Please provide a title in the format [type: pull-request-title]. Example: fix:<title of PR>',
  warn
)

checkPRSize(100, message)
