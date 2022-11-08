import React from 'react';
import { APIService } from '../shared/api-service';
import type { Fetcher } from '../shared/hooks/use-fetcher';
import type { ApiContributions } from '../shared/model/api-contributions';
import type { APIProject } from '../shared/model/api-project';
import type { ApiUser } from '../shared/model/api-user';

export interface IAppContext {
    apiService: APIService;
    userInfo?: Fetcher<ApiUser | null>;
    userProjects?: Fetcher<APIProject[]>;
    userContributions?: Fetcher<ApiContributions>;
}

export const AppContext = React.createContext<IAppContext>({
    apiService: new APIService(),
});
