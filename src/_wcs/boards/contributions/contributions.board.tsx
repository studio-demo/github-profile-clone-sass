import { createBoard } from '@wixc3/react-board';
import { AppContext, IAppContext } from '../../../components/app.context';
import { Contributions } from '../../../components/pages/overview/contributions/contributions';
import { parseContributionsResponse } from '../../../shared/model/github-contributions';
import { response_contributions } from '../../../test-toolkit/mocks/github-contributions';

const userContributions = { data: parseContributionsResponse(response_contributions) };
const appContextValue = { userContributions } as IAppContext;

export default createBoard({
    name: 'Contributions',
    Board: () => {
        return (
            <AppContext.Provider value={appContextValue}>
                <Contributions />
            </AppContext.Provider>
        );
    },
});
