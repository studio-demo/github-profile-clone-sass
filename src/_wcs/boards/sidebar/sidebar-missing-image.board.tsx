import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../../components/pages/sidebar/sidebar';
import type { ApiUser } from '../../../shared/model/api-user';

const JohnDoe: ApiUser = {
    bio: '',
    username: 'john-doe',
    location: 'USA',
    name: 'John Doe',
    email: 'john@doe.com',
    followers: 19,
    following: 0,
    twitter: '',
    url: '',
    organization: '',
    organizations: [],
};

export default createBoard({
    name: 'Sidebar - Missing Image',
    Board: () => <Sidebar user={JohnDoe} />,
    environmentProps: {
        windowHeight: 793,
        windowWidth: 500,
    },
});
