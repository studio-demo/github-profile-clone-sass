import { createBoard } from '@wixc3/react-board';
import { Repository } from '../../../components/pages/overview/popular-repositories/repository/repository';

export default createBoard({
    name: 'Repository',
    Board: () => (
        <Repository
            description="mocked repo"
            forks={13}
            language="javascript"
            name="mocked-repo"
            stars={42}
            url="#mocked-repo-url"
        />
    ),
    environmentProps: {
        canvasWidth: 400,
    },
});
