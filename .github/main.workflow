workflow "Verify labels" {
  on = "pull_request"
  resolves = "Enforce PR label"
}

action "Enforce PR label" {
  uses = "yogevbd/enforce-label-action@1.0.1"
  secrets = ["GITHUB_TOKEN"]
  env = {
    VALID_LABELS = "bug,enhancement,feature"
  }
}