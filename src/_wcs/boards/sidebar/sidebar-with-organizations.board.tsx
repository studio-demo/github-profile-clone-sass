import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../../components/pages/sidebar/sidebar';
import type { GitHubUser } from '../../../shared/model/github-user';

const JohnDoe: GitHubUser = {
    avatar: 'https://avatars.githubusercontent.com/u/1254848?u=dd9acf92f36f11079f53a3e15ff8c3421cc10f97&v=4',
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
    organizations: [
        {
            avatar: 'https://avatars.githubusercontent.com/u/98403515?s=64&v=4',
            login: 'a',
        },
        {
            avatar: 'https://avatars.githubusercontent.com/u/98403600?s=64&v=4',
            login: 'b',
        },
        {
            avatar: 'https://avatars.githubusercontent.com/u/108737927?s=64&v=4',
            login: 'c',
        },
        {
            avatar: 'https://avatars.githubusercontent.com/u/111692676?s=64&v=4',
            login: 'd',
        },
    ],
};

export default createBoard({
    name: 'Sidebar - With Organizations',
    Board: () => <Sidebar user={JohnDoe} />,
    environmentProps: {
        windowHeight: 1000,
        windowWidth: 500,
    },
});
