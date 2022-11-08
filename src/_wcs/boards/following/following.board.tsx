import { createBoard } from '@wixc3/react-board';
import { ConnectionsStatus } from '../../../components/pages/top-bar/connections-status/connections-status';

export default createBoard({
    name: 'ConnectionsStatus',
    Board: () => <ConnectionsStatus connections={'8k'} year={1984} />,
});
