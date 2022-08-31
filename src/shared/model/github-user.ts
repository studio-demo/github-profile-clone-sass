import type { GitHubOrganization } from './github-organization';

export type UserResponse = {
    user: {
        avatarUrl: string;
        bio: string | null;
        login: string;
        name: string;
        location: string;
        email: string;
        twitterUsername: string | null;
        websiteUrl: string;
        company: string;
        following: {
            totalCount: number;
        };
        followers: {
            totalCount: number;
        };
        status: {
            emoji: string | null;
            message: string | null;
        } | null;
        organizations: {
            edges: {
                node: {
                    login: string;
                    avatarUrl: string;
                };
            }[];
        };
    };
};

export const parseUserResponse = (response: UserResponse): GitHubUser => {
    return {
        avatar: response.user.avatarUrl,
        bio: response.user.bio ?? '',
        username: response.user.login,
        name: response.user.name,
        followers: response.user.followers.totalCount,
        following: response.user.following.totalCount,
        organization: response.user.company,
        location: response.user.location,
        email: response.user.email,
        twitter: response.user.twitterUsername,
        url: response.user.websiteUrl,
        organizations: response.user.organizations.edges
            .map(({ node }) => node)
            .map((organization) => ({
                avatar: organization.avatarUrl,
                login: organization.login,
            })),
    };
};

export interface GitHubUser {
    avatar?: string;
    bio: string;
    username: string;
    name: string;
    followers: number;
    following: number;
    organization: string;
    location: string;
    email: string;
    twitter: string | null;
    url: string;
    organizations: GitHubOrganization[];
}
