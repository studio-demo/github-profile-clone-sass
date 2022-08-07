export class Driver {
    #rootElement: HTMLElement | null;

    constructor(selection: string | HTMLElement = 'body') {
        this.#rootElement =
            typeof selection === 'string' ? document.querySelector(selection) : selection;
    }

    get title() {
        return this.#rootElement?.title;
    }

    get text() {
        return this.#rootElement?.textContent;
    }

    public select(selector: string) {
        return new Driver((this.#rootElement?.querySelector(selector) as HTMLElement) ?? '');
    }

    public selectAll(selector: string) {
        return this.#rootElement?.querySelectorAll(selector);
    }

    public click() {
        this.#rootElement?.click();
    }
}
