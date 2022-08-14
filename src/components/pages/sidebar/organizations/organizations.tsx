import classNames from 'classnames';
import type React from 'react';
import type { GitHubUser } from '../../../../shared/model/github-user';
import { Organization } from './organization/organization';
import styles from './organizations.module.scss';

export interface OrganizationsProps {
    className?: string;
    organizations?: GitHubUser['organizations'];
}

export const Organizations: React.FC<OrganizationsProps> = ({ className, organizations }) => {
    return (
        <ul className={classNames(styles.root, className)}>
            {organizations?.map((organization) => (
                <Organization key={organization.login} organization={organization} />
            ))}
        </ul>
    );
};
