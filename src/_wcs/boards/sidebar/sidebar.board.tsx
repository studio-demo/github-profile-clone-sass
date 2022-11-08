import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../../components/pages/sidebar/sidebar';
import type { ApiUser } from '../../../shared/model/api-user';

const JohnDoe: ApiUser = {
    avatar: 'https://i.pravatar.cc/64?u=john-doe',
    bio: 'Some bio information',
    username: 'john-doe',
    location: 'USA',
    name: 'John Doe',
    email: 'john@doe.com',
    followers: 19,
    following: 20,
    twitter: '',
    url: '',
    organization: '',
    organizations: [],
};

export default createBoard({
    name: 'Sidebar',
    Board: () => <Sidebar user={JohnDoe} />,
    environmentProps: {
        windowHeight: 997,
        windowWidth: 426,
    },
});
