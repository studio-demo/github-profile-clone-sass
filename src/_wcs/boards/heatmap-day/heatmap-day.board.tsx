import { createBoard } from '@wixc3/react-board';
import { HeatmapDay } from '../../../components/pages/overview/contributions/heatmap/heatmap-day/heatmap-day';

export default createBoard({
    name: 'HeatmapDay',
    Board: () => <HeatmapDay></HeatmapDay>,
    environmentProps: {
        windowWidth: 300,
        windowHeight: 413,
        canvasMargin: {},
        canvasPadding: {
            top: 24,
            right: 24,
            bottom: 24,
            left: 24,
        },
    },
});
