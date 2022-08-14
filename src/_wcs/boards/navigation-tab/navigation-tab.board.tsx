import { createBoard } from '@wixc3/react-board';
import { NavigationTab } from '../../../components/pages/navigation/navigation-tabs/navigation-tab/navigation-tab';

const tab = {
    icon: 'repositories' as const,
    name: 'Repositories',
    counter: 13,
};

export default createBoard({
    name: 'NavigationTab',
    Board: () => <NavigationTab tab={tab} />,
});
