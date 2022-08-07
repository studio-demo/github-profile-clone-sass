export type RepositoryResponse = {
    user: {
        repositories: {
            edges: {
                node: {
                    name: string;
                    url: string;
                    description: string;
                    stargazerCount: number;
                    forkCount: number;
                    primaryLanguage: {
                        name: string;
                    };
                };
            }[];
        };
    };
};
export interface GithubRepository {
    name: string;
    url: string;
    description: string;
    /** Number of stars on repository */
    stars: number;
    /** Number of forks of repository */
    forks: number;
    /** Main language of repository */
    language: string;
}

export const parseRepositoriesResponse = (response: RepositoryResponse): GithubRepository[] => {
    return response.user.repositories.edges
        .map(({ node }) => node)
        .map((repo) => ({
            name: repo.name,
            url: repo.url,
            description: repo.description,
            stars: repo.stargazerCount,
            forks: repo.forkCount,
            language: repo.primaryLanguage?.name,
        }))
        .sort((a, b) => b.stars - a.stars);
};
