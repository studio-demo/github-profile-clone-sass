import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../../components/pages/sidebar/sidebar';
import type { ApiUser } from '../../../shared/model/api-user';

const JohnDoe: ApiUser = {
    avatar: 'https://i.pravatar.cc/64?u=john-doe',
    bio: '',
    username: 'john-doe',
    location: 'USA',
    name: 'John Doe',
    email: 'john@doe.com',
    followers: 19,
    following: 0,
    twitter: '',
    url: '',
    organization: 'Wix.com',
    organizations: [
        {
            avatar: 'https://i.pravatar.cc/64?u=a',
            login: 'a',
        },
        {
            avatar: 'https://i.pravatar.cc/64?u=b',
            login: 'b',
        },
        {
            avatar: 'https://i.pravatar.cc/64?u=c',
            login: 'c',
        },
        {
            avatar: 'https://i.pravatar.cc/64?u=d',
            login: 'd',
        },
    ],
};

export default createBoard({
    name: 'Sidebar - With Organizations',
    Board: () => <Sidebar user={JohnDoe} />,
    environmentProps: {
        windowHeight: 901,
        windowWidth: 500,
    },
});
