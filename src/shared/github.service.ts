import { graphql } from '@octokit/graphql';
import { sleep } from 'promise-assist';
import { response_contributions } from '../test-toolkit/mocks/github-contributions';
import { response_repositories } from '../test-toolkit/mocks/github-repositories';
import { response_user } from '../test-toolkit/mocks/github-user';
import { DataFetcher } from './data-fetcher';
import { ContributionResponse, parseContributionsResponse } from './model/github-contributions';
import type { RepositoryResponse } from './model/github-repository';
import { parseRepositoriesResponse } from './model/github-repository';
import { parseUserResponse, UserResponse } from './model/github-user';

export class GithubService {
    token = '';
    username = '';

    setToken(token: string) {
        this.token = token;
    }

    setUsername(username: string) {
        this.username = username;
    }

    public getContributions() {
        return new DataFetcher(async () => {
            if (this.token && this.username) {
                const response: ContributionResponse = await graphql(
                    `
                        {
                            user(login: "${this.username}") {
                                contributionsCollection {
                                    contributionCalendar {
                                        totalContributions
                                        weeks {
                                            contributionDays {
                                                contributionCount
                                                date
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        `,
                    {
                        headers: {
                            authorization: `token ${this.token}`,
                        },
                    }
                );
                return parseContributionsResponse(response);
            } else {
                await sleep(100);

                return parseContributionsResponse(response_contributions);
            }
        });
    }

    public getUserInfo() {
        return new DataFetcher(async () => {
            if (this.token && this.username) {
                const response: UserResponse = await graphql(
                    `
                        {
                            user(login: "${this.username}") {
                                avatarUrl
                                bio
                                login
                                name
                                location
                                email
                                twitterUsername
                                websiteUrl
                                company
                                following {
                                    totalCount
                                }
                                followers {
                                    totalCount
                                }
                                status {
                                    emoji
                                    message
                                }
                                organizations(last: 100) {
                                    edges {
                                        node {
                                            login
                                            avatarUrl
                                        }
                                    }
                                }
                            }
                        }
                        `,
                    {
                        headers: {
                            authorization: `token ${this.token}`,
                        },
                    }
                );

                return parseUserResponse(response);
            } else {
                await sleep(100);

                return parseUserResponse(response_user);
            }
        });
    }

    public getUserStats() {
        return new DataFetcher(async () => {
            if (this.token && this.username) {
                const response: {
                    user: {
                        repositories: { totalCount: number };
                        starredRepositories: { totalCount: number };
                    };
                } = await graphql(
                    `
                        {
                            user(login: "${this.username}") {
                                starredRepositories {
                                    totalCount
                                }
                                repositories(ownerAffiliations: OWNER) {
                                    totalCount
                                }
                            }
                        }
                        `,
                    {
                        headers: {
                            authorization: `token ${this.token}`,
                        },
                    }
                );

                return {
                    reposCount: response.user.repositories.totalCount ?? 0,
                    starsCount: response.user.starredRepositories.totalCount ?? 0,
                };
            } else {
                await sleep(100);

                return {
                    reposCount: 35,
                    starsCount: 14,
                };
            }
        });
    }

    public getUserRepos() {
        return new DataFetcher(async () => {
            if (this.token && this.username) {
                const response: RepositoryResponse = await graphql(
                    `
                        {
                            user(login: "${this.username}") {
                                repositories(
                                    orderBy: {field: STARGAZERS, direction: ASC},
                                    last: 6
                                    ownerAffiliations: OWNER
                                ) {
                                    edges {
                                        node {
                                            name
                                            url
                                            description
                                            stargazerCount
                                            forkCount
                                            primaryLanguage {
                                                name
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        `,
                    {
                        headers: {
                            authorization: `token ${this.token}`,
                        },
                    }
                );

                return parseRepositoriesResponse(response);
            } else {
                await sleep(100);

                return parseRepositoriesResponse(response_repositories);
            }
        });
    }
}
