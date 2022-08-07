import classNames from "classnames";
import type React from "react";
import type { GitHubUser } from "../../../shared/model/github-user";
import { Link } from "../../shared/link/link";
import { Achievements } from "./achievements/achievements";
import { Avatar } from "./avatar/avatar";
import { Bio } from "./bio/bio";
import { Follow } from "./follow/follow";
import { Following } from "./following/following";
import { Organizations } from "./organizations/organizations";
import { SidebarBlock } from "./sidebar-block/sidebar-block";
import styles from "./sidebar.module.scss";
import { UserInfo } from "./user-info/user-info";
export interface SidebarProps {
  className?: string;
  user?: GitHubUser;
}

export const Sidebar: React.FC<SidebarProps> = ({ className, user }) => {
  return (
    <aside className={classNames(styles.root, className)}>
      <Avatar url={user?.avatar} username={user?.username} name={user?.name} />

      <Follow />

      <Bio bio={user?.bio} />

      <Following followers={user?.followers} following={user?.following} />

      <UserInfo
        organization={user?.organization}
        location={user?.location}
        email={user?.email}
        twitter={user?.twitter}
        url={user?.url}
      />

      <SidebarBlock label="Achievements">
        <Achievements />
      </SidebarBlock>

      {user?.organizations?.length ? (
        <SidebarBlock label="Organizations">
          <Organizations organizations={user?.organizations} />
        </SidebarBlock>
      ) : null}

      <Link url="#" mute>
        Block or Report
      </Link>
    </aside>
  );
};
