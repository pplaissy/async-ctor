export class AsyncElementVM {
    // class ctor is private
    private constructor() {}

    // static async class builder. Required to synchronize an async data load on instantiation
    static async newAsync(): Promise<AsyncElementVM> {
        // instantiate a new class
        const tmp = new AsyncElementVM();
        // wait for datas loading
        await tmp.loadData();
        // return class with datas
        return tmp;
    }

    async loadData(): Promise<void> {
        // say loading data takes 3 secs
        return new Promise((resolve) => setTimeout(() => resolve(), 3000));
    }
}