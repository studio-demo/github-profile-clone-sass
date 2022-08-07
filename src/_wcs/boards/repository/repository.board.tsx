import { createBoard } from '@wixc3/react-board';
import { Repository } from '../../../components/pages/overview/popular-repositories/repository/repository';
import type { GithubRepository } from '../../../shared/model/github-repository';

const repository: GithubRepository = {
    description: 'mocked repo',
    forks: 13,
    stars: 42,
    language: '',
    name: 'mocked-repo',
    url: '#mocked-repo-url',
};

export default createBoard({
    name: 'Repository',
    Board: () => <Repository repository={repository} />,
    environmentProps: {
        canvasWidth: 400
    }
});
