import { sleep } from 'promise-assist';
import { response_contributions } from '../test-toolkit/mocks/mock-contributions';
import { response_projects } from '../test-toolkit/mocks/mock-projects';
import { response_user } from '../test-toolkit/mocks/mock-user';
import { DataFetcher } from './data-fetcher';
import { parseContributionsResponse } from './model/api-contributions';
import { parseProjectsResponse } from './model/api-project';
import { parseUserResponse } from './model/api-user';

export class APIService {
    username = '';

    setUsername(username: string) {
        this.username = username;
    }

    public getContributions() {
        return new DataFetcher(async () => {
            await sleep(100);

            return parseContributionsResponse(response_contributions);
        });
    }

    public getUserInfo() {
        return new DataFetcher(async () => {
            await sleep(100);

            return parseUserResponse(response_user);
        });
    }

    public getUserProjects() {
        return new DataFetcher(async () => {
            await sleep(100);

            return parseProjectsResponse(response_projects);
        });
    }
}
