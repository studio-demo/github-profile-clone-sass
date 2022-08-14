import { createBoard } from '@wixc3/react-board';
import { Link } from '../../../components/shared/link/link';

export default createBoard({
    name: 'Link - muted',
    Board: () => (
        <Link url={'#'} mute>
            test
        </Link>
    ),
});
