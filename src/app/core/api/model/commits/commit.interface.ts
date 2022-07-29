export interface Commit {
  sha: string,
  node_id: string,
  commit: {
    author: {
      name: string,
      email: string,
      date: Date
    },
    committer: {
      name: string,
      email: string,
      date: Date
    },
    message: string,
    tree: {
      sha: string,
      url: string
    },
    url: string,
    comment_count: 0,
    verification: {
      verified: boolean,
      reason: string,
      signature: unknown,
      payload: unknown
    }
  },
  url: string,
  html_url: string,
  comments_url: string,
  author: {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
  },
  committer: {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
  },
  parents: {
    sha: string,
    url: string,
    html_url: string
  }[]
}
