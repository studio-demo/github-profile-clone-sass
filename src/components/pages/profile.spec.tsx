import { expect } from 'chai';
import type { ApiUser } from '../../shared/model/api-user';
import { Driver } from '../../test-toolkit/driver';
import { testRenderer } from '../../test-toolkit/test-render';
import { Profile } from './profile';

describe(`Profile page component:`, () => {
    const renderer = testRenderer();
    const page = new Driver();

    const JohnDoe = {
        name: 'John Doe',
    } as ApiUser;

    afterEach(async () => {
        await renderer.dispose();
    });

    it(`renders provided user's name`, async () => {
        await renderer.render(<Profile user={JohnDoe} />);

        expect(page.text).to.contain('John Doe');
    });
});
