import {AfterViewInit, Component} from "@angular/core";
import {F7Service} from "./f7.service";

@Component({
    selector: "app-root",
    // moduleId: module.id,
    template: require("./app.component.html")
})
export class AppComponent implements AfterViewInit {

    constructor(private f7Service: F7Service) {
    }

    public ngAfterViewInit(): void {
        this.f7Service.setupF7AppIfNeed();
    }
}