import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

