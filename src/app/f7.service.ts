import {Injectable} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {Dom7} from "Dom7";
import ViewParameters = Framework7.ViewParameters;

@Injectable()
export class F7Service {

    private app: Framework7;
    private view: Framework7.View;

    constructor(private location: Location, private router: Router) {
    }

    setupF7AppIfNeed() {
        if (!this.app) {
            console.log("Setting up F7");

            this.app = new Framework7();
            this.view = this.app.addView(".view-main", {
                    dynamicNavbar: true,
                    preroute: (view: Framework7.View, options: ViewParameters) => {
                        if (options.url) {
                            this.router.navigateByUrl(options.url, {skipLocationChange: false}).then(_ => {
                                const pageName = options.url.replace("/", "");
                                let elementById: Dom7 = Dom7(`.page[data-page="${pageName}"]`);
                                view.router.load({pageElement: elementById});
                            });
                            return false;
                        }
                    }
                }
            );
            this.app.onPageAfterBack("*", _ => {
                this.location.back();
            });
        }
    }
}