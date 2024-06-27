import { AsyncElementVM } from "./async-element/async-element-vm";

// this is the AppComponent view model
export class AppVM {
    asyncElementVM: AsyncElementVM | undefined;
    loading: boolean = false;

    async loadAsyncElement(): Promise<void> {
        this.asyncElementVM = undefined;
        this.loading = true;
        this.asyncElementVM = await AsyncElementVM.newAsync();
        this.loading = false;
    }

    async loadAsyncElementButtonClick(): Promise<void> {
        await this.loadAsyncElement();
    }
}