import { AsyncElementVM } from "./async-element/async-element-vm";

// this is the AppComponent view model
export class AppVM {
    asyncElementVM: AsyncElementVM | undefined;
    loading: boolean = false;

    async loadAsyncElement(): Promise<void> {
        // reset child model for successives actions
        this.asyncElementVM = undefined;
        // display the progress spinner
        this.loading = true;
        // instantiate the child model
        this.asyncElementVM = await AsyncElementVM.newAsync();
        // hide the progress spinner
        this.loading = false;
    }

    async loadAsyncElementButtonClick(): Promise<void> {
        // user clicked on the button
        await this.loadAsyncElement();
    }
}