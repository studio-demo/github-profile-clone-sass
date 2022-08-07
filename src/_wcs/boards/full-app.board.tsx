import { createBoard } from '@wixc3/react-board';
import { App } from '../../components/app';

export default createBoard({
    name: 'Full App',
    // You can set token and username props for app to work on board; otherwise it'd use mocked data.
    // Token could be generated here: https://github.com/settings/tokens/new
    // `Board: () => <App token="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" username="plisovyi"></App>,`
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1280,
        windowWidth: 1440,
        windowHeight: 800,
    },
});
