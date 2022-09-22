import { expect } from 'chai';
import { getUsernameFromQueryParams } from './utils';

describe('Utilities:', () => {
    context('getUsernameFromURL', () => {
        it('should return nullish value if provided with non-string value', () => {
            ['', null, undefined, 0, false, true, NaN, [], {}, () => undefined].forEach((value) => {
                expect(getUsernameFromQueryParams(value as string) ?? 'non-nullish').to.equal('non-nullish');
            });
        });

        it('should find username in correctly formatted string', () => {
            expect(getUsernameFromQueryParams('?username=USERNAME')).to.equal('USERNAME');
            expect(getUsernameFromQueryParams('?email=EMAIL&username=USERNAME')).to.equal('USERNAME');
        });

        it('should not find username when username query param is missing, and return nullish value', () => {
            expect(getUsernameFromQueryParams('?param=username') ?? 'non-nullish').to.equal('non-nullish');

            expect(getUsernameFromQueryParams('?param1=PARAM&param=username') ?? 'non-nullish').to.equal('non-nullish');

            expect(getUsernameFromQueryParams('?usernames=emails') ?? 'non-nullish').to.equal('non-nullish');
        });
    });
});
