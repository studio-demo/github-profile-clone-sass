import { createBoard } from '@wixc3/react-board';
import { TopBar } from '../../../components/pages/top-bar/top-bar';
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
    name: 'Top Bar',
    Board: () => <TopBar user={JohnDoe} />,
    environmentProps: {
        windowHeight: 452,
        windowWidth: 1352,
    },
});
