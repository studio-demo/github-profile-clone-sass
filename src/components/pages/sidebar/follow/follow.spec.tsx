import { expect } from 'chai';
import { waitFor } from 'promise-assist';
import { Driver } from '../../../../test-toolkit/driver';
import { testRenderer } from '../../../../test-toolkit/test-render';
import { Follow } from './follow';

describe('Follow component', () => {
    const renderer = testRenderer();
    let component = new Driver();

    beforeEach(async () => {
        const container = await renderer.render(<Follow />);
        component = new Driver(container);
    });

    afterEach(async () => {
        await renderer.dispose();
    });

    it('should display a button for "Follow" by default', () => {
        const button = component.select('button');
        expect(button).to.exist;
        expect(button.text).to.equal('Follow');
    });

    it('click on button should trigger change of button to "Unfollow"', async () => {
        const button = component.select('button');
        button.click();

        await waitFor(() => expect(button.text).to.equal('Unfollow'));
    });
});
