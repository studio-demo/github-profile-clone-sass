import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../../components/pages/sidebar/sidebar';
import type { GitHubUser } from '../../../shared/model/github-user';

const JohnDoe: GitHubUser = {
    avatar: 'https://avatars.githubusercontent.com/u/1254848?u=dd9acf92f36f11079f53a3e15ff8c3421cc10f97&v=4',
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
        windowWidth: 300,
    },
});
