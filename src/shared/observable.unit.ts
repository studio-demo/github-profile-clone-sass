/* eslint-disable @typescript-eslint/unbound-method */
import { expect } from 'chai';
import { beforeEach } from 'mocha';
import { Observable, Subscriber } from './observable';

interface TestObservable {
    // allow tests to accept subscribers with pre-determined emission types;
    // this shouldn't be possible in production code, but it's useful for testing
    subscribe(subscriber: Subscriber<string, 'failure'>): void;
    subscribe(subscriber: Subscriber<string, 'success'>): void;
    unsubscribe(subscriber: Subscriber<string, 'success'>): void;
    unsubscribe(subscriber: Subscriber<string, 'success'>): void;
    // allow tests to access protected methods
    success(value: unknown): void;
}
class TestObservable extends Observable<string> {}

describe('Instances of classes extending Observable:', () => {
    let observable: TestObservable;

    beforeEach(() => {
        observable = new TestObservable();
    });

    it('should pass value to subscriber', () => {
        const subscription: Subscriber<string, 'success'> = (emission) => {
            expect(emission.type).to.equal('success');
            expect(emission.value).to.equal('TEST');
            observable.unsubscribe(subscription);
        };

        expect(observable.subscribe).to.be.a('function');
        observable.subscribe(subscription);

        observable.success('TEST');
    });

    it('should not pass value to subscriber that was unsubscribed', () => {
        let value;

        const subscription: Subscriber<string, 'success'> = (emission) => {
            expect(emission.type).to.equal('success');
            expect(emission.value).to.equal('TEST');
            value = emission.value;
        };

        observable.subscribe(subscription);
        observable.success('TEST');

        expect(observable.unsubscribe).to.be.a('function');
        observable.unsubscribe(subscription);
        observable.success('TEST2');

        expect(value).to.be.equal('TEST');
    });
});
