import { createBoard } from '@wixc3/react-board';
import { Follow } from '../../../components/pages/sidebar/follow/follow';

export default createBoard({
    name: 'Unfollow',
    Board: () => <Follow defaultIsFollowing />,
    environmentProps: {
        canvasWidth: 240,
        windowWidth: 300,
        windowHeight: 300,
    },
});
