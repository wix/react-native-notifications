workflow "Verify labels" {
  on = "pull_request"
  resolves = "Verify Labels"
}

action "Verify Labels" {
  uses = "yogevbd/enforce-label-action@1.0.1"
  secrets = ["GITHUB_TOKEN"]
  env = {
    VALID_LABELS = "bug,enhancement,feature"
  }
}