import { createBoard } from '@wixc3/react-board';
import { TopBar } from '../../../components/pages/top-bar/top-bar';
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
    techs: {
    }
};

export default createBoard({
    name: 'Top Bar - No Techs',
    Board: () => <TopBar user={JohnDoe} />,
    environmentProps: {
        windowHeight: 304,
        windowWidth: 1150,
    },
});
