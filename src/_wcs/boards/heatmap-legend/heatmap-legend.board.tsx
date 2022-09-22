import { createBoard } from '@wixc3/react-board';
import { HeatmapLegend } from '../../../components/pages/overview/contributions/heatmap/heatmap-legend/heatmap-legend';

export default createBoard({
    name: 'HeatmapLegend',
    Board: () => <HeatmapLegend />,
});
