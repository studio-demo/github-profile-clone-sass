import { UserResponse } from '../../shared/model/api-user';
import { pythonIcon } from '../../components/pages/overview/techs/icons/python';
import { cSharpIcon } from '../../components/pages/overview/techs/icons/CSharp';
import { htmlIcon } from '../../components/pages/overview/techs/icons/html';
import { reactIcon } from '../../components/pages/overview/techs/icons/react';
import { nodeIcon } from '../../components/pages/overview/techs/icons/node';
import { jsIcon } from '../../components/pages/overview/techs/icons/js';

export const response_user: UserResponse = {
    user: {
        avatarUrl: 'https://freesvg.org/img/myAvatar.png',
        bio: null,
        login: 'AnnieW',
        name: 'Annie Williams',
        location: 'Boston MA USA',
        email: 'anniew@codux.com',
        twitterUsername: null,
        websiteUrl: 'http://codux.com/anniewilliams',
        techs: { technologies: ['react', 'html', 'node', 'python', 'js', 'csharp'] },
        company: 'Codux',
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
