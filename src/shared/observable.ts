export type Subscriber<VALUE = unknown, EMISSION extends 'any' | 'success' | 'failure' = 'any'> = (
    emission: EMISSION extends 'success'
        ? SuccessfulEmission<VALUE>
        : EMISSION extends 'failure'
        ? ErroneousEmission
        : Emission<VALUE>
) => void;
export type Emission<TYPE> = SuccessfulEmission<TYPE> | ErroneousEmission;
export type SuccessfulEmission<TYPE> = { type: 'success'; value: TYPE };
export type ErroneousEmission = { type: 'error'; error: unknown };

export class Observable<VALUE = unknown> {
    private _subscribers = new Set<Subscriber<VALUE>>();

    public subscribe(subscriber: Subscriber<VALUE>): void {
        this._subscribers.add(subscriber);
    }

    public unsubscribe(subscriber: Subscriber<VALUE>): void {
        this._subscribers.delete(subscriber);
    }

    protected success(value: VALUE): void {
        this.next({ type: 'success', value });
    }

    protected failure(error: unknown): void {
        this.next({ type: 'error', error });
    }

    protected next(emission: Emission<VALUE>): void {
        this._subscribers.forEach((subscriber) => subscriber(emission));
    }
}
