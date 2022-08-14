import classNames from 'classnames';
import { memo } from 'react';
import type { GitHubOrganization } from '../../../../../shared/model/github-organization';
import { Link } from '../../../../shared/link/link';
import styles from './organization.module.scss';

export interface OrganizationProps {
    className?: string;
    organization: GitHubOrganization;
}

export const Organization = memo<OrganizationProps>(function Organization({ className, organization }) {
    return (
        <li className={classNames(styles.root, className)}>
            <Link url={'https://github.com/' + organization.login}>
                <img src={organization.avatar} alt={organization.login} />
            </Link>
        </li>
    );
});
