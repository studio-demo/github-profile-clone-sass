import type { Fetcher } from '../../shared/hooks/use-fetcher';
import type { GitHubUser } from '../../shared/model/github-user';
import { Navigation } from './navigation/navigation';
import { Profile } from './profile';

export const ProfilePage: React.FC<{ userInfo: Fetcher<GitHubUser | null> }> = ({ userInfo }) => {
    if (userInfo.isLoading) {
        document.title = 'Loading...';

        return <div>Loading...</div>;
    }

    if (userInfo.hasError || !userInfo.data) {
        document.title = 'Error';

        const errorMessage =
            typeof userInfo.error === 'object' && userInfo.error !== null && 'toString' in userInfo.error
                ? userInfo.error?.toString()
                : 'Unknown error';

        return <div>{errorMessage}</div>;
    }

    document.title = `${userInfo.data.name} (${userInfo.data.username})`;

    return (
        <>
            <Navigation />

            <Profile user={userInfo.data} />
        </>
    );
};
