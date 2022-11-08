import { Avatar } from './avatar/avatar';
import styles from './top-bar.module.scss';
import type React from 'react';
import type { ApiUser } from '../../../shared/model/api-user';
import { UserInfo } from './user-info/user-info';
import { ConnectButton } from './connect-button/connect-button';
import { ConnectionsStatus } from './connections-status/connections-status';
import { Techs } from '../overview/techs/techs';
import { pythonIcon } from '../overview/techs/icons/python';
import { cSharpIcon } from '../overview/techs/icons/CSharp';
import { htmlIcon } from '../overview/techs/icons/html';
import { reactIcon } from '../overview/techs/icons/react';
import { nodeIcon } from '../overview/techs/icons/node';
import { jsIcon } from '../overview/techs/icons/js';

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
                    <span className={styles.name}>{user?.name}</span>
                    <span className={styles.username}>{user?.username}</span>
                    <ConnectButton />
                    <ConnectionsStatus connections={'8k'} year={1984} />
                </div>

                <UserInfo
                    organization={user?.organization}
                    location={user?.location}
                    email={user?.email}
                    twitter={user?.twitter}
                    url={user?.url}
                />

                <Techs technologies={[htmlIcon, pythonIcon, cSharpIcon, reactIcon, nodeIcon, jsIcon]} />
            </div>
        </aside>
    );
};
