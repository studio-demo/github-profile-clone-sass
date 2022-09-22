import { Observable } from './observable';

export class DataFetcher<E> extends Observable<E> {
    constructor(request: () => Promise<E>) {
        super();
        void this.fetch(request);
    }

    private async fetch(request: () => Promise<E>) {
        try {
            const response = await request();

            this.success(response as E);
        } catch (error) {
            this.failure(error);
        }
    }
}
