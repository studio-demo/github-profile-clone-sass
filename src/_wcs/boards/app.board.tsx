import { createBoard } from '@wixc3/react-board';
import { App } from '../../components/app';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1300,
        windowHeight: 1300,
        canvasMargin: {
            left: 0,
            right: 0
        }
    },
});
