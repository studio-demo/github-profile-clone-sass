import { createBoard } from '@wixc3/react-board';
import { Repositories } from 'src/components/pages/overview/popular-repositories/repositories';

export default createBoard({
    name: 'PopularRepositories',
    Board: () => (
        <Repositories
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
