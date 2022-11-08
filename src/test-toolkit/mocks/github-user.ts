import { UserResponse } from '../../shared/model/api-user';

export const response_user: UserResponse = {
    user: {
        avatarUrl: 'https://i.pravatar.cc/150?img=pavlo',
        bio: null,
        login: 'plisovyi',
        name: 'Pavlo',
        location: 'Tel Aviv IL',
        email: 'pavlol@wix.com',
        twitterUsername: null,
        websiteUrl: 'http://wix.com',
        company: 'Wix',
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
                        login: 'wix',
                        avatarUrl: 'https://i.pravatar.cc/150?img=wix',
                    },
                },
            ],
        },
    },
};
