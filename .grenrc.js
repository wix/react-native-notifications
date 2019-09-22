module.exports = {
  template: {
    commit: ({message, url, author, name}) => `- [${message}](${url}) - ${author ? `@${author}` : name}`,
    issue: "- {{name}} [{{text}}]({{url}})",
    label: "[**{{label}}**]",
    noLabel: "closed",
    group: "\n#### {{heading}}\n",
    changelogTitle: "# Changelog\n\n",
    release: "## {{release}} ({{date}})\n{{body}}",
    releaseSeparator: "\n---\n\n"
  },
  groupBy: {
    "Enhancements:": ["enhancement", "internal"],
    "Bug Fixes:": ["bug"],
    "Features": ["feature"]
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