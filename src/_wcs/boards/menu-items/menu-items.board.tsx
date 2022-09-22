import { createBoard } from '@wixc3/react-board';
import { IMenuItem } from '../../../components/pages/navigation/menu/menu-item/menu-item';
import { NavigationTabs } from '../../../components/pages/navigation/menu/menu';

const tabs: IMenuItem[] = [
    {
        icon: 'overview',
        name: 'Overview',
        isActive: true,
    },
    {
        icon: 'repositories',
        name: 'Repositories',
        counter: 13,
    },
    {
        icon: 'project',
        name: 'Projects',
    },
    {
        icon: 'package',
        name: 'Packages',
    },
    {
        icon: 'star',
        name: 'Stars',
        counter: 7,
    },
];

export default createBoard({
    name: 'NavigationTabs',
    Board: () => <NavigationTabs menuItems={tabs} />,
    environmentProps: {
        canvasWidth: 602,
    },
});
