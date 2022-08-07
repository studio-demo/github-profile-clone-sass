import { expect } from 'chai';
import { Driver } from '../../../test-toolkit/driver';
import { testRenderer } from '../../../test-toolkit/test-render';
import { Footer } from './footer';

describe('Footer layout component', () => {
    const renderer = testRenderer();
    const page = new Driver();

    beforeEach(async () => {
        await renderer.render(<Footer />);
    });

    afterEach(async () => {
        await renderer.dispose();
    });

    context('Rendering', () => {
        it('should display copyright', () => {
            expect(page.text).to.contain('© 2022');
        });
    });
});
