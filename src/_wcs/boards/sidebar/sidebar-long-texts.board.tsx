import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../../components/pages/sidebar/sidebar';
import type { ApiUser } from '../../../shared/model/api-user';

const JohnDoe: ApiUser = {
    avatar: 'https://i.pravatar.cc/64?u=john-doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    username: 'john-doe',
    location: 'USA',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    email: 'john@doe.com',
    followers: 19,
    following: 20,
    twitter: '',
    url: '',
    organization: '',
    organizations: [],
};

export default createBoard({
    name: 'Sidebar - Long Texts',
    Board: () => <Sidebar user={JohnDoe} />,
    environmentProps: {
        windowHeight: 1126,
        windowWidth: 798,
        canvasWidth: 302,
    },
});
