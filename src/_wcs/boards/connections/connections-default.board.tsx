import { createBoard } from '@wixc3/react-board';
import { Connections } from '../../../components/connections/connections';

export default createBoard({
    name: 'Connections - default',
    Board: () => <Connections count={200} />
});
