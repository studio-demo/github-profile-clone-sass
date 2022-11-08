import { createBoard } from '@wixc3/react-board';
import { Heatmap } from '../../../components/pages/overview/contributions/heatmap/heatmap';
import { data } from '../../../test-toolkit/mocks/mock-heatmap.data';

export default createBoard({
    name: 'Heatmap',
    Board: () => <Heatmap weeks={data} />,
    environmentProps: {
        windowHeight: 640,
    },
});
