import { createContext } from 'react';
import type { ApiContributions } from '../../../../../shared/model/api-contributions';

export const HeatmapContext = createContext<ApiContributions['weeks']>([
    [
        {
            contributionCount: 0,
            date: '2021-07-11',
            contributionLevel: {},
        },
    ],
]);
