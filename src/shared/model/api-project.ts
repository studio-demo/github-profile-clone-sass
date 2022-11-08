export type ProjectsResponse = {
    user: {
        projects: {
            edges: {
                node: {
                    name: string;
                    description: string;
                };
            }[];
        };
    };
};
export interface APIProject {
    name: string;
    description: string;
}

export const parseProjectsResponse = (response: ProjectsResponse): APIProject[] => {
    return response.user.projects.edges
        .map(({ node }) => node)
        .map((project) => ({
            name: project.name,
            description: project.description,
        }));
};
