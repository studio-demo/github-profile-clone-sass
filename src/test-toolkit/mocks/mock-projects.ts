import { ProjectsResponse } from '../../shared/model/api-project';

export const response_projects: ProjectsResponse = {
    user: {
        projects: {
            edges: [
                {
                    node: {
                        name: 'green-turtle',
                        description: 'An RDFa 1.1. implementation for browsers.',
                    },
                },
                {
                    node: {
                        name: 'ldnode',
                        description: 'Linked Data Platform server based on rdflib.js and node.js',
                    },
                },
                {
                    node: {
                        name: 'kokopelli',
                        description: 'Script-based CAD/CAM in Python',
                    },
                },
                {
                    node: {
                        name: 'rabel',
                        description:
                            'Program for reading and writing linked data in various formats.  Short for "RDF Babel".',
                    },
                },
                // {
                //     node: {
                //         name: 'pad',
                //         description: 'A SoLiD app for shared collaborate editing of a text document',
                //     },
                // },
                // {
                //     node: {
                //         name: 'standard',
                //         description: 'JavaScript Standard Style — One Style to Rule Them All',
                //     },
                // },
            ],
        },
    },
};
