import { expect } from 'chai';
import { DriverHeatmap } from '../../../../../test-toolkit/driver-heatmap';
import { data } from '../../../../../test-toolkit/mocks/heatmap.data';
import { testRenderer } from '../../../../../test-toolkit/test-render';
import { Heatmap } from './heatmap';

describe('Heatmap component', () => {
    const renderer = testRenderer();
    let heatmap: DriverHeatmap;

    beforeEach(async () => {
        await renderer.render(<Heatmap weeks={data} />);
        heatmap = new DriverHeatmap();
    });

    afterEach(async () => {
        await renderer.dispose();
    });

    context('Rendering', () => {
        it('render all data correctly', () => {
            const contributions = data.map((weeks) => weeks.map((day) => day.contributionCount));

            expect(heatmap.getData()).to.eql(contributions);
        });
    });
});
