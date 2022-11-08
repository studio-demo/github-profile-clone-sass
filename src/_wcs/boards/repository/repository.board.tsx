import { createBoard } from '@wixc3/react-board';
import { Project } from 'src/components/pages/overview/popular-repositories/repository/project';

export default createBoard({
    name: 'Repository',
    Board: () => (
        <Project
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
