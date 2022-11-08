import { sleep } from 'promise-assist';
import { response_contributions } from '../test-toolkit/mocks/mock-contributions';
import { response_repositories } from '../test-toolkit/mocks/mock-repositories';
import { response_user } from '../test-toolkit/mocks/mock-user';
import { DataFetcher } from './data-fetcher';
import { parseContributionsResponse } from './model/api-contributions';
import { parseAPIProjectsResponse } from './model/api-project';
import { parseUserResponse } from './model/api-user';

export class APIService {
    token = '';
    username = '';

    setToken(token: string) {
        this.token = token;
    }

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

    public getUserStats() {
        return new DataFetcher(async () => {
            await sleep(100);

            return {
                reposCount: 35,
                starsCount: 14,
            };
        });
    }

    public getUserRepos() {
        return new DataFetcher(async () => {
            await sleep(100);

            return parseAPIProjectsResponse(response_repositories);
        });
    }
}
