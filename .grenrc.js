module.exports = {
  template: {
    commit: ({message, url, author, name}) => `- [${message}](${url}) - ${author ? `@${author}` : name}`,
    issue: "- {{name}} [{{text}}]({{url}}) by [{{user_login}}]({{user_url}})",
    label: "[**{{label}}**]",
    noLabel: "closed",
    group: "\n#### {{heading}}\n",
    changelogTitle: "# Changelog\n\n",
    release: "## {{release}} ({{date}})\n{{body}}",
    releaseSeparator: "\n---\n\n"
  },
  groupBy: {
    "Enhancements:": ["type: accepted/enhancement", "Infrastructure"],
    "Bug Fixes:": ["type: accepted/bug"]
  },
  ignoreIssuesWith: [
    "skip-changelog"
  ],
  ignoreTagsWith: [
    "snapshot"
  ],
  dataSource: "prs",
  changelogFilename: "CHANGELOG.gren.md",
  tags: "all",
  override: true,
  generate: true
}
