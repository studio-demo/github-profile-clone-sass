import React from "react";
import { GithubService } from "../shared/github.service";
import type { Fetcher } from "../shared/hooks/use-fetcher";
import type { GitHubContributions } from "../shared/model/github-contributions";
import type { GithubRepository } from "../shared/model/github-repository";
import type { GitHubUser } from "../shared/model/github-user";

export interface IAppContext {
  githubService: GithubService;
  userInfo?: Fetcher<GitHubUser | null>;
  userRepos?: Fetcher<GithubRepository[]>;
  navigationStats?: Fetcher<{
    reposCount: number;
    starsCount: number;
  }>;
  userContributions?: Fetcher<GitHubContributions>;
}

export const AppContext = React.createContext<IAppContext>({
  githubService: new GithubService(),
});
