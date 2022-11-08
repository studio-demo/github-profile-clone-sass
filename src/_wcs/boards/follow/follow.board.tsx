import { createBoard } from '@wixc3/react-board';
import { ConnectButton } from '../../../components/pages/top-bar/connect-button/connect-button';

export default createBoard({
    name: 'Follow',
    Board: () => <ConnectButton />,
    environmentProps: {
        canvasWidth: 240,
        windowWidth: 300,
        windowHeight: 300,
    },
});
