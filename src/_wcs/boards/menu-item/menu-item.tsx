import { createBoard } from '@wixc3/react-board';
import { MenuItem } from '../../../components/pages/navigation/menu/menu-item/menu-item';

const menuItem = {
    icon: 'repositories' as const,
    name: 'Repositories',
    counter: 13,
};

export default createBoard({
    name: 'MenuItem',
    Board: () => <MenuItem menuItem={menuItem} />,
});
