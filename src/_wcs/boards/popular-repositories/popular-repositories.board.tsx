import { createBoard } from '@wixc3/react-board';
import { PopularRepositories } from '../../../components/pages/overview/popular-repositories/popular-repositories';

export default createBoard({
    name: 'PopularRepositories',
    Board: () => (
        <PopularRepositories
            repositories={[
                {
                    description: 'some repo',
                    forks: 12,
                    language: 'JavaScript',
                    name: 'some_fake_name and even with spaces! See m@n 1 c@n d0 anythˆng',
                    stars: 420,
                    url: '#',
                },
            ]}
        />
    ),
});
