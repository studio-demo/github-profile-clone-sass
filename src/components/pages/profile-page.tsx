import type { Fetcher } from '../../shared/hooks/use-fetcher';
import type { ApiUser } from 'src/shared/model/api-user';

import { Profile } from './profile';

export const ProfilePage: React.FC<{ userInfo: Fetcher<ApiUser | null> }> = ({ userInfo }) => {
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

    return <Profile user={userInfo.data} />;
};
