import { createBoard } from '@wixc3/react-board';
import { App } from '../../components/app';
import { parseContributionsResponse } from '../../shared/model/github-contributions';
import { parseRepositoriesResponse } from '../../shared/model/github-repository';
import { parseUserResponse } from '../../shared/model/github-user';
import { response_contributions } from '../../test-toolkit/mocks/github-contributions';
import { response_repositories } from '../../test-toolkit/mocks/github-repositories';
import { response_user } from '../../test-toolkit/mocks/github-user';

const userContributions = parseContributionsResponse(response_contributions);
const userInfo = parseUserResponse(response_user);
const userRepos = parseRepositoriesResponse(response_repositories);

export default createBoard({
    name: 'App',
    Board: () => (
        <App
            userInfo={userInfo}
            userContributions={userContributions}
            userRepos={userRepos}
            navigationStats={{ reposCount: 35, starsCount: 14 }}
        />
    ),
    environmentProps: {
        windowWidth: 1300,
        windowHeight: 1300,
        canvasMargin: {
            left: 0,
            right: 0,
        },
    },
});
