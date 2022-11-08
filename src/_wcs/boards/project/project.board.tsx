import { createBoard } from '@wixc3/react-board';
import { Project } from '../../../components/pages/overview/projects/project/project';

export default createBoard({
    name: 'Project',
    Board: () => <Project description="Some project with mocked description" name="mocked-project/name" />,
    environmentProps: {
        canvasWidth: 400,
    },
});
