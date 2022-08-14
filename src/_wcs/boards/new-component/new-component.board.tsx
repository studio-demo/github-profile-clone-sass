import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../new-component/new-component';

export default createBoard({
    name: 'NewComponent',
    Board: () => <NewComponent />,
});
