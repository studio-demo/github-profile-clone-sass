import { UserResponse } from '../../shared/model/github-user';

export const response_user: UserResponse = {
    user: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/1254848?u=dd9acf92f36f11079f53a3e15ff8c3421cc10f97&v=4',
        bio: null,
        login: 'timbl',
        name: 'Tim Berners-Lee',
        location: 'Boston MA USA',
        email: 'timbl@w3.org',
        twitterUsername: null,
        websiteUrl: 'http://www.w3.org/People/Berners-Lee',
        company: 'MIT',
        following: {
            totalCount: 68,
        },
        followers: {
            totalCount: 4319,
        },
        status: null,
        organizations: {
            edges: [
                {
                    node: {
                        login: 'linkeddata',
                        avatarUrl: 'https://avatars.githubusercontent.com/u/1261005?v=4',
                    },
                },
                {
                    node: {
                        login: 'w3ctag',
                        avatarUrl: 'https://avatars.githubusercontent.com/u/3874462?v=4',
                    },
                },
            ],
        },
    },
};
