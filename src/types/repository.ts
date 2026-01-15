export interface Author {
    name: string;
    email: string;
}

export interface Commit {
    branch: string;
    title: string;
    body?: string;
    author: Author;
}

export interface PullRequest {
    title: string;
    body?: string;
    assignees: string[];
    labels: string[];
}

export interface Repository {
    owner?: string;
    repo?: string;

    commit: Commit;
    pullRequest: PullRequest;
}
