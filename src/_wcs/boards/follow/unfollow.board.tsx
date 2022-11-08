import { createBoard } from '@wixc3/react-board';
import { ConnectButton } from '../../../components/pages/top-bar/connect-button/connect-button';

export default createBoard({
    name: 'Unfollow',
    Board: () => <ConnectButton defaultIsConnected />,
    environmentProps: {
        canvasWidth: 240,
        windowWidth: 300,
        windowHeight: 300,
    },
});
