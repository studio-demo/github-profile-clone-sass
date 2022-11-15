import { Avatar } from './avatar/avatar';
import styles from './top-bar.module.scss';
import type React from 'react';
import type { ApiUser } from '../../../shared/model/api-user';
import { UserInfo } from './user-info/user-info';
import { ConnectButton } from './connect-button/connect-button';
import { Techs } from '../overview/techs/techs';
import { Connections } from '../../connections/connections';

export interface TopBarProps {
    className?: string;
    user?: ApiUser;
}

export const TopBar: React.FC<TopBarProps> = ({ className, user }) => {
    const avatar =
        user?.avatar || 'https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg';
    return (
        <aside className={`${styles.root} ${className || ''}`}>
            <Avatar url={avatar} username={user?.username} />

            <div className={styles.userinfo}>
                <div className={styles.names}>
                    <ConnectButton />
                    <span className={styles.name}>{user?.name}</span>
                    <span className={styles.username}>{user?.username}</span>
                    <Connections count={user?.followers} />
                    <span className={styles.members}>Member since 1984</span></div>

                <UserInfo
                    organization={user?.organization}
                    location={user?.location}
                    email={user?.email}
                    twitter={user?.twitter}
                    url={user?.url}
                />

                <Techs technologies={user?.techs?.technologies} />
            </div>
        </aside>
    );
};
