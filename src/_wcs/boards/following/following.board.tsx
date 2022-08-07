import { createBoard } from '@wixc3/react-board';
import { Following } from '../../../components/pages/sidebar/following/following';

export default createBoard({
    name: 'Following',
    Board: () => <Following followers={42} following={13} />,
});
