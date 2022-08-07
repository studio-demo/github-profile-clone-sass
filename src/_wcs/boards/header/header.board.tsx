import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/layout/header/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header></Header>,
    environmentProps: {
        canvasWidth: 1280,
        windowWidth: 1440,
        windowHeight: 400,
    },
});
