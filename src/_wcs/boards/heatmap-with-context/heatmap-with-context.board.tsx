import { createBoard } from '@wixc3/react-board';
import { HeatmapWithContext } from '../../../components/pages/overview/contributions/heatmap/heatmapWithContext';
import { HeatmapContext } from '../../../components/pages/overview/contributions/heatmap/heatmapContextProvider';
import { data } from '../../../test-toolkit/mocks/mock-heatmap.data';

export default createBoard({
    name: 'HeatmapWithContext',
    Board: () => (
        <HeatmapContext.Provider value={data}>
            <HeatmapWithContext />
        </HeatmapContext.Provider>
    ),
});
