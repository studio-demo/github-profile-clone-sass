import { createBoard } from '@wixc3/react-board';
import { RepositoryLabel } from '../../../components/pages/overview/popular-repositories/repository/repository-label/repository-label';

export default createBoard({
    name: 'RepositoryLabel',
    Board: () => <RepositoryLabel />
});
