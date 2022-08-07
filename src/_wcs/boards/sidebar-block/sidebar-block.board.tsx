import { createBoard } from '@wixc3/react-board';
import { SidebarBlock } from '../../../components/pages/sidebar/sidebar-block/sidebar-block';

export default createBoard({
    name: 'SidebarBlock',
    Board: () => <SidebarBlock label="Any label goes here">
        <div>lorasdasdasdasd</div>
    </SidebarBlock>
});
