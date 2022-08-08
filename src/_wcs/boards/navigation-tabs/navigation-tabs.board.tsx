import { createBoard } from "@wixc3/react-board";
import { ProfileTab } from "../../../components/pages/navigation/navigation-tabs/navigation-tab/navigation-tab";
import { NavigationTabs } from "../../../components/pages/navigation/navigation-tabs/navigation-tabs";

const tabs: ProfileTab[] = [
    {
        icon: "overview",
        name: "Overview",
        isActive: true,
    },
    {
        icon: "repositories",
        name: "Repositories",
        counter: 13,
    },
    {
        icon: "project",
        name: "Projects",
    },
    {
        icon: "package",
        name: "Packages",
    },
    {
        icon: "star",
        name: "Stars",
        counter: 7,
    },
];

export default createBoard({
    name: "NavigationTabs",
    Board: () => <NavigationTabs tabs={tabs} />,
    environmentProps: {
        canvasWidth: 602
    }
});
