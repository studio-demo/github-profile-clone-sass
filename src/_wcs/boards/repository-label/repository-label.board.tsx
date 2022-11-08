import { createBoard } from '@wixc3/react-board';
import { ProjectLabel } from 'src/components/pages/overview/popular-repositories/repository/project-label/project-label';

export default createBoard({
    name: 'RepositoryLabel - Public',
    Board: () => <ProjectLabel label="Public" />,
    environmentProps: {
        canvasWidth: 63,
        windowHeight: 300,
        windowWidth: 300,
    },
});
